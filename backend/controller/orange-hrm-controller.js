const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.status(200).json(await salesmanService.getAllSalesmenFromHRM())
}

const getSalesmanById = async (req, res) => {
    res.status(200).json(await salesmanService.getSalesmanFromHRMById(req.params.id))
}

const getAllEmployees = async (req, res) => {
    res.status(200).json(await salesmanService.getAllEmployeesFromHRM())
}

module.exports =  {
    getAllSalesmen,
    getSalesmanById,
    getAllEmployees
}