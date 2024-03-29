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

const getSocialPerformanceRecordById = async (id) => {
    return await recordRepository.findSocialPerformanceEvaluationById(id)
}

const getSocialPerformanceRecordBySalesmanIdAndYear = async (sid, year) => {
    const performanceRecord = await recordRepository.findSocialPerformanceEvaluationByYearAndSalesmanId(sid, year)
    const socialPerformanceEvaluations =  performanceRecord["socialPerformanceEvaluations"].map(evaluation => ({
        ...evaluation._doc,
        bonus: calculatePerformanceEvaluationBonus(evaluation._doc.targetValue, evaluation._doc.actualValue)
    }))
    return {
        "_id": performanceRecord["_id"],
        "salesmanId": performanceRecord["salesmanId"],
        "year": performanceRecord["year"],
        "socialPerformanceEvaluations": socialPerformanceEvaluations
    }
}

const getRecordInformationBySalesmanIdAndYear = async (sid, year) => {
    return await recordRepository.findRecordInformationByYearAndSalesmanId(sid, year)
}

const getRecordYearsBySalesmanId = async (sid) => {
    let years = new Set()
    const account = await salesmanService.getAccountIdFromSalesmanId(sid)
    const accountId = extractAccountIdFromUrl(account["@href"])
    const performanceRecords = await recordRepository.findAllSocialPerformanceEvaluationsBySalesmanId(sid)
    const ordersRecords = await ordersService.getAllSalesOrdersByAccountId(accountId)
    for (const performanceRecord of performanceRecords) {
        years.add(performanceRecord["year"])
    }
    for (const ordersRecord of ordersRecords) {
        years.add(parseInt(ordersRecord["activeOn"]?.substring(0,4)))
    }
    return Array.from(years).sort()
}

const getOrdersEvaluationsBySalesmanId = async (sid, year) => {
    let orderEvaluations = []

    const account = await salesmanService.getAccountIdFromSalesmanId(sid)
    if (account === undefined) return orderEvaluations

    const accountId = extractAccountIdFromUrl(account["@href"])
    const salesOrders = await ordersService.getAllSalesOrdersByAccountIdAndYear(accountId, year)

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
    getSocialPerformanceRecordById,
    getSocialPerformanceRecordBySalesmanIdAndYear,
    getRecordYearsBySalesmanId,
    getRecordInformationBySalesmanIdAndYear,
    getOrdersEvaluationsBySalesmanId,
    createRecordInformation,
    createSocialPerformanceRecord,
    updateRecordInformation,
    updateSocialPerformanceEvaluation,
    checkIfSocialPerformanceRecordExistsForYear,
    checkIfRecordInformationExistsForYear,
}