const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    tour: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TourModel"
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    passengersDetails: {
        type: Object
    },
    specialDetails: {
        type: String
    },
    adults: {
        type: String
    },
    children: {
        type: String
    },
    seniors: {
        type: String
    },
    students: {
        type: String
    },
    leavingOn: {
        type: String
    },
    accommodationInfo: {
        type: String
    },
    accommodation: {
        type: String
    }
})

module.exports = mongoose.model("BookingModel", BookingSchema);