const SocialPerformanceEvaluation = require("../schemas/SocialPerformanceEvaluationSchema")
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

const createSocialPerformanceEvaluation = async (sid, record) => {
    const query = { "_id": new mongoose.Types.ObjectId, "salesmanId": sid, ...record }
    return SocialPerformanceEvaluation.create(query)
}

const existsSocialPerformanceEvaluationForSalesmanWithYear = async (sid, year) => {
    return SocialPerformanceEvaluation.exists({"salesmanId": sid, "year": year})
}

const updateSocialPerformanceEvaluation = async (id, record) => {
    return SocialPerformanceEvaluation.findOneAndUpdate({ "_id": id }, record)
}

const deleteSocialPerformanceEvaluation = async (id) => {
    return SocialPerformanceEvaluation.deleteOne({ "_id": id })
}

module.exports = {
    findAllSocialPerformanceEvaluations,
    findSocialPerformanceEvaluationById,
    findAllSocialPerformanceEvaluationsBySalesmanId,
    findSocialPerformanceEvaluationByYearAndSalesmanId,
    createSocialPerformanceEvaluation,
    existsSocialPerformanceEvaluationForSalesmanWithYear,
    updateSocialPerformanceEvaluation,
    deleteSocialPerformanceEvaluation
}