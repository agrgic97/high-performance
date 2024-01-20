const salesmanRepository = require("../repository/salesman-repository")
const orangeHRMRepository = require("../repository/orange-hrm-repository")
const openCRXRepository = require("../repository/open-crx-repository")

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

const getAllAccountsFromCRX = async () => {
    return await openCRXRepository.getAllAccounts()
}

const getAccountFromCRXById = async (id) => {
    return await openCRXRepository.getAccountById(id)
}

const getAccountFromCRXByFullName = async (fullName) => {
    const accounts = await getAllAccountsFromCRX()
    return accounts.find(account => account["fullName"] === fullName)
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
    getAllAccountsFromCRX,
    getSalesmanById,
    getSalesmanFromHRMById,
    getAccountFromCRXById,
    getAccountFromCRXByFullName,
    createSalesman,
    updateSalesman,
    deleteSalesman,
    deleteAllSalesmen
}