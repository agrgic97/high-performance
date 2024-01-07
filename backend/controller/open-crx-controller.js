const openCRXService = require("../repository/open-crx-repository")

const getAccounts = async (req, res) => {
    res.json(openCRXService.getAccounts()).status(200)
}

const getAccount = async (req, res) => {
    res.json(openCRXService.getAccount(req.params.id)).status(200)
}

const getSalesOrders = async (req, res) => {
    res.json(openCRXService.getSalesOrders()).status(200)
}

const getSalesOrder = async (req, res) => {
    res.json(openCRXService.getSalesOrder(req.params.id)).status(200)
}

module.exports = {
    getAccount,
    getAccounts,
    getSalesOrder,
    getSalesOrders
}