const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CountryModel"
    },
    title: {
        type: String
    },
    img: {
        type: Object
    },
    logo: {
        type: Object
    },
    s1Heading: {
        type: String
    },
    s1Details: {
        type: String
    },
    facts: {
        type: Array
    },
    s3Box1Heading: {
        type: String
    },
    s3Box1Detail: {
        type: String
    },
    s3Box1Img: {
        type: Object
    },
    s3Box2Heading: {
        type: String
    },
    s3Box2Detail: {
        type: String
    },
    s3Box2Img: {
        type: Object
    },
    s3Box3Heading: {
        type: String
    },
    s3Box3Detail: {
        type: String
    },
    s3Box3Img: {
        type: Object
    },
})

module.exports = mongoose.model("PlaceModel", placeSchema);