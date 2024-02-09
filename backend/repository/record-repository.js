const SocialPerformanceEvaluation = require("../schemas/SocialPerformanceEvaluationSchema")
const RecordInformation = require("../schemas/RecordInformationSchema")
const BonusComputation = require("../schemas/BonusComputationSchema")
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

const findAllBonusComputationsBySalesmanId = async (sid) => {
    return BonusComputation.find({"salesmanId": sid})
}

const createSocialPerformanceEvaluation = async (sid, record) => {
    const query = { "_id": new mongoose.Types.ObjectId, "salesmanId": sid, ...record }
    return SocialPerformanceEvaluation.create(query)
}

const createRecordInformation = async (record) => {
    const query = { "_id": new mongoose.Types.ObjectId, ...record }
    return RecordInformation.create(query)
}

const createBonusComputation = async (record) => {
    const query = { "_id": new mongoose.Types.ObjectId, ...record }
    return BonusComputation.create(query)
}

const existsSocialPerformanceEvaluationForSalesmanWithYear = async (sid, year) => {
    return SocialPerformanceEvaluation.exists({"salesmanId": sid, "year": year})
}

const existsRecordInformationForSalesmanWithYear = async (sid, year) => {
    return RecordInformation.exists({"salesmanId": sid, "year": year})
}

const updateRecordInformation = async (id, record) => {
    return RecordInformation.findOneAndUpdate({ "_id": id }, record)
}

const deleteSocialPerformanceEvaluation = async (id) => {
    return SocialPerformanceEvaluation.deleteOne({ "_id": id })
}

module.exports = {
    findAllSocialPerformanceEvaluations,
    findSocialPerformanceEvaluationById,
    findAllSocialPerformanceEvaluationsBySalesmanId,
    findAllBonusComputationsBySalesmanId,
    findSocialPerformanceEvaluationByYearAndSalesmanId,
    findRecordInformationByYearAndSalesmanId,
    createSocialPerformanceEvaluation,
    createRecordInformation,
    createBonusComputation,
    existsSocialPerformanceEvaluationForSalesmanWithYear,
    existsRecordInformationForSalesmanWithYear,
    updateRecordInformation,
    deleteSocialPerformanceEvaluation
}