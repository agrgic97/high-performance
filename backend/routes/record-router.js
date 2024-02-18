const express = require("express")
const router = express.Router()
const recordController = require("../controller/record-controller")

/**
 * @swagger
 * components:
 *   schemas:
 *     OrdersEvaluation:
 *       type: object
 *       properties:
 *         nameOfProduct:
 *           type: string
 *         client:
 *           type: string
 *         rating:
 *           type: string
 *         items:
 *           type: number
 *         bonus:
 *           type: number
 *       example:
 *         nameOfProduct: HooverClean
 *         client: Telekom AG
 *         rating: excellent
 *         items: 10
 *         bonus: 500
 *     SocialPerformanceEvaluationRecord:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         salesmanId:
 *           type: number
 *         year:
 *           type: number
 *         socialPerformanceEvaluations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *       example:
 *         _id: 65cd3575cecd78d98729e879
 *         salesmanId: 90123
 *         year: 2024
 *         socialPerformanceEvaluations:
 *           description: Leadership Competence
 *           targetValue: 5
 *           actualValue: 4
 *           bonus: 115
 *     SocialPerformanceEvaluation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         description:
 *           type: string
 *         targetValue:
 *           type: number
 *         actualValue:
 *           type: number
 *         bonus:
 *           type: number
 *       example:
 *         description: Leadership Competence
 *         targetValue: 5
 *         actualValue: 4
 *         bonus: 115
 *     RecordInformation:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         salesmanId:
 *           type: number
 *         year:
 *           type: number
 *         remarks:
 *           type: string
 *         hrSignature:
 *           type: object
 *           properties:
 *             signed:
 *               type: boolean
 *             date:
 *               type: string
 *         ceoSignature:
 *           type: object
 *           properties:
 *             signed:
 *               type: boolean
 *             date:
 *               type: string
 *         salesmanConfirmation:
 *           type: object
 *           properties:
 *             confirmed:
 *               type: boolean
 *             date:
 *               type: string
 *       example:
 *         _id: 65bce0c4f8ae6b7394c991e2
 *         salesmanId: 90123
 *         year: 2024
 *         remarks: Test Remark!
 *         hrSignature:
 *           signed: true
 *           date: 2024-02-16T18:29:27.767Z
 *         ceoSignature:
 *           signed: false
 *         salesmanConfirmation:
 *           confirmed: false
 */

/**
 * @swagger
 * /record/record-information/salesman/{id}/year/{year}:
 *  get:
 *    summary: Returns record information about remarks and signatures by salesman id and year
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *      - in : path
 *        name: year
 *        schema:
 *          type: string
 *        required: true
 *        description: Year of record
 *    responses:
 *      200:
 *        description: The record information of salesman for given year
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RecordInformation'
 *      500:
 *        description: Server error
 *
 */
router.get("/record-information/salesman/:id/year/:year", recordController.getRecordInformationBySalesmanIdAndYear)

/**
 * @swagger
 * /record/performance-evaluation/salesman/{id}/year/{year}:
 *  get:
 *    summary: Returns social performance evaluation by salesman id and year
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *      - in : path
 *        name: year
 *        schema:
 *          type: string
 *        required: true
 *        description: Year of record
 *    responses:
 *      200:
 *        description: The social performance evaluation of salesman for given year
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *      500:
 *        description: Server error
 *
 */
router.get("/performance-evaluation/salesman/:id/year/:year", recordController.getPerformanceEvaluationRecordBySalesmanIdAndYear)

/**
 * @swagger
 * /record/performance-evaluation/years/salesman/{id}:
 *  get:
 *    summary: Returns list of years for which records exist
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *    responses:
 *      200:
 *        description: The list of record years of salesman
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                schema:
 *                  type: number
 *      500:
 *        description: Server error
 *
 */
router.get("/years/salesman/:id", recordController.getRecordYearsBySalesmanId)

/**
 * @swagger
 * /record/orders-evaluation/salesman/{id}/year/{year}:
 *  get:
 *    summary: Returns list of orders evaluation records by salesman id and year
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *      - in: path
 *        name: year
 *        schema:
 *          type: string
 *        required: true
 *        description: Record year
 *    responses:
 *      200:
 *        description: The list of orders evaluation records by salesman and year
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/OrdersEvaluation'
 *      500:
 *        description: Server error
 *
 */
router.get("/orders-evaluation/salesman/:id/year/:year", recordController.getOrdersEvaluationRecordsBySalesmanId)

/**
 * @swagger
 * /record/performance-evaluation/salesman/{id}:
 *  post:
 *    summary: Creates a new social performance record for salesman
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *    responses:
 *      201:
 *        description: The social performance record was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *      400:
 *        description: Record for this year already exists
 *      500:
 *        description: Server error
 */
router.post("/performance-evaluation/salesman/:id", recordController.createSocialPerformanceRecord)

/**
 * @swagger
 * /record/record-information:
 *  post:
 *    summary: Creates a new record information with remarks and signatures
 *    tags: [Records]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RecordInformation'
 *    responses:
 *      201:
 *        description: The record information was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RecordInformation'
 *      400:
 *        description: Bad request
 *      500:
 *        description: Server error
 */
router.post("/record-information", recordController.createRecordInformation)

/**
 * @swagger
 * /record/record-information:
 *  patch:
 *    summary: Updates existing record information with remarks and signatures
 *    tags: [Records]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/RecordInformation'
 *    responses:
 *      200:
 *        description: The record information was successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RecordInformation'
 *      400:
 *        description: Record id does not exist
 *      500:
 *        description: Server error
 */
router.patch("/record-information/:id", recordController.updateRecordInformation)

/**
 * @swagger
 * /record/performance-evaluation/{id}:
 *  post:
 *    summary: Updates existing performance record
 *    tags: [Records]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The salesman id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *    responses:
 *      201:
 *        description: The social performance record was successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SocialPerformanceEvaluation'
 *      400:
 *        description: Record id does not exist
 *      500:
 *        description: Server error
 */
router.patch("/performance-evaluation/:id", recordController.updateSocialPerformanceEvaluation)

module.exports = router