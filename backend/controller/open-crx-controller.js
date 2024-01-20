const salesmanService = require("../service/salesman-service")
const ordersService = require("../service/orders-service")

const getAllAccounts = async (req, res) => {
    res.json(await salesmanService.getAllAccountsFromCRX()).status(200)
}

const getAccountById = async (req, res) => {
    res.json(await salesmanService.getAccountFromCRXById(req.params.id)).status(200)
}

const getAccountByName = async (req, res) => {
    const body = req.body
    const fullName = body["fullName"]
    res.json(await salesmanService.getAccountFromCRXByFullName(fullName)).status(200)
}

const getAllSalesOrdersByAccountId = async (req, res) => {
    res.json(await ordersService.getAllSalesOrdersByAccountId(req.params.id)).status(200)
}


module.exports = {
    getAccountById,
    getAllAccounts,
    getAccountByName,
    getAllSalesOrdersByAccountId
}