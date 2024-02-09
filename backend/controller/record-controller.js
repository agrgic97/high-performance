const recordService = require("../service/record-service")

const getAllPerformanceEvaluationRecords = async (req, res) => {
    res.status(200).json(await recordService.getAllSocialPerformanceRecords())
}

const getAllBonusComputationsBySalesmanId = async (req, res) => {
    res.status(200).json(await recordService.getAllBonusComputationsBySalesmanId(req.params.id))
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

const createBonusComputation = async (req, res) => {
    res.status(201).json(await recordService.createBonusComputation(req.body))
}

const updateRecordInformation = async (req, res) => {
    const response = await recordService.updateRecordInformation(req.params.id, req.body)
    if (response === null) res.status(400).json({"success": false, "message": "Record ID does not exist."})
    res.status(200).json({"success": true, "message": "Record successfully updated."})
}

const deleteRecord = async (req, res) => {
    res.status(200).json(await recordService.deleteSocialPerformanceRecord(req.params.id))
}

module.exports = {
    getAllPerformanceEvaluationRecords,
    getAllBonusComputationsBySalesmanId,
    getPerformanceEvaluationRecordById,
    getPerformanceEvaluationRecordBySalesmanIdAndYear,
    getPerformanceEvaluationRecordYearsBySalesmanId,
    getRecordInformationBySalesmanIdAndYear,
    getOrdersEvaluationRecordsBySalesmanId,
    createSocialPerformanceRecord,
    createRecordInformation,
    createBonusComputation,
    updateRecordInformation,
    deleteRecord
}