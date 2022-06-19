const mongoose = require("mongoose")

const pathSchema = mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CountryModel"
    },
    title: {
        type: String
    }
})

module.exports = mongoose.model("PathModel", pathSchema)