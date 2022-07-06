const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")
const { cloudinary, uploadCDN } = require("../Middleware/Cloudinary")

const TourModel = require("../Models/TourModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const tour = await TourModel.findById(id)
                .populate("country").populate("path")
            if (tour) {
                res.status(200).json({
                    message: "Tour Found Success",
                    data: tour
                })
            } else {
                res.status(401).json({
                    message: "Tour not Found"
                })
            }
        } else if (country) {
            const tours = await TourModel.find({ country: country })
                .populate("country").populate("path")
            if (tours) {
                res.status(200).json({
                    message: "Tours Found Success",
                    data: tours
                })
            } else {
                res.status(401).json({
                    message: "Tours not Found"
                })
            }
        } else {
            const tours = await TourModel.find()
                .populate("country").populate("path")
            if (tours) {
                res.status(200).json({
                    message: "All Tours Found Success",
                    data: tours
                })
            } else {
                res.status(401).json({
                    message: "All Tours not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Tours",
            error
        })
    }
})

Router.post("/", upload.fields([{ name: "img1" }, { name: "img2" }, { name: "img3" }]), async (req, res) => {
    const { id, country } = req.query
    // const { title, s1Heading, s1Details } = req.body

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

        const tourData = await TourModel.create({
            ...savingData
        })
        await tourData.save()
        res.status(200).json({
            message: "Toure Create Success",
            data: tourData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Getting Tours",
            error
        })
    }
})

Router.put("/", upload.fields([{ name: "img1" }, { name: "img2" }, { name: "img3" }]), async (req, res) => {
    const { id, country } = req.query
    // const { title, s1Heading, s1Details } = req.body

    try {
        if (id) {
            if (req.files["img1"].length >= 1 || req.files["img2"].length >= 1 || req.files["img3"].length >= 1) {
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

                const updateTour = await TourModel.findByIdAndUpdate(id, savingData, { new: true })
                if (updateTour) {
                    res.status(200).json({
                        message: "Toure Update with IMGS Success",
                        data: updateTour
                    })
                } else {
                    res.status(401).json({
                        message: "Tour not Found"
                    })
                }
            } else {
                let updateTour = await TourModel.findByIdAndUpdate(id, req.body, { new: true })
                if (updateTour) {
                    res.status(200).json({
                        message: "Toure Update Success",
                        data: updateTour
                    })
                } else {
                    res.status(401).json({
                        message: "Tour not Found"
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
            message: "Internal Server Error at Getting Tours",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteTour = await TourModel.findByIdAndDelete(id)
            if (deleteTour) {
                res.status(200).json({
                    message: "Tour Deleted Success",
                    data: deleteTour
                })
            } else {
                res.status(404).json({
                    message: "Tour not Found",
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
            message: "Internal Server Error at Deleting Tour",
            error
        })
    }
})

module.exports = Router