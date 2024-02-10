const express = require("express")
const router = express.Router()
const recordController = require("../controller/record-controller")

router.get("/record-information/salesman/:id/year/:year", recordController.getRecordInformationBySalesmanIdAndYear)
router.get("/performance-evaluation/salesman/:id/year/:year", recordController.getPerformanceEvaluationRecordBySalesmanIdAndYear)
router.get("/performance-evaluation/years/salesman/:id", recordController.getPerformanceEvaluationRecordYearsBySalesmanId)
router.get("/orders-evaluation/:id", recordController.getOrdersEvaluationRecordsBySalesmanId)
router.get("/bonus-computation/:id", recordController.getAllBonusComputationsBySalesmanId)
router.post("/performance-evaluation/salesman/:id", recordController.createSocialPerformanceRecord)
router.post("/record-information", recordController.createRecordInformation)
router.post("/bonus-computation", recordController.createBonusComputation)
router.patch("/record-information/:id", recordController.updateRecordInformation)
router.patch("/performance-evaluation/:id", recordController.updateSocialPerformanceEvaluation)

module.exports = router