const express = require("express")
const router = express.Router()
const orangeHRMController = require("../controller/orange-hrm-controller")

router.get("/salesmen", orangeHRMController.getAllSalesmen)
router.get("/salesman/:id", orangeHRMController.getSalesmanById)

module.exports = router