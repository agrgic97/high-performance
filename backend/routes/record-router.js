const express = require("express")
const router = express.Router()
const recordController = require("../controller/record-controller")

router.get("/record-information/salesman/:id/year/:year", recordController.getRecordInformationBySalesmanIdAndYear)
router.get("/performance-evaluation/salesman/:id/year/:year", recordController.getPerformanceEvaluationRecordBySalesmanIdAndYear)
router.get("/performance-evaluation/years/salesman/:id", recordController.getPerformanceEvaluationRecordYearsBySalesmanId)
router.get("/orders-evaluation/:id", recordController.getOrdersEvaluationRecordsBySalesmanId)
router.post("/performance-evaluation/salesman/:id", recordController.createSocialPerformanceRecord)
router.post("/record-information", recordController.createRecordInformation)
router.patch("/record-information/:id", recordController.updateRecordInformation)

module.exports = router