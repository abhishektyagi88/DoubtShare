const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const Tutor = require("../Models/TutorModel");

router.post("/register", async (req, res) => {
    try {
        const tutorExists = await Tutor.findOne({ email: req.body.email });
        if (tutorExists) {
            res.status(403).send({
                success: false,
                message: "User Already Exists"
            })
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newTutor = new Tutor(req.body);
        await newTutor.save();
        res.status(200).send({
            success: true,
            message: "Registration Successful"
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})



module.exports = router;