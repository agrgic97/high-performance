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

const getAllSalesmenFormCRX = async () => {
    const accounts = await getAllAccountsFromCRX()
    return accounts.filter((account) => account["organization"] === "SmartHoover Ltd." && account["department"] === "Sales")
}

const getAccountIdFromSalesmanId = async (sid) => {
    const salesmen = await getAllSalesmenFormCRX()
    return salesmen.find(salesman => salesman["governmentId"].toString() === sid)
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

const getAllBonusComputationsBySalesmanId = async (sid) => {
    return await salesmanRepository.findAllBonusComputationsBySalesmanId(sid)
}

const createSalesman = async (salesman) => {
    return await salesmanRepository.createSalesman(salesman)
}

const createBonusComputation = async (record) => {
    return await salesmanRepository.createBonusComputation(record)
}

const updateSalesman = async (id, salesman) => {
    return await salesmanRepository.updateSalesman(id, salesman)
}

const updateBonusSalary = async (id, requestBody) => {
    return await orangeHRMRepository.updateBonusSalaryForSalesman(id, requestBody)
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
    getAllEmployeesFromHRM,
    getAllBonusComputationsBySalesmanId,
    getSalesmanById,
    getSalesmanFromHRMById,
    getAccountFromCRXById,
    getAccountFromCRXByFullName,
    getAccountIdFromSalesmanId,
    createSalesman,
    createBonusComputation,
    updateSalesman,
    updateBonusSalary,
    deleteSalesman,
    deleteAllSalesmen
}