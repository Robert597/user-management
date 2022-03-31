const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const User = mongoose.model("Manager", schema);

module.exports = User