const recordService = require("../service/record-service")

const getAllPerformanceEvaluationRecords = async (req, res) => {
    res.status(200).json(await recordService.getAllSocialPerformanceRecords())
}

const getPerformanceEvaluationRecordById = async (req, res) => {
    res.status(200).json(await recordService.getSocialPerformanceRecordById(req.params.id))
}

const getPerformanceEvaluationRecordBySalesmanIdAndYear = async (req, res) => {
    try {
        res.status(200).json(await recordService.getSocialPerformanceRecordBySalesmanIdAndYear(req.params.id, req.params.year))
    } catch (error) {
        res.status(500).send(error)
    }
}

const getRecordInformationBySalesmanIdAndYear = async (req, res) => {
    try {
        res.status(200).json(await recordService.getRecordInformationBySalesmanIdAndYear(req.params.id, req.params.year))
    } catch (error) {
        res.status(500).send(error)
    }
}

const getRecordYearsBySalesmanId = async (req, res) => {
    try {
        res.status(200).json(await recordService.getRecordYearsBySalesmanId(req.params.id))
    } catch (error) {
        res.status(500).send(error)
    }
}

const getOrdersEvaluationRecordsBySalesmanId = async (req, res) => {
    try {
        res.status(200).json(await recordService.getOrdersEvaluationsBySalesmanId(req.params.id, req.params.year))
    } catch (error) {
        res.status(500).send(error)
    }
}

const createSocialPerformanceRecord = async (req, res) => {
    try {
        const sid = req.params.id
        const year = req.body["year"]
        const recordExists = await recordService.checkIfSocialPerformanceRecordExistsForYear(sid, year)

        if (recordExists !== null) {
            res.status(400).send(`This salesman already has a record for ${year}!`)
        } else {
            res.status(201).json(await recordService.createSocialPerformanceRecord(req.params.id, req.body))
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const createRecordInformation = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateRecordInformation = async (req, res) => {
    try {
        const response = await recordService.updateRecordInformation(req.params.id, req.body)
        if (response === null) res.status(400).json({"success": false, "message": "Record ID does not exist."})
        res.status(200).json({"success": true, "message": "Record successfully updated."})
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateSocialPerformanceEvaluation = async (req, res) => {
    try {
        const response = await recordService.updateSocialPerformanceEvaluation(req.params.id, req.body)
        if (response === null) res.status(400).json({"success": false, "message": "Record ID does not exist."})
        res.status(200).json({"success": true, "message": "Record successfully updated."})
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getAllPerformanceEvaluationRecords,
    getPerformanceEvaluationRecordById,
    getPerformanceEvaluationRecordBySalesmanIdAndYear,
    getRecordYearsBySalesmanId,
    getRecordInformationBySalesmanIdAndYear,
    getOrdersEvaluationRecordsBySalesmanId,
    createSocialPerformanceRecord,
    createRecordInformation,
    updateRecordInformation,
    updateSocialPerformanceEvaluation,
}