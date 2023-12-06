const mongoose = require("mongoose")

const schema = mongoose.Schema({
    description: String,
    targetValue: Number,
    actualValue: Number,
    bonus: Number,
})

const SocialPerformanceEvaluation = mongoose.model("SocialPerformanceEvaluation", schema)

module.exports = SocialPerformanceEvaluation