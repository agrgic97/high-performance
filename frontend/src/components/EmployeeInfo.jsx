import {useEffect, useState} from "react";
import Api from "../api/API.js";
import SelectYear from "./SelectYear.jsx";
import PerformanceRecord from "./PerformanceRecord.jsx";

const EmployeeInfo = ({salesmanId, year, setSelectedYear}) => {
    const [salesman, setSalesman] = useState(null);
    const backendApi = new Api();

    useEffect(() => {
        backendApi.getSalesman(salesmanId)
            .then(response => {
                setSalesman(response.data)
            })
            .catch(error => console.error(error));
    }, [salesmanId]);

    return (
        <div>
            <div className="bg-gray-50 p-4 my-5 rounded shadow border-b border-gray-200">
                <div className="flex flex-col text-white">
                    <div>
                        <span
                            className="pl-6 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name:
                        </span>
                        <span className="text-black text-sm font-medium">{`${salesman?.firstname} ${salesman?.lastname}`}</span>
                    </div>
                    <div>
                        <span
                            className="pl-6 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Employee ID:
                        </span>
                        <span className="text-black text-sm font-medium">{salesman?._id}</span>
                    </div>
                    <div>
                        <span
                            className="pl-6 pr-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Department:
                        </span>
                        <span className="text-black text-sm font-medium">{salesman?.department}</span>
                    </div>
                </div>
            </div>
            <SelectYear salesmanId={salesmanId} setSelectedYear={setSelectedYear}/>
            { salesmanId && year && <PerformanceRecord salesmanId={salesmanId} year={year} hrmId={salesman?.orangeHRMId} name={`${salesman?.firstname} ${salesman?.lastname}`}/> }
        </div>
    )
}

export default EmployeeInfo;