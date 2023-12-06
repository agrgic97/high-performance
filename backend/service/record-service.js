const recordRepository = require("../repository/record-repository")

const getAllRecords = async () => {
    return await recordRepository.findAllEvaluationRecords()
}

const getRecord = async (id) => {
    return await recordRepository.findEvaluationRecord(id)
}

const createRecord = async (sid, record) => {
    return await recordRepository.createEvaluationRecord(sid, record)
}

const updateRecord = async (id, record) => {
    return await recordRepository.updateEvaluationRecord(id, record)
}

const deleteRecord = async (id) => {
    return await recordRepository.deleteEvaluationRecord(id)
}

module.exports = {
    getAllRecords,
    getRecord,
    createRecord,
    updateRecord,
    deleteRecord
}