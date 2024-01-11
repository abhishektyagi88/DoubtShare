const mongoose = require("mongoose");

const DoubtSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
})

module.exports = mongoose.model("doubts", DoubtSchema);