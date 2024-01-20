const express = require("express")
const router = express.Router()
const openCRXController = require("../controller/open-crx-controller")

router.get("/accounts", openCRXController.getAllAccounts)
router.get("/account/:id", openCRXController.getAccountById)
router.get("/account", openCRXController.getAccountByName)
router.get("/sales-orders/:id", openCRXController.getAllSalesOrdersByAccountId)

module.exports = router