import axios from "axios";

class Api {
    backendUrl = import.meta.env.VITE_BACKEND_URL

    getEmployees = () => {
        return axios.get(`${this.backendUrl}/api/orange-hrm/salesmen`);
    }

    getEmployee = (id) => {
        return axios.get(`${this.backendUrl}/api/orange-hrm/employee/${id}`);
    }
}

export default Api