const EvaluationRecord = require("../schemas/EvaluationRecordSchema")
const mongoose = require("mongoose");

const findAllEvaluationRecords = async () => {
    return EvaluationRecord.find({})
}

const findEvaluationRecordById = async (id) => {
    return EvaluationRecord.findById(id)
}

const findEvaluationRecordByYearAndSalesmanId = async (sid, year) => {
    return EvaluationRecord.find({ "salesmanId" : sid, "year" : year })
}

const createEvaluationRecord = async (sid, record) => {
    const query = { "_id": new mongoose.Types.ObjectId, "salesmanId": sid, ...record }
    return EvaluationRecord.create(query)
}

const existsEvaluationRecordForSalesmanWithYear = async (sid, year) => {
    return EvaluationRecord.exists({"salesmanId": sid, "year": year})
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
    findEvaluationRecordByYearAndSalesmanId,
    createEvaluationRecord,
    existsEvaluationRecordForSalesmanWithYear,
    updateEvaluationRecord,
    deleteEvaluationRecord
}