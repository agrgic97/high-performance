const openCRXRepository = require("../repository/open-crx-repository")
const utils = require("../util/utils")

const getSalesOrderById = async (id) => {
    return await openCRXRepository.getSalesOrderById(id);
}

const getAllSalesOrdersByAccountId = async (id) => {
    const salesOrders = await openCRXRepository.getAllSalesOrders();
    return salesOrders.filter(order => utils.extractAccountIdFromUrl(order["salesRep"]["@href"]) === id);
}

module.exports = {
    getSalesOrderById,
    getAllSalesOrdersByAccountId
}