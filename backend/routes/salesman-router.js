const express = require("express")
const router = express.Router()
const salesmanController = require("../controller/salesman-controller")

/**
 * @swagger
 * components:
 *   schemas:
 *     Salesman:
 *       type: object
 *       properties:
 *         _id:
 *           type: number
 *           description: ID taken from Open CRX
 *         orangeHRMId:
 *           type: number
 *           description: ID taken from Orange HRM
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         department:
 *           type: string
 *       example:
 *         _id: 90123
 *         orangeHRMId: 2
 *         firstname: John
 *         lastname: Smith
 *         department: Sales
 *     Bonus:
 *       type: object
 *       properties:
 *         year:
 *           type: number
 *         value:
 *           type: number
 *       example:
 *         year: 2024
 *         value: 3000
 *     BonusComputation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         salesmanId:
 *           type: number
 *         year:
 *           type: number
 *         ordersEvaluationBonus:
 *           type: number
 *         socialPerformanceEvaluationBonus:
 *           type: number
 *       example:
 *         _id: 65bce0768943fb7394c991e2
 *         salesmanId: 90123
 *         year: 2024
 *         ordersEvaluationBonus: 5000
 *         socialPerformanceEvaluationBonus: 1000
 */

/**
 * @swagger
 * /salesman:
 *  get:
 *    summary: Returns a list of all salesmen
 *    tags: [Salesman]
 *    responses:
 *      200:
 *        description: The list of salesmen
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Salesman'
 */
router.get("/", salesmanController.getAllSalesmen)

/**
 * @swagger
 * /salesman/{id}:
 *  get:
 *    summary: Returns salesman by id
 *    tags: [Salesman]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *    responses:
 *      200:
 *        description: The salesman by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Salesman'
 *      404:
 *        description: The salesman was not found
 *
 */
router.get("/:id", salesmanController.getSalesmanById)

/**
 * @swagger
 * /salesman/{id}/bonus-computation:
 *  get:
 *    summary: Returns list of bonus computations by salesman id
 *    tags: [Salesman]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *    responses:
 *      200:
 *        description: The list of bonus computations by salesman
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/BonusComputation'
 *      500:
 *        description: Server error
 *
 */
router.get("/:id/bonus-computation", salesmanController.getAllBonusComputationsBySalesmanId)

/**
 * @swagger
 * /salesman:
 *  post:
 *    summary: Creates a new salesman
 *    tags: [Salesman]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Salesman'
 *    responses:
 *      201:
 *        description: The salesman was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Salesman'
 *      500:
 *        description: Server error
 */
router.post("/", salesmanController.createSalesman)

/**
 * @swagger
 * /salesman/{id}/bonus-salary:
 *  post:
 *    summary: Updates bonus salary of salesman by orange hrm id
 *    tags: [Salesman]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman orange hrm id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Bonus'
 *    responses:
 *      200:
 *        description: Bonus updated successfully
 *      500:
 *        description: Server error
 */
router.post("/:id/bonus-salary", salesmanController.updateBonusSalary)

/**
 * @swagger
 * /salesman/bonus-computation:
 *  post:
 *    summary: Creates a new bonus computation
 *    tags: [Salesman]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/BonusComputation'
 *    responses:
 *      201:
 *        description: The bonus computation was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BonusComputation'
 *      500:
 *        description: Server error
 */
router.post("/bonus-computation", salesmanController.createBonusComputation)

/**
 * @swagger
 * /salesman/{id}:
 *  patch:
 *    summary: Updates a salesman by id
 *    tags: [Salesman]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Salesman id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Salesman'
 *    responses:
 *      200:
 *        description: The salesman was successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Salesman'
 *      500:
 *        description: Server error
 */
router.patch("/:id", salesmanController.updateSalesman)

module.exports = router