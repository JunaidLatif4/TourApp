const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    title: {
        type: String
    },
    img: {
        type: String
    },
    section1Heading:{
        type:String
    },
    section1Details:{
        type:String
    },
    facts: {
        type: Array
    },
    

})

module.exports = mongoose.model("TourModel", tourSchema);