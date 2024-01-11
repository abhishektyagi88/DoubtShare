const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const studentRoute = require("./Routes/StudentsRoute");
const tutorRoute = require("./Routes/TutorsRoute");
const doubtRoute = require("./Routes/DoubtsRoute");

require("dotenv").config();
const db = require("./Config/dbConfig");

app.use(cors());
app.use(express.json());

app.use("/api/student", studentRoute);
app.use("/api/tutor", tutorRoute);
app.use("/api/doubt", doubtRoute);


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something Went Wrong !!")
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
    });
}

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001")
})