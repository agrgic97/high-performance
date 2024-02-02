const recordService = require("../service/record-service")

const getAllPerformanceEvaluationRecords = async (req, res) => {
    res.status(200).json(await recordService.getAllSocialPerformanceRecords())
}

const getPerformanceEvaluationRecordById = async (req, res) => {
    res.status(200).json(await recordService.getSocialPerformanceRecordById(req.params.id))
}

const getPerformanceEvaluationRecordBySalesmanIdAndYear = async (req, res) => {
    res.status(200).json(await recordService.getSocialPerformanceRecordBySalesmanIdAndYear(req.params.id, req.params.year))
}

const getRecordInformationBySalesmanIdAndYear = async (req, res) => {
    res.status(200).json(await recordService.getRecordInformationBySalesmanIdAndYear(req.params.id, req.params.year))
}

const getPerformanceEvaluationRecordYearsBySalesmanId = async (req, res) => {
    res.status(200).json(await recordService.getSocialPerformanceRecordYearsBySalesmanId(req.params.id))
}

const getOrdersEvaluationRecordsBySalesmanId = async (req, res) => {
    res.status(200).json(await recordService.getOrdersEvaluationsBySalesmanId(req.params.id))
}

const createSocialPerformanceRecord = async (req, res) => {
    const sid = req.params.id
    const year = req.body["year"]
    const recordExists = await recordService.checkIfSocialPerformanceRecordExistsForYear(sid, year)

    if (recordExists !== null) {
        res.status(400).send(`This salesman already has a record for ${year}!`)
    } else {
        res.status(201).json(await recordService.createSocialPerformanceRecord(req.params.id, req.body))
    }
}

const createRecordInformation = async (req, res) => {
    const { salesmanId, year } = req.body
    const recordInfoExists = await recordService.checkIfRecordInformationExistsForYear(salesmanId, year)
    const recordExists = await recordService.checkIfSocialPerformanceRecordExistsForYear(salesmanId, year)

    if (recordExists === null) {
        res.status(400).send(`Salesman with ID ${salesmanId} has no performance record for ${year}`)
    }else if (recordInfoExists !== null) {
        res.status(400).send(`A record information entry for ${year} already exists!`)
    } else {
        res.status(201).json(await recordService.createRecordInformation(req.body))
    }
}

const updateRecord = async (req, res) => {
    res.status(200).json(await recordService.updateSocialPerformanceRecord(req.params.id, req.body))
}

const deleteRecord = async (req, res) => {
    res.status(200).json(await recordService.deleteSocialPerformanceRecord(req.params.id))
}

module.exports = {
    getAllPerformanceEvaluationRecords,
    getPerformanceEvaluationRecordById,
    getPerformanceEvaluationRecordBySalesmanIdAndYear,
    getPerformanceEvaluationRecordYearsBySalesmanId,
    getRecordInformationBySalesmanIdAndYear,
    getOrdersEvaluationRecordsBySalesmanId,
    createSocialPerformanceRecord,
    createRecordInformation,
    updateRecord,
    deleteRecord
}