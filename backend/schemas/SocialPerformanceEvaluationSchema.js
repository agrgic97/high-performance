const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true
    },
    salesmanId: { type: Number, required: true },
    year: { type: Number, required: true },
    socialPerformanceEvaluations: [
        {
            description: String,
            targetValue: Number,
            actualValue: Number,
        }
    ]
}, { collection: "social-performance-evaluation" })

const SocialPerformanceEvaluationSchema
    = mongoose.model("SocialPerformanceEvaluationSchema", schema, "social-performance-evaluation")

module.exports = SocialPerformanceEvaluationSchema
