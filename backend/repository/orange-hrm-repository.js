const axios = require("axios")
const qs = require("querystring")
const {Error} = require("mongoose");

const BASE_URL = process.env.ORANGE_HRM_BASE_URL
const CLIENT_ID = process.env.ORANGE_HRM_CLIENT_ID
const CLIENT_SECRET = process.env.ORANGE_HRM_CLIENT_SECRET
const GRANT_TYPE = process.env.ORANGE_HRM_GRANT_TYPE
const USERNAME = process.env.ORANGE_HRM_USERNAME
const PASSWORD = process.env.ORANGE_HRM_PASSWORD

const body = qs.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: GRANT_TYPE,
    username: USERNAME,
    password: PASSWORD
})

const getAccessToken = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    const res = await axios.post(`${BASE_URL}/oauth/issueToken`, body, config)
    if (res.data.error) {
        throw Error(res.data.error)
    }

    const accessToken = res.data['access_token']
    console.log(accessToken)
    return accessToken
}

const getEmployee = async (id) => {
    const accessToken = await getAccessToken()
    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    const response = await axios.get(`${BASE_URL}/api/v1/employee/${id}`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }

    console.log(response.data)

    return response.data.data
}

const getEmployees = async () => {
    const accessToken = await getAccessToken()
    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    const response = await axios.get(`${BASE_URL}/api/v1/employee/search`, config)
    if (response.data.error) {
        throw Error(response.data.error)
    }

    return response.data.data
}

const updateBonusSalaryForSalesman = async (id, requestBody) => {
    const accessToken = await getAccessToken()

    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    try {
        const response = await axios.post(`${BASE_URL}/api/v1/employee/${id}/bonussalary`, requestBody, config)
        return response.data.data
    } catch (error) {
        throw new Error(error)
    }
    // if (response.data.error) {
    //     throw Error(response.data.error)
    // }
}

module.exports = {
    getAccessToken,
    getEmployee,
    getEmployees,
    updateBonusSalaryForSalesman
}