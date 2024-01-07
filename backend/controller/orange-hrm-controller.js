const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.json(await salesmanService.getAllSalesmenFromHRM()).status(200)
}

const getSalesmanById = async (req, res) => {
    res.json(await  salesmanService.getSalesmanFromHRMById(req.params.id))
}

module.exports =  {
    getAllSalesmen,
    getSalesmanById
}