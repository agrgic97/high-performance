const express = require("express")
const router = express.Router()
const recordController = require("../controller/record-controller")

router.get("/", recordController.getAllPerformanceEvaluationRecords)
router.get("/:id", recordController.getPerformanceEvaluationRecordById)
router.get("/performance-evaluation/salesman/:id/year/:year", recordController.getPerformanceEvaluationRecordBySalesmanIdAndYear)
router.get("/performance-evaluation/years/salesman/:id", recordController.getPerformanceEvaluationRecordYearsBySalesmanId)
router.get("/orders-evaluation/:id", recordController.getOrdersEvaluationRecordsBySalesmanId)
router.post("/salesman/:id", recordController.createRecord)
router.patch("/:id", recordController.updateRecord)
router.delete("/:id", recordController.deleteRecord)

module.exports = router