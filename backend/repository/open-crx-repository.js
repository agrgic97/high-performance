const axios = require("axios")

const BASE_URL = process.env.OPEN_CRX_BASE_URL
const USERNAME = process.env.OPEN_CRX_USERNAME
const PASSWORD = process.env.OPEN_CRX_PASSWORD

const credentials = {
    username: USERNAME,
    password: PASSWORD
}

const config = {
    headers: {
        'Accept': 'application/json'
    },
    auth: credentials,
}

const  getAllAccounts = async () => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

const getAccountById = async (id) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${id}`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data
}

const getAllSalesOrders = async () => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

const getSalesOrderById = async (id) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder/${id}`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

module.exports = {
    getAllAccounts,
    getAccountById,
    getAllSalesOrders,
    getSalesOrderById
}