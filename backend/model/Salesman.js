const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: Number,
    firstname: String,
    lastname: String,
    department: String
}, { collection: "salesman" })

const Salesman = mongoose.model("Salesman", schema, "salesman")

module.exports = Salesman