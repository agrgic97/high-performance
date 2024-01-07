const salesmanRepository = require("../repository/salesman-repository")
const orangeHRMRepository = require("../repository/orange-hrm-repository")

const getAllSalesmen = async () => {
    return await salesmanRepository.findAllSalesmen()
}

const getAllEmployeesFromHRM = async () => {
    return await orangeHRMRepository.getEmployees()
}

const getAllSalesmenFromHRM = async ()  => {
    const employees = await getAllEmployeesFromHRM()
    return employees.filter((employee) => employee["unit"] === "Sales")
}

const getSalesmanFromHRMById = async (id) => {
    return await orangeHRMRepository.getEmployee(id)
}

const getSalesmanById = async (id) => {
    return await salesmanRepository.findSalesmanById(id)
}

const createSalesman = async (salesman) => {
    return await salesmanRepository.createSalesman(salesman)
}

const updateSalesman = async (id, salesman) => {
    return await salesmanRepository.updateSalesman(id, salesman)
}

const deleteSalesman = async (id) => {
    return await salesmanRepository.deleteSalesman(id)
}

const deleteAllSalesmen = async () => {
    return await salesmanRepository.deleteAllSalesmen()
}

module.exports = {
    getAllSalesmen,
    getAllSalesmenFromHRM,
    getSalesmanById,
    getSalesmanFromHRMById,
    createSalesman,
    updateSalesman,
    deleteSalesman,
    deleteAllSalesmen
}