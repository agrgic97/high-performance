const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: { type: Number, required: true },
    orangeHRMId: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    department: { type: String, required: true }
}, { collection: "salesman" })

const SalesmanSchema = mongoose.model("Salesman", schema, "salesman")

module.exports = SalesmanSchema