const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")
const { cloudinary, uploadCDN } = require("../Middleware/Cloudinary")

const BlogModel = require("../Models/BlogModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const blog = await BlogModel.findById(id)
            if (blog) {
                res.status(200).json({
                    message: "Blog Found Success",
                    data: blog
                })
            } else {
                res.status(401).json({
                    message: "Blog not Found"
                })
            }
        } else {
            const blogs = await BlogModel.find()
            if (blogs) {
                res.status(200).json({
                    message: "All Blogs Found Success",
                    data: blogs
                })
            } else {
                res.status(401).json({
                    message: "All Blogs not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Blogs",
            error
        })
    }
})

Router.post("/", upload.fields([{ name: "img" }]), async (req, res) => {
    const { id, country } = req.query

    try {
        let uploadFiles = {}

        let processing = Object.keys(req.files).map(async (key, index) => {
            let file = req.files[key]
            if (file.length >= 1) {
                let uploadRes = await uploadCDN(file[0].path, file[0].fieldName)
                if (uploadRes.data != null) {
                    uploadFiles = {
                        ...uploadFiles,
                        ...uploadRes.data
                    }
                } else {
                    res.status(400).json(
                        uploadRes.error
                    )
                }
            }
        })
        await Promise.all(processing)
        let savingData = {
            ...req.body,
            ...uploadFiles
        }

        const blogData = await BlogModel.create({
            ...savingData
        })
        await blogData.save()
        res.status(200).json({
            message: "Blog Create Success",
            data: blogData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Blog",
            error
        })
    }
})

Router.put("/", upload.fields([{ name: "img" }]), async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            if (req.files["img"].length >= 1) {
                let uploadFiles = {}
                let processing = Object.keys(req.files).map(async (key, index) => {
                    let file = req.files[key]
                    if (file.length >= 1) {
                        let uploadRes = await uploadCDN(file[0].path, file[0].fieldName)
                        if (uploadRes.data != null) {
                            uploadFiles = {
                                ...uploadFiles,
                                ...uploadRes.data
                            }
                        } else {
                            res.status(400).json(
                                uploadRes.error
                            )
                        }
                    }
                })
                await Promise.all(processing)
                let savingData = {
                    ...req.body,
                    ...uploadFiles
                }

                const updateBlog = await BlogModel.findByIdAndUpdate(id, savingData, { new: true })
                if (updateBlog) {
                    res.status(200).json({
                        message: "Blog Update with IMGS Success",
                        data: updateBlog
                    })
                } else {
                    res.status(401).json({
                        message: "Blog not Found"
                    })
                }
            } else {
                let updateBlog = await BlogModel.findByIdAndUpdate(id, req.body, { new: true })
                if (updateBlog) {
                    res.status(200).json({
                        message: "Blog Update Success",
                        data: updateBlog
                    })
                } else {
                    res.status(401).json({
                        message: "Blog not Found"
                    })
                }
            }
        } else {
            res.status(400).json({
                message: "Filed Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Updating Blog",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteBlog = await BlogModel.findByIdAndDelete(id)
            if (deleteBlog) {
                res.status(200).json({
                    message: "Blog Deleted Success",
                    data: deleteBlog
                })
            } else {
                res.status(404).json({
                    message: "Blog not Found",
                })
            }
        } else {
            res.status(400).json({
                message: "Requried Fields Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Deleting Blog",
            error
        })
    }
})

module.exports = Router