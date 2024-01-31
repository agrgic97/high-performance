import {useEffect, useState} from "react";
import API from "../api/API.js";

const SelectYear = ({ salesmanId, setSelectedYear }) => {
    const [years, setYears] = useState([]);
    const backendApi = new API();

    useEffect(() => {
        if (salesmanId) {
            backendApi.getAvailableRecordYearsFromSalesman(salesmanId)
                .then(response => {
                    setYears(response.data)
                    if (response?.data.length > 0) {
                        setSelectedYear(response?.data[0])
                    } else {
                        setSelectedYear(null)
                    }
                })
                .catch(error => console.error(error))
        }
    }, [salesmanId]);

    const handleSelectChange = (e) => {
        const selectedYear = e.target.value;
        const selected = years.find(year => year.toString() === selectedYear);
        setSelectedYear(selected);
    };

    return (
        <div className="flex items-center space-x-4 my-4">
            <label htmlFor="yearSelect">
                Year of Performance
            </label>
            <div className="relative">
                <select
                    id="yearSelect"
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-400"
                    onChange={handleSelectChange}
                >
                    {years.map(year => <option key={year}
                                               value={year}
                                               >{year}</option>)}
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
        </div>
    );
}

export default SelectYear;