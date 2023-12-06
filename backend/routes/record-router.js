const express = require("express")
const router = express.Router()
const recordController = require("../controller/record-controller")

router.get("/", recordController.getAllRecords)
router.get("/:id", recordController.getRecord)
router.post("/salesman/:id", recordController.createRecord)
router.patch("/:id", recordController.updateRecord)
router.delete("/:id", recordController.deleteRecord)

module.exports = router