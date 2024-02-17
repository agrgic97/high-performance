const Salesman = require("../schemas/SalesmanSchema")
const BonusComputation = require("../schemas/BonusComputationSchema");
const mongoose = require("mongoose");

const findAllSalesmen = async () => {
    return Salesman.find()
}

const findSalesmanById = async (id) => {
    return Salesman.findById(id)
}

const findAllBonusComputationsBySalesmanId = async (sid) => {
    return BonusComputation.find({"salesmanId": sid})
}

const createSalesman = async (salesman) => {
    return Salesman.create(salesman)
}

const createBonusComputation = async (record) => {
    const query = { "_id": new mongoose.Types.ObjectId, ...record }
    return BonusComputation.create(query)
}

const updateSalesman = async (id, salesman) => {
    return Salesman.findOneAndUpdate({ "_id": id }, salesman)
}

const deleteSalesman = async (id) => {
    return Salesman.deleteOne({ "_id": id })
}

const deleteAllSalesmen = async () => {
    return Salesman.deleteMany({})
}

module.exports = {
    findAllSalesmen,
    findSalesmanById,
    findAllBonusComputationsBySalesmanId,
    createSalesman,
    createBonusComputation,
    updateSalesman,
    deleteSalesman,
    deleteAllSalesmen
}