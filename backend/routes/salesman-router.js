const express = require("express")
const router = express.Router()
const salesmanController = require("../controller/salesman-controller")

router.get("/", salesmanController.getAllSalesmen)
router.get("/:id", salesmanController.getSalesmanById)
router.post("/", salesmanController.createSalesman)
router.post("/:id/bonus-salary", salesmanController.updateBonusSalary)
router.patch("/:id", salesmanController.updateSalesman)
router.delete("/:id", salesmanController.deleteSalesman)

module.exports = router