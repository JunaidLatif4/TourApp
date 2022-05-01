const Router = require("express").Router()
const mongoose = require("mongoose")
const multer = require("multer")

const TourModel = require("../Models/TourModel")



const upload = multer()


Router.get("/", async (req, res) => {
    const { id, state } = req.query

    try {
        if (id) {
            const tour = await TourModel.findById(id)
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
        } else if (state) {
            const tours = await TourModel.find({ state: state })
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

Router.post("/", upload.fields([{ name: "imgFile" }, { name: "s3Box1ImgFile" }, { name: "s3Box2ImgFile" }, { name: "s3Box3ImgFile" }, { name: "s3Box4ImgFile" }]), async (req, res) => {
    const { id, state } = req.query
    const { title, s1Heading, s1Details } = req.body

    try {
        console.log("BODY ========== " , req.body);
        console.log(req.files);
        // const tourData = await TourModel.create({
        //     ...req.body,
        //     img: "",
        //     s3Box1Img: "",
        //     s3Box2Img: "",
        //     s3Box3Img: "",
        //     s3Box4Img: "",
        // })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Getting Tours",
            error
        })
    }
})

module.exports = Router