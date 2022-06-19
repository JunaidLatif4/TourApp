const Router = require("express").Router()
const mongoose = require("mongoose")

const PathModel = require("../Models/PathModel")


Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const path = await PathModel.findById(id).populate("country")
            if (path) {
                res.status(200).json({
                    message: "Path Found Success",
                    data: path
                })
            } else {
                res.status(401).json({
                    message: "Path not Found"
                })
            }
        } else if (country) {
            const paths = await PathModel.find({ country: country }).populate("country")
            if (paths) {
                res.status(200).json({
                    message: "Paths Found Success",
                    data: paths
                })
            } else {
                res.status(401).json({
                    message: "Paths not Found"
                })
            }
        }
        else {
            const paths = await PathModel.find().populate("country")
            if (paths) {
                res.status(200).json({
                    message: "All Paths Found Success",
                    data: paths
                })
            } else {
                res.status(401).json({
                    message: "All Paths not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Paths",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    // const { title, s1Heading, s1Details } = req.body

    try {
        const pathData = await PathModel.create(req.body)
        await pathData.save()
        res.status(200).json({
            message: "Path Create Success",
            data: pathData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Creating Path",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, state } = req.query
    // const { title, s1Heading, s1Details } = req.body
    try {
        if (id) {
            const updatePath = await PathModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updatePath) {
                res.status(200).json({
                    message: "Path Update Success",
                    data: updatePath
                })
            } else {
                res.status(401).json({
                    message: "Path not Found"
                })
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
            message: "Internal Server Error at Updating Path",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deletePath = await PathModel.findByIdAndDelete(id)
            if (deletePath) {
                res.status(200).json({
                    message: "Path Deleted Success",
                    data: deletePath
                })
            } else {
                res.status(404).json({
                    message: "Path not Found",
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
            message: "Internal Server Error at Deleting Path",
            error
        })
    }
})

module.exports = Router