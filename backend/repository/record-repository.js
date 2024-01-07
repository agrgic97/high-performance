const EvaluationRecord = require("../model/EvaluationRecord")

const findAllEvaluationRecords = async () => {
    return EvaluationRecord.find({})
}

const findEvaluationRecordById = async (id) => {
    return EvaluationRecord.findById(id)
}

const createEvaluationRecord = async (sid, record) => {
    const query = { "_id": Math.random() * 1000, "salesmanId": sid, ...record}
    return EvaluationRecord.create(query)
}

const updateEvaluationRecord = async (id, record) => {
    return EvaluationRecord.findOneAndUpdate({ "_id": id }, record)
}

const deleteEvaluationRecord = async (id) => {
    return EvaluationRecord.deleteOne({ "_id": id })
}

module.exports = {
    findAllEvaluationRecords,
    findEvaluationRecordById,
    createEvaluationRecord,
    updateEvaluationRecord,
    deleteEvaluationRecord
}