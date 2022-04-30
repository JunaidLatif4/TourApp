const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model("UserModel", userSchema);