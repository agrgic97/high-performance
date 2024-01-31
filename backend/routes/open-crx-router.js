const express = require("express")
const router = express.Router()
const openCRXController = require("../controller/open-crx-controller")

router.get("/accounts", openCRXController.getAllAccounts)
router.get("/account/:id", openCRXController.getAccountById)
router.get("/account", openCRXController.getAccountByName)
router.get("/sales-orders/account/:id", openCRXController.getAllSalesOrdersByAccountId)
router.get("/sales-orders/positions/:id", openCRXController.getSalesOrderPositionsById)
router.get("/product/:id", openCRXController.getProductById)

module.exports = router