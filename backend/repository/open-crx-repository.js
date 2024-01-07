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

const getAccounts = async (req, res) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

const getAccount = async (req, res) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account/${req.params.id}`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data
}

const getSalesOrders = async (req, res) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

const getSalesOrder = async (req, res) => {
    const response = await axios.get(`${BASE_URL}/org.opencrx.kernel.contract1/provider/CRX/segment/Standard/salesOrder/${req.params.id}`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }
    return response.data.objects
}

module.exports = {
    getAccounts,
    getAccount,
    getSalesOrders,
    getSalesOrder
}