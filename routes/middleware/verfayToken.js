const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = (req, res, next) => {
const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: "Token is required" });
        }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("Decoded Token:", decodedToken);

        // نخزن بيانات اليوزر جوه req علشان نستعملها بعدين
        req.decodedToken = decodedToken;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
    };

module.exports = verifyToken;
