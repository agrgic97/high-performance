const recordRepository = require("../repository/record-repository")
const openCRXRepository = require("../repository/open-crx-repository")
const ordersService = require("../service/orders-service")
const salesmanService = require("../service/salesman-service")
const patternHelper = require("../utils/pattern-utils");
const {mapRatingToText} = require("../utils/rating-mapper")
const {calculateOrdersEvaluationBonus, calculatePerformanceEvaluationBonus} = require("../utils/bonus-computation")
const {extractAccountIdFromUrl} = require("../utils/pattern-utils");

const getAllSocialPerformanceRecords = async () => {
    return await recordRepository.findAllSocialPerformanceEvaluations()
}

const getAllBonusComputationsBySalesmanId = async (sid) => {
    return await recordRepository.findAllBonusComputationsBySalesmanId(sid)
}

const getSocialPerformanceRecordById = async (id) => {
    return await recordRepository.findSocialPerformanceEvaluationById(id)
}

const getSocialPerformanceRecordBySalesmanIdAndYear = async (sid, year) => {
    const performanceRecord = await recordRepository.findSocialPerformanceEvaluationByYearAndSalesmanId(sid, year)
    return performanceRecord["socialPerformanceEvaluations"].map(evaluation => ({
        ...evaluation._doc,
        bonus: calculatePerformanceEvaluationBonus(evaluation._doc.targetValue, evaluation._doc.actualValue)
    }))
}

const getRecordInformationBySalesmanIdAndYear = async (sid, year) => {
    return await recordRepository.findRecordInformationByYearAndSalesmanId(sid, year)
}

const getSocialPerformanceRecordYearsBySalesmanId = async (sid) => {
    const records = await recordRepository.findAllSocialPerformanceEvaluationsBySalesmanId(sid)
    return records.map(record => record["year"])
}

const getOrdersEvaluationsBySalesmanId = async (sid) => {
    let orderEvaluations = []

    const account = await salesmanService.getAccountIdFromSalesmanId(sid)
    if (account === undefined) return orderEvaluations

    const accountId = extractAccountIdFromUrl(account["@href"])
    const salesOrders = await ordersService.getAllSalesOrdersByAccountId(accountId)

    for (const salesOrder of salesOrders) {
        const salesOrderId = patternHelper.extractSalesOrderIdFromUrl(salesOrder["@href"])
        const positions = await ordersService.getSalesOrderPositionsById(salesOrderId)
        for (const position of positions) {

            const customerId = patternHelper.extractAccountIdFromUrl(salesOrder["customer"]["@href"])
            const customerAccount = await openCRXRepository.getAccountById(customerId)
            const productId = patternHelper.extractProductIdFromUrl(position["product"]["@href"])
            const product = await ordersService.getProductById(productId)

            const nameOfProduct = product["name"]
            const client = customerAccount["fullName"]
            const clientRating = customerAccount["accountRating"]
            const clientRatingText = mapRatingToText(clientRating)
            const quantity = parseInt(position["quantity"])
            const bonus = calculateOrdersEvaluationBonus(clientRating, quantity)


            orderEvaluations.push({
                "nameOfProduct": nameOfProduct,
                "client": client,
                "rating": clientRatingText,
                "items": quantity,
                "bonus": bonus
            })
        }
    }
    return orderEvaluations
}

const createSocialPerformanceRecord = async (sid, record) => {
    return await recordRepository.createSocialPerformanceEvaluation(sid, record)
}

const createRecordInformation = async (record) => {
    return await recordRepository.createRecordInformation(record)
}

const createBonusComputation = async (record) => {
    return await recordRepository.createBonusComputation(record)
}

const updateRecordInformation = async (id, record) => {
    return await recordRepository.updateRecordInformation(id, record)
}

const updateSocialPerformanceEvaluation = async (id, record) => {
    return await recordRepository.updateSocialPerformanceEvaluation(id, record)
}

const checkIfSocialPerformanceRecordExistsForYear = async (sid, year) => {
    return await recordRepository.existsSocialPerformanceEvaluationForSalesmanWithYear(sid, year)
}

const checkIfRecordInformationExistsForYear = async (sid, year) => {
    return await recordRepository.existsRecordInformationForSalesmanWithYear(sid, year)
}

module.exports = {
    getAllSocialPerformanceRecords,
    getAllBonusComputationsBySalesmanId,
    getSocialPerformanceRecordById,
    getSocialPerformanceRecordBySalesmanIdAndYear,
    getSocialPerformanceRecordYearsBySalesmanId,
    getRecordInformationBySalesmanIdAndYear,
    getOrdersEvaluationsBySalesmanId,
    createRecordInformation,
    createSocialPerformanceRecord,
    createBonusComputation,
    updateRecordInformation,
    updateSocialPerformanceEvaluation,
    checkIfSocialPerformanceRecordExistsForYear,
    checkIfRecordInformationExistsForYear,
}