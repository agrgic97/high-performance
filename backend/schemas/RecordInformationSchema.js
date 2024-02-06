const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        required: true
    },
    salesmanId: { type: Number, required: true },
    year: { type: Number, required: true },
    remarks: String,
    hrSignature: {
        signed: { type: Boolean, default: false },
        date: Date
    },
    ceoSignature: {
        signed: { type: Boolean, default: false },
        date: Date
    },
    salesmanConfirmation: {
        confirmed: { type: Boolean, default: false },
        date: Date
    }
}, { collection: "record-information" })

const RecordInformationSchema = mongoose.model("RecordInformation", schema, "record-information")

module.exports = RecordInformationSchema