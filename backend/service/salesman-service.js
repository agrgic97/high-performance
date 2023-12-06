const salesmanRepository = require("../repository/salesman-repository")

const getAllSalesmen = async () => {
    return await salesmanRepository.findAllSalesmen()
}

const getSalesman = async (id) => {
    return await salesmanRepository.findSalesman(id)
}

const createSalesman = async (salesman) => {
    return await salesmanRepository.createSalesman(salesman)
}

const updateSalesman = async (id, salesman) => {
    return await salesmanRepository.updateSalesman(id, salesman)
}

const deleteSalesman = async (id) => {
    return await salesmanRepository.deleteSalesman(id)
}

module.exports = {
    getAllSalesmen,
    getSalesman,
    createSalesman,
    updateSalesman,
    deleteSalesman
}