const mongoose = require("mongoose")
const OrdersEvaluation = require("./OrdersEvaluation")
const SocialPerformanceEvaluation = require("./SocialPerformanceEvaluation")

const schema = mongoose.Schema({
    _id: Number,
    salesmanId: Number,
    year: Number,
    ordersEvaluations: [OrdersEvaluation.schema],
    socialPerformanceEvaluations: [SocialPerformanceEvaluation.schema],
    remarks: String
}, { collection: "evaluation-record" })

const EvaluationRecord = mongoose.model("EvaluationRecord", schema, "evaluation-record")

module.exports = EvaluationRecord