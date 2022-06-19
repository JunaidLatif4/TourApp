const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CountryModel"
    },
    path: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PathModel"
    },
    time: {
        type: String
    },
    title: {
        type: String
    },
    img1: {
        type: Object
    },
    img2: {
        type: Object
    },
    img3: {
        type: Object
    },
    mapLink: {
        type: String
    },
    price: {
        type: String
    },
    explore: {
        type: String
    },
    journey: {
        type: String
    },
    start: {
        type: String
    },
    finish: {
        type: String
    },
    luggage: {
        type: String
    },
    discount: {
        type: String
    },
})

module.exports = mongoose.model("TourModel", tourSchema);