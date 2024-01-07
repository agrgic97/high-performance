const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.json(await salesmanService.getAllSalesmen()).status(200)
}

const getAllSalesmenFromOrangeHRM = async (req, res) => {
    res.json(await salesmanService.getAllSalesmenFromHRM()).status(200)
}

const getSalesmanById = async (req, res) => {
    res.json(await salesmanService.getSalesmanById(req.params.id)).status(200)
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

const deleteAllSalesmen = async (req,res) => {
    res.json(await salesmanService.deleteAllSalesmen()).status(200)
}

module.exports = {
    getAllSalesmen,
    getAllSalesmenFromOrangeHRM,
    getSalesmanById,
    createSalesman,
    updateSalesman,
    deleteSalesman,
    deleteAllSalesmen
}