const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authmiddleware = require("../Middlewares/AuthMiddleWare");

const Student = require("../Models/StudentModel");
const Tutor = require("../Models/TutorModel");

router.post("/register", async (req, res) => {
    try {
        const studentExists = await Student.findOne({ email: req.body.email });
        if (studentExists) {
            res.status(403).send({
                success: false,
                message: "student Already Exists"
            })
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).send({
            success: true,
            message: "Registration Successful | Please Login"
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        const student = await Student.findOne({ email: req.body.email });
        const tutor = await Tutor.findOne({ email: req.body.email });
        if (!student && !tutor) {
            res.status(403).send({
                success: false,
                message: "User Does Not Exist !"
            })
            return;
        }

        if (student) {
            const validPassword = await bcrypt.compare(req.body.password, student.password);
            if (!validPassword) {
                res.status(401).send({
                    success: false,
                    message: "Invalid Credentials"
                })
                return;
            }
            const token = jwt.sign({ studentId: student._id, emailId: student.email }, process.env.jwt_secret, { expiresIn: "1d" });
            res.status(200).send({
                success: true,
                message: "Student Logged In",
                data: {
                    jwt_token: token,
                    istutor: student.isTutor
                }
            })
        } else {
            const validPassword = await bcrypt.compare(req.body.password, tutor.password);
            if (!validPassword) {
                res.status(401).send({
                    success: false,
                    message: "Invalid Credentials"
                })
                return;
            }
            const token = jwt.sign({ tutorId: tutor._id, emailId: tutor.email }, process.env.jwt_secret, { expiresIn: "1d" });
            res.status(200).send({
                success: true,
                message: "Tutor Logged In",
                data: {
                    jwt_token: token,
                    istutor: tutor.isTutor
                }
            })
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Something Went Wrong ! Try Again"
        })
    }
})


router.get("/get-student", authmiddleware, async (req, res) => {
    try {
        const student = await Student.findById(req.body.studentId).select("-password");
        res.send({
            success: true,
            message: "Deatils Fetched Successfully",
            data: student
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
})
module.exports = router;