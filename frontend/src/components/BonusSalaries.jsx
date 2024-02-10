import SelectSalesman from "./SelectSalesman.jsx";
import {useEffect, useState} from "react";
import API from "../api/API.js";

const BonusSalaries = () => {
    const [salesmanId, setSalesmanId] = useState(null);
    const [, setSelectedYear] = useState(null);
    const [bonusComputations, setBonusComputations] = useState(null);
    const backendApi = new API();

    useEffect(() => {
        if (salesmanId) {
            backendApi.getBonusComputationsFromSalesman(salesmanId)
                .then(res => setBonusComputations(res?.data))
                .catch(error => console.error(error))
        }
    }, [salesmanId]);

    return (
        <main className="flex-1 p-4 w-2/3 mx-auto">
            <div className="grid gap-4">
                <div className="bg-white p-4 rounded shadow-md col-span-12">
                    <SelectSalesman setSalesmanId={setSalesmanId} setSelectedYear={setSelectedYear}/>
                    {salesmanId && bonusComputations && <div>
                        <h1 className="font-bold text-2xl py-1 px-2 my-3 underline">Bonus Salaries</h1>
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Year
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Orders Evaluation Bonus
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Social Performance Evaluation Bonus
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Total Bonus
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                            {bonusComputations.map((bonusComputation, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">{bonusComputation["year"]}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{bonusComputation["ordersEvaluationBonus"]}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{bonusComputation["socialPerformanceEvaluationBonus"]}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{bonusComputation["ordersEvaluationBonus"] + bonusComputation["socialPerformanceEvaluationBonus"]}</td>
                                                </tr>)
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </main>
    );
}

export default BonusSalaries;