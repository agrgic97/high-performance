const recordRepository = require("../repository/record-repository")
const openCRXRepository = require("../repository/open-crx-repository")
const ordersService = require("../service/orders-service")
const salesmanService = require("../service/salesman-service")
const patternHelper = require("../util/pattern-utils");
const {mapRatingToText} = require("../util/rating-mapper")
const {calculateOrdersEvaluationBonus, calculatePerformanceEvaluationBonus} = require("../util/bonus-computation")
const {extractAccountIdFromUrl} = require("../util/pattern-utils");
require("../models/OrdersEvaluation")

const getAllSocialPerformanceRecords = async () => {
    return await recordRepository.findAllSocialPerformanceEvaluations()
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

const updateSocialPerformanceRecord = async (id, record) => {
    return await recordRepository.updateSocialPerformanceEvaluation(id, record)
}

const checkIfSocialPerformanceRecordExistsForYear = async (sid, year) => {
    return await recordRepository.existsSocialPerformanceEvaluationForSalesmanWithYear(sid, year)
}

const deleteSocialPerformanceRecord = async (id) => {
    return await recordRepository.deleteSocialPerformanceEvaluation(id)
}

module.exports = {
    getAllSocialPerformanceRecords,
    getSocialPerformanceRecordById,
    getSocialPerformanceRecordBySalesmanIdAndYear,
    getSocialPerformanceRecordYearsBySalesmanId,
    getOrdersEvaluationsBySalesmanId,
    createSocialPerformanceRecord,
    updateSocialPerformanceRecord,
    checkIfSocialPerformanceRecordExistsForYear,
    deleteSocialPerformanceRecord
}