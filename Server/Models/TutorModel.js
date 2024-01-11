const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    isOnline: {
        type: Boolean,
        required: true,
        default: false
    },
    isTutor: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model("tutors", TutorSchema);