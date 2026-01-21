const express = require("express");
const router = express.Router();

const usersControler = require("../controler/users.controler");
const verfiyToken = require("./middleware/verfayToken");
const loginLimiter = require("./middleware/rateLimit");
const AppError = require("../Utiles/app.error");

const multer = require("multer");

/* ================= Multer Config ================= */

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        const fileName = `user-${Date.now()}.${ext}`;
        cb(null, fileName);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new AppError("File must be an image", 400), false);
    }
};

const upload = multer({
    storage: diskStorage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
});

/* ================= Swagger ================= */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users authentication & management
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post(
    "/register",
    upload.single("avatar"),
    usersControler.Register
);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login successful and JWT returned
 */
router.post("/login", loginLimiter, usersControler.Login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */
router.get("/", verfiyToken, usersControler.getAllUsers);

module.exports = router;
