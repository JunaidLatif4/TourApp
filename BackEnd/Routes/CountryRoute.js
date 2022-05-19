const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")
const { cloudinary, uploadCDN } = require("../Middleware/Cloudinary")

const CountryModel = require("../Models/CountryModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, state } = req.query

    try {
        if (id) {
            const country = await CountryModel.findById(id)
            if (country) {
                res.status(200).json({
                    message: "Country Found Success",
                    data: country
                })
            } else {
                res.status(401).json({
                    message: "Country not Found"
                })
            }
        } else if (state) {
            const countries = await CountryModel.find({ state: state })
            if (countries) {
                res.status(200).json({
                    message: "Countries Found Success",
                    data: countries
                })
            } else {
                res.status(401).json({
                    message: "Countries not Found"
                })
            }
        } else {
            const countries = await CountryModel.find()
            if (countries) {
                res.status(200).json({
                    message: "All Countries Found Success",
                    data: countries
                })
            } else {
                res.status(401).json({
                    message: "All Countries not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Countries",
            error
        })
    }
})

Router.post("/", upload.fields([{ name: "img" }, { name: "s3Box1Img" }, { name: "s3Box2Img" }, { name: "s3Box3Img" }, { name: "s3Box4Img" }]), async (req, res) => {
    const { id, state } = req.query
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

        const countryData = await CountryModel.create({
            ...savingData
        })
        await countryData.save()
        res.status(200).json({
            message: "Country Create Success",
            data: countryData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Creating Country",
            error
        })
    }
})

Router.put("/", upload.fields([{ name: "img" }, { name: "s3Box1Img" }, { name: "s3Box2Img" }, { name: "s3Box3Img" }, { name: "s3Box4Img" }]), async (req, res) => {
    const { id, state } = req.query
    // const { title, s1Heading, s1Details } = req.body
    console.log("REQ FILE ==== ", req.files["img"]);
    try {
        if (id) {
            if (req.files["img"].length >= 1 || req.files["s3Box1Img"].length >= 1 || req.files["s3Box2Img"].length >= 1 || req.files["s3Box3Img"].length >= 1 || req.files["s3Box4Img"].length >= 1) {
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

                const updateCountry = await CountryModel.findByIdAndUpdate(id, savingData, { new: true })
                if (updateCountry) {
                    res.status(200).json({
                        message: "Country Update with IMGS Success",
                        data: updateCountry
                    })
                } else {
                    res.status(401).json({
                        message: "Country not Found"
                    })
                }
            } else {
                let updateCountry = await CountryModel.findByIdAndUpdate(id, req.body, { new: true })
                if (updateCountry) {
                    res.status(200).json({
                        message: "Country Update Success",
                        data: updateCountry
                    })
                } else {
                    res.status(401).json({
                        message: "Country not Found"
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
            message: "Internal Server Error at Updating Country",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteCountry = await CountryModel.findByIdAndDelete(id)
            if (deleteCountry) {
                res.status(200).json({
                    message: "Country Deleted Success",
                    data: deleteCountry
                })
            } else {
                res.status(404).json({
                    message: "Country not Found",
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
            message: "Internal Server Error at Deleting Country",
            error
        })
    }
})

module.exports = Router