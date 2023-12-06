const express = require("express")
const router = express.Router()
const salesmanController = require("../controller/salesman-controller")

router.get("/", salesmanController.getAllSalesmen)
router.get("/:id", salesmanController.getSalesman)
router.post("/", salesmanController.createSalesman)
router.patch("/:id", salesmanController.updateSalesman)
router.delete("/:id", salesmanController.deleteSalesman)

module.exports = router