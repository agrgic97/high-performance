const salesmanService = require("../service/salesman-service")
const ordersService = require("../service/orders-service")

const getAllAccounts = async (req, res) => {
    res.status(200).json(await salesmanService.getAllAccountsFromCRX())
}

const getAccountById = async (req, res) => {
    res.status(200).json(await salesmanService.getAccountFromCRXById(req.params.id))
}

const getAccountByName = async (req, res) => {
    const body = req.body
    const fullName = body["fullName"]
    res.status(200).json(await salesmanService.getAccountFromCRXByFullName(fullName))
}

const getAllSalesOrdersByAccountId = async (req, res) => {
    res.status(200).json(await ordersService.getAllSalesOrdersByAccountId(req.params.id))
}

const getSalesOrderPositionsById = async (req, res) => {
    res.status(200).json(await ordersService.getSalesOrderPositionsById(req.params.id))
}

const getProductById = async (req, res) => {
    res.status(200).send(await ordersService.getProductById(req.params.id))
}

module.exports = {
    getAccountById,
    getAllAccounts,
    getAccountByName,
    getAllSalesOrdersByAccountId,
    getSalesOrderPositionsById,
    getProductById
}