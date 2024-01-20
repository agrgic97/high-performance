const recordRepository = require("../repository/record-repository")

const getAllRecords = async () => {
    return await recordRepository.findAllEvaluationRecords()
}

const getRecordById = async (id) => {
    return await recordRepository.findEvaluationRecordById(id)
}

const createRecord = async (sid, record) => {
    return await recordRepository.createEvaluationRecord(sid, record)
}

const updateRecord = async (id, record) => {
    return await recordRepository.updateEvaluationRecord(id, record)
}

const checkIfRecordExistsForYear = async (sid, year) => {
    return await recordRepository.existsEvaluationRecordForSalesmanWithYear(sid, year)
}

const deleteRecord = async (id) => {
    return await recordRepository.deleteEvaluationRecord(id)
}

module.exports = {
    getAllRecords,
    getRecordById,
    createRecord,
    updateRecord,
    checkIfRecordExistsForYear,
    deleteRecord
}