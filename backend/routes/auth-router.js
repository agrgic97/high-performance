const express = require("express")
const router = express.Router()
const authController = require("../controller/auth-controller")

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         employeeId:
 *           type: number
 *         role:
 *           type: string
 *     Login:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         username: Chantal Banks
 *         password: 123456
 *     Registration:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *         employeeId:
 *           type: number
 *         role:
 *           type: string
 *       example:
 *         username: Michael Moore
 *         password: 123456
 *         employeeId: 98777
 *         role: CEO
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *     responses:
 *     200:
 *       description: New user successfully registered
 *       content:
 *         application/json:
 *           type: object
 *           properties:
 *             success:
 *               type: boolean
 *             user:
 *               type: object
 *               schema:
 *                 $ref: '#/components/schemas/user'
 *     401:
 *       description: Invalid credentials
 *     500:
 *       description: Login failed
 */
router.post("/login", authController.loginUser)

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registers new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *     201:
 *       description: New user successfully registered
 *     500:
 *       description Registration failed
 */
router.post("/register", authController.registerUser)

module.exports = router