const mongoose = require("mongoose")

const schema = mongoose.Schema({
    nameOfProduct: String,
    client: String,
    clientRanking: String,
    items: Number,
    bonus: Number
})

const OrdersEvaluation = mongoose.model("OrdersEvaluation", schema)

module.exports = OrdersEvaluation