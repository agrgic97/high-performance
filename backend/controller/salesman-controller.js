const salesmanService = require("../service/salesman-service")

const getAllSalesmen = async (req, res) => {
    res.status(200).json(await salesmanService.getAllSalesmen())
}

const getAllSalesmenFromOrangeHRM = async (req, res) => {
    res.status(200).json(await salesmanService.getAllSalesmenFromHRM())
}

const getAllBonusComputationsBySalesmanId = async (req, res) => {
    res.status(200).json(await salesmanService.getAllBonusComputationsBySalesmanId(req.params.id))
}

const getSalesmanById = async (req, res) => {
    try {
        const salesman = await salesmanService.getSalesmanById(req.params.id)
        if (salesman === null) res.status(404).send("Not found!")
        res.status(200).json(salesman)
    } catch (error) {
        res.status(500).send(error)
    }
}

const createSalesman = async (req, res) => {
    try {
        const salesman = await salesmanService.createSalesman(req.body)
        res.status(201).json()
    } catch (error) {
        res.status(500).send(error)
    }
}

const createBonusComputation = async (req, res) => {
    res.status(201).json(await salesmanService.createBonusComputation(req.body))
}

const updateSalesman = async (req, res) => {
    try {
        res.status(200).json(await salesmanService.updateSalesman(req.params.id, req.body))
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateBonusSalary = async (req, res) => {
    const { year, value } = req.body
    try {
        res.status(200).json(await salesmanService.updateBonusSalary(parseInt(req.params.id),{ year, value }))
    } catch (error) {
        res.status(500).send(error)
    }
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
    getAllBonusComputationsBySalesmanId,
    getSalesmanById,
    createSalesman,
    createBonusComputation,
    updateSalesman,
    updateBonusSalary,
    deleteSalesman,
    deleteAllSalesmen
}