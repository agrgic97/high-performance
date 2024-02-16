import axios from "axios";

class Api {
    backendUrl = import.meta.env.VITE_BACKEND_URL

    getSalesmen = () => {
        return axios.get(`${this.backendUrl}/api/salesman`);
    }

    getSalesman = (id) => {
        return axios.get(`${this.backendUrl}/api/salesman/${id}`);
    }

    getAvailableRecordYearsFromSalesman = (id) => {
        return axios.get(`${this.backendUrl}/api/record/performance-evaluation/years/salesman/${id}`);
    }

    getBonusComputationsFromSalesman = (id) => {
        return axios.get(`${this.backendUrl}/api/record/bonus-computation/${id}`);
    }

    login = (requestBody) => {
        return axios.post(`${this.backendUrl}/api/auth/login`, requestBody);
    }

    getOrdersEvaluationRecordsByFromSalesman = (id) => {
        return axios.get(`${this.backendUrl}/api/record/orders-evaluation/${id}`);
    }

    getSocialPerformanceEvaluationRecordsByYearFromSalesman = (id, year) => {
        return axios.get(`${this.backendUrl}/api/record/performance-evaluation/salesman/${id}/year/${year}`)
    }

    getRecordInformationByYearFromSalesman = (id, year) => {
        return axios.get(`${this.backendUrl}/api/record/record-information/salesman/${id}/year/${year}`)
    }

    createBonusComputation = (requestBody) => {
        return axios.post(`${this.backendUrl}/api/record/bonus-computation`, requestBody);
    }

    updateRecordInformation = (id, requestBody) => {
        return axios.patch(`${this.backendUrl}/api/record/record-information/${id}`, requestBody)
    }

    updateBonusSalary = (id, requestBody) => {
        return axios.post(`${this.backendUrl}/api/salesman/${id}/bonus-salary`, requestBody)
    }

    updateSocialPerformanceEvaluation = (id, requestBody) => {
        return axios.patch(`${this.backendUrl}/api/record/performance-evaluation/${id}`, requestBody)
    }
}

export default Api