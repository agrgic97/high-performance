const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.status(200).json(await salesmanService.getAllSalesmen())
}

const getAllSalesmenFromOrangeHRM = async (req, res) => {
    res.status(200).json(await salesmanService.getAllSalesmenFromHRM())
}

const getSalesmanById = async (req, res) => {
    res.status(200).json(await salesmanService.getSalesmanById(req.params.id))
}

const createSalesman = async (req, res) => {
    res.status(200).json(await salesmanService.createSalesman(req.body))
}

const updateSalesman = async (req, res) => {
    res.status(200).json(await salesmanService.updateSalesman(req.params.id, req.body))
}

const updateBonusSalary = async (req, res) => {
    const { year, value } = req.body
    res.status(200).json(await salesmanService.updateBonusSalary(parseInt(req.params.id),{ year, value }))
}

const deleteSalesman = async (req, res) => {
    res.status(200).json(await salesmanService.deleteSalesman(req.params.id))
}

const deleteAllSalesmen = async (req,res) => {
    res.status(200).json(await salesmanService.deleteAllSalesmen())
}

module.exports = {
    getAllSalesmen,
    getAllSalesmenFromOrangeHRM,
    getSalesmanById,
    createSalesman,
    updateSalesman,
    updateBonusSalary,
    deleteSalesman,
    deleteAllSalesmen
}