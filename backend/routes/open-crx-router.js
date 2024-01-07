const express = require("express")
const router = express.Router()
const openCRXController = require("../controller/open-crx-controller")

router.get("/account", openCRXController.getAccounts)
router.get("/account/:id", openCRXController.getAccount)
router.get("/salesOrder", openCRXController.getSalesOrders)
router.get("/salesOrder/:id", openCRXController.getSalesOrder)

module.exports = router