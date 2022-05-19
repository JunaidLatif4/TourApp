const Router = require("express").Router()
const mongoose = require("mongoose")

const BookingModel = require("../Models/BookingModel")


Router.get("/", async (req, res) => {
    const { id, state } = req.query

    try {
        if (id) {
            const booking = await BookingModel.findById(id).populate("tour")
            if (booking) {
                res.status(200).json({
                    message: "Booking Found Success",
                    data: booking
                })
            } else {
                res.status(401).json({
                    message: "Booking not Found"
                })
            }
        } else if (state) {
            const bookings = await BookingModel.find({ state: state }).populate("tour")
            if (bookings) {
                res.status(200).json({
                    message: "Bookings Found Success",
                    data: bookings
                })
            } else {
                res.status(401).json({
                    message: "Bookings not Found"
                })
            }
        } else {
            const bookings = await BookingModel.find().populate("tour")
            if (bookings) {
                res.status(200).json({
                    message: "All Bookings Found Success",
                    data: bookings
                })
            } else {
                res.status(401).json({
                    message: "All Bookings not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Bookings",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    // const { title, s1Heading, s1Details } = req.body

    try {
        const bookingData = await BookingModel.create(req.body)
        await bookingData.save()
        res.status(200).json({
            message: "Booking Create Success",
            data: bookingData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Creating Booking",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, state } = req.query
    // const { title, s1Heading, s1Details } = req.body
    try {
        if (id) {
            const updateBooking = await BookingModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updateBooking) {
                res.status(200).json({
                    message: "Booking Update Success",
                    data: updateBooking
                })
            } else {
                res.status(401).json({
                    message: "Booking not Found"
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
            message: "Internal Server Error at Updating Booking",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteBooking = await BookingModel.findByIdAndDelete(id)
            if (deleteBooking) {
                res.status(200).json({
                    message: "Booking Deleted Success",
                    data: deleteBooking
                })
            } else {
                res.status(404).json({
                    message: "Booking not Found",
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
            message: "Internal Server Error at Deleting Booking",
            error
        })
    }
})

module.exports = Router