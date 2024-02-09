const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true
    },
    salesmanId: { type: Number, required: true },
    year: { type: Number, required: true },
    ordersEvaluationBonus: { type: Number, required: true },
    socialPerformanceEvaluationBonus: { type: Number, required: true }
}, { collection: "bonus-computation" })

const RecordInformationSchema = mongoose.model("BonusComputation", schema, "bonus-computation")

module.exports = RecordInformationSchema