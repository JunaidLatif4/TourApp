const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
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
        type: String
    },
    s3Box2Heading: {
        type: String
    },
    s3Box2Detail: {
        type: String
    },
    s3Box2Img: {
        type: String
    },
    s3Box3Heading: {
        type: String
    },
    s3Box3Detail: {
        type: String
    },
    s3Box3Img: {
        type: String
    },
    s3Box4Heading: {
        type: String
    },
    s3Box4Detail: {
        type: String
    },
    s3Box4Img: {
        type: String
    },

})

module.exports = mongoose.model("TourModel", tourSchema);