const recordService = require("../service/record-service")

const getAllRecords = async (req, res) => {
    res.json(await recordService.getAllRecords()).status(200)
}

const getRecordById = async (req, res) => {
    res.json(await recordService.getRecord(req.params.id)).status(200)
}

const createRecord = async (req, res) => {
    res.json(await recordService.createRecord(req.params.id, req.body)).status(200)
}

const updateRecord = async (req, res) => {
    res.json(await recordService.updateRecord(req.params.id, req.body)).status(200)
}

const deleteRecord = async (req, res) => {
    res.json(await recordService.deleteRecord(req.params.id)).status(200)
}

module.exports = {
    getAllRecords,
    getRecordById,
    createRecord,
    updateRecord,
    deleteRecord
}