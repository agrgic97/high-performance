const SocialPerformanceEvaluation = require("../schemas/SocialPerformanceEvaluationSchema")
const RecordInformation = require("../schemas/RecordInformationSchema")
const mongoose = require("mongoose");

const findAllSocialPerformanceEvaluations = async () => {
    return SocialPerformanceEvaluation.find({})
}

const findSocialPerformanceEvaluationById = async (id) => {
    return SocialPerformanceEvaluation.findById(id)
}

const findAllSocialPerformanceEvaluationsBySalesmanId = async (sid) => {
    return SocialPerformanceEvaluation.find({ "salesmanId": sid })
}

const findSocialPerformanceEvaluationByYearAndSalesmanId = async (sid, year) => {
    return SocialPerformanceEvaluation.findOne({ "salesmanId" : sid, "year" : year })
}

const findRecordInformationByYearAndSalesmanId = async (sid, year) => {
    return RecordInformation.findOne({ "salesmanId": sid, "year": year })
}

const createSocialPerformanceEvaluation = async (sid, record) => {
    const query = { "_id": new mongoose.Types.ObjectId, "salesmanId": sid, ...record }
    return SocialPerformanceEvaluation.create(query)
}

const createRecordInformation = async (record) => {
    const query = { "_id": new mongoose.Types.ObjectId, ...record }
    return RecordInformation.create(query)
}

const existsSocialPerformanceEvaluationForSalesmanWithYear = async (sid, year) => {
    return SocialPerformanceEvaluation.exists({"salesmanId": sid, "year": year})
}

const existsRecordInformationForSalesmanWithYear = async (sid, year) => {
    return RecordInformation.exists({"salesmanId": sid, "year": year})
}

const updateSocialPerformanceEvaluation = async (id, record) => {
    return SocialPerformanceEvaluation.findOneAndUpdate({"_id": id}, record)
}

const updateRecordInformation = async (id, record) => {
    return RecordInformation.findOneAndUpdate({ "_id": id }, record)
}

module.exports = {
    findAllSocialPerformanceEvaluations,
    findSocialPerformanceEvaluationById,
    findAllSocialPerformanceEvaluationsBySalesmanId,
    findSocialPerformanceEvaluationByYearAndSalesmanId,
    findRecordInformationByYearAndSalesmanId,
    createSocialPerformanceEvaluation,
    createRecordInformation,
    existsSocialPerformanceEvaluationForSalesmanWithYear,
    existsRecordInformationForSalesmanWithYear,
    updateRecordInformation,
    updateSocialPerformanceEvaluation,
}