const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    title: {
        type: String
    },
    primary: {
        type: String,
        default:"false"
    },
    img: {
        type: Object
    },
    s1Heading: {
        type: String
    },
    s1Details: {
        type: String
    },
    youtubeLink: {
        type: String
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
    // s3Box4Heading: {
    //     type: String
    // },
    // s3Box4Detail: {
    //     type: String
    // },
    // s3Box4Img: {
    //     type: Object
    // },

})

module.exports = mongoose.model("CountryModel", countrySchema);