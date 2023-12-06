const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.json(await salesmanService.getAllSalesmen()).status(200)
}

const getSalesman = async (req, res) => {
    res.json(await salesmanService.getSalesman(req.params.id)).status(200)
}

const createSalesman = async (req, res) => {
    res.json(await salesmanService.createSalesman(req.body)).status(200)
}

const updateSalesman = async (req, res) => {
    res.json(await salesmanService.updateSalesman(req.params.id, req.body)).status(200)
}

const deleteSalesman = async (req, res) => {
    res.json(await salesmanService.deleteSalesman(req.params.id)).status(200)
}

module.exports = {
    getAllSalesmen,
    getSalesman,
    createSalesman,
    updateSalesman,
    deleteSalesman
}