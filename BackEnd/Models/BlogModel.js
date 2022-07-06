const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    author: {
        type: String
    },
    details: {
        type: String
    },
    img: {
        type: Object
    }

})

module.exports = mongoose.model("BlogModel", blogSchema);