const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")
const { cloudinary, uploadCDN } = require("../Middleware/Cloudinary")

const PlaceModel = require("../Models/PlaceModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const tour = await PlaceModel.findById(id)
            if (tour) {
                res.status(200).json({
                    message: "Place Found Success",
                    data: tour
                })
            } else {
                res.status(401).json({
                    message: "Place not Found"
                })
            }
        } else if (country) {
            const tours = await PlaceModel.find({ country: country })
            if (tours) {
                res.status(200).json({
                    message: "Places Found Success",
                    data: tours
                })
            } else {
                res.status(401).json({
                    message: "Places not Found"
                })
            }
        } else {
            const tours = await PlaceModel.find()
            if (tours) {
                res.status(200).json({
                    message: "All Places Found Success",
                    data: tours
                })
            } else {
                res.status(401).json({
                    message: "All Places not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Places",
            error
        })
    }
})

Router.post("/", upload.fields([{ name: "img" }, { name: "logo" }, { name: "s3Box1Img" }, { name: "s3Box2Img" }, { name: "s3Box3Img" }]), async (req, res) => {
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

        const tourData = await PlaceModel.create({
            ...savingData
        })
        await tourData.save()
        res.status(200).json({
            message: "Place Create Success",
            data: tourData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Place",
            error
        })
    }
})

Router.put("/", upload.fields([{ name: "img" }, { name: "logo" }, { name: "s3Box1Img" }, { name: "s3Box2Img" }, { name: "s3Box3Img" }]), async (req, res) => {
    const { id, country } = req.query
    // const { title, s1Heading, s1Details } = req.body

    try {
        if (id) {
            if (req.files["img"].length >= 1 || req.files["logo"].length >= 1 || req.files["s3Box1Img"].length >= 1 || req.files["s3Box2Img"].length >= 1 || req.files["s3Box3Img"].length >= 1) {
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

                const updateTour = await PlaceModel.findByIdAndUpdate(id, savingData, { new: true })
                if (updateTour) {
                    res.status(200).json({
                        message: "Place Update with IMGS Success",
                        data: updateTour
                    })
                } else {
                    res.status(401).json({
                        message: "Place not Found"
                    })
                }
            } else {
                let updateTour = await PlaceModel.findByIdAndUpdate(id, req.body, { new: true })
                if (updateTour) {
                    res.status(200).json({
                        message: "Place Update Success",
                        data: updateTour
                    })
                } else {
                    res.status(401).json({
                        message: "Place not Found"
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
            message: "Internal Server Error at Updating Place",
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
                    message: "Place Deleted Success",
                    data: deleteCountry
                })
            } else {
                res.status(404).json({
                    message: "Place not Found",
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
            message: "Internal Server Error at Deleting Place",
            error
        })
    }
})

module.exports = Router