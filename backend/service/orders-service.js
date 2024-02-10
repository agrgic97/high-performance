const openCRXRepository = require("../repository/open-crx-repository")
const utils = require("../utils/pattern-utils")

const getSalesOrderById = async (id) => {
    return await openCRXRepository.getSalesOrderById(id);
}

const getAllSalesOrdersByAccountId = async (id) => {
    const salesOrders = await openCRXRepository.getAllSalesOrders();
    return salesOrders.filter(order => utils.extractAccountIdFromUrl(order["salesRep"]["@href"]) === id);
}

const getSalesOrderPositionsById = async (id) => {
    return await openCRXRepository.getSalesOrderPositionById(id)
}

const getProductById = async (id) => {
    return await openCRXRepository.getProductById(id)
}

module.exports = {
    getSalesOrderById,
    getAllSalesOrdersByAccountId,
    getSalesOrderPositionsById,
    getProductById
}