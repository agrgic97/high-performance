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

    login = (requestBody) => {
        return axios.post(`${this.backendUrl}/api/auth/login`, requestBody);
    }

    getOrdersEvaluationRecordsByFromSalesman = (id) => {
        return axios.get(`${this.backendUrl}/api/record/orders-evaluation/${id}`);
    }

    getSocialPerformanceEvaluationRecordsByYearFromSalesman = (id, year) => {
        return axios.get(`${this.backendUrl}/api/record/performance-evaluation/salesman/${id}/year/${year}`)
    }
}

export default Api