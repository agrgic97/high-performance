const recordService = require("../service/record-service")

const getAllRecords = async (req, res) => {
    res.json(await recordService.getAllRecords()).status(200)
}

const getRecordById = async (req, res) => {
    res.json(await recordService.getRecordById(req.params.id)).status(200)
}

const createRecord = async (req, res) => {
    const sid = req.params.id
    const year = req.body["year"]
    const recordExists = await recordService.checkIfRecordExistsForYear(sid, year)

    if (recordExists !== null) {
        res.status(400).send(`This salesman already has a record for ${year}!`)
    } else {
        res.status(201).json(await recordService.createRecord(req.params.id, req.body))
    }
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