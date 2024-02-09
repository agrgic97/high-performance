const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    employeeId: { type: Number, required: true },
    role: { type: String, required: true }
}, { collection: "salesman" })

const UserSchema = mongoose.model("User", schema, "user")

module.exports = UserSchema