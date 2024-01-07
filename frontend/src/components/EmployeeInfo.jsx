import {useEffect, useState} from "react";
import Api from "../api/API.js";
import DataTable from "./DataTable.jsx";

const EmployeeInfo = ({employeeId}) => {
    const [employee, setEmployee] = useState(null);
    const backendApi = new Api();

    useEffect(() => {
        if (employeeId) {
            backendApi.getEmployee(employeeId)
                .then(response => setEmployee(response.data))
                .catch(error => console.error(error));
        }
    }, [employeeId]);

    return (
        <div>
            {employee && (<DataTable employee={employee}/>)}
        </div>
    )
}

export default EmployeeInfo;