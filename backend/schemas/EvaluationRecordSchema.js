const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true
    },
    salesmanId: { type: Number, required: true },
    year: { type: Number, required: true },
    ordersEvaluations: [
        {
            nameOfProduct: String,
            client: String,
            clientRanking: String,
            items: Number,
            bonus: Number
        }
    ],
    socialPerformanceEvaluations: [
        {
            description: String,
            targetValue: Number,
            actualValue: Number,
            bonus: Number,
        }
    ],
    remarks: String,
    hrSignature: {
        date: Date,
        signature: { type: Boolean, default: false }
    },
    ceoSignature: {
        date: Date,
        signature: { type: Boolean, default: false }
    },
    salesmanConfirmation: {
        date: Date,
        confirmed: { type: Boolean, default: false }
    },
}, { collection: "evaluation-record" })

const EvaluationRecordSchema = mongoose.model("EvaluationRecordSchema", schema, "evaluation-record")

module.exports = EvaluationRecordSchema