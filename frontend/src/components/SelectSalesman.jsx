import {useEffect, useState} from 'react';
import Api from "../api/API.js";

const SelectSalesman = ({handleEmployeeId}) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setFetchedEmployees] = useState([]);
    const backendApi = new Api();


    useEffect(() => {
        backendApi.getEmployees()
            .then(response => setFetchedEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        const selected = employees.find((employee) => employee["employeeId"] === selectedId);
        setSelectedEmployee(selected);
    };

    return (
        <div className="flex items-center space-x-4">
            <label htmlFor="employeeSelect" className="text-gray-600">
                Select Salesman:
            </label>
            <div className="relative">
                <select
                    id="employeeSelect"
                    onChange={handleSelectChange}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select</option>
                    {employees.map((employee) => (
                        <option key={employee["employeeId"]} value={employee["employeeId"]}>
                            {employee["fullName"]}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 11.293a1 1 0 0 1 1.414 0L10 12.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zM8 5h4a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z"
                        />
                    </svg>
                </div>
            </div>
            {selectedEmployee && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleEmployeeId(selectedEmployee["employeeId"])}>
                    {`Select ${selectedEmployee["fullName"]}`}
                </button>
            )}
        </div>
    );
};

export default SelectSalesman;
