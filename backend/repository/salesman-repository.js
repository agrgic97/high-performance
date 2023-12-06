const Salesman = require("../model/Salesman")

const findAllSalesmen = async () => {
    return Salesman.find()
}

const findSalesman = async (id) => {
    return Salesman.findById(id)
}

const createSalesman = async (salesman) => {
    return Salesman.create(salesman)
}

const updateSalesman = async (id, salesman) => {
    return Salesman.findOneAndUpdate({ "_id": id }, salesman)
}

const deleteSalesman = async (id) => {
    return Salesman.deleteOne({ "_id": id })
}

module.exports = {
    findAllSalesmen,
    findSalesman,
    createSalesman,
    updateSalesman,
    deleteSalesman
}