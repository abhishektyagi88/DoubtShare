const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.jwt_secret);
        req.body.studentId = decoded.studentId;
        next();
    } catch (err) {
        res.status(401).send({
            success: false,
            message: "Invalid Token"
        })
    }
}   