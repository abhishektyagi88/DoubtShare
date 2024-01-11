const express = require("express");

const router = express.Router();
const Doubt = require("../Models/DoubtModel");

router.post("/add-doubt", async (req, res) => {
    try {
        const newDoubt = new Doubt(req.body);
        await newDoubt.save();
        res.status(200).send({
            success: true,
            message: "Doubt Created Successfully ! Finding Tutors Online"
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})

router.get("/get-all-doubts", async (req, res) => {
    try {
        const doubts = await Doubt.find();
        res.send({
            success: true,
            message: "All Doubts Fetched Successfuly",
            data: doubts
        })
    } catch (err) {
        re.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})

router.delete("/delete-doubt", async (req, res) => {
    try {
        await Doubt.findByIdAndDelete(req.query.doubtId);
        res.send({
            success: true,
            message: "Doubt Deleted Successfuly"
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})


module.exports = router;