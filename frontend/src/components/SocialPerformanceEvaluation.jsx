import {useContext, useEffect, useState} from "react";
import API from "../api/API.js";
import {AuthContext} from "../App.jsx";
import EditPerformanceRecord from "./EditPerformanceRecord.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const SocialPerformanceEvaluation = ({ year, salesmanId, setPerformanceBonus, hrSigned }) => {
    const [socialPerformanceEvaluation, setSocialPerformanceEvaluation] = useState(null);
    const [totalBonus, setTotalBonus] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const user = useContext(AuthContext);
    const backendApi = new API();

    useEffect(() => {
        fetchPerformanceEvaluation()
    }, [year, salesmanId]);

    const fetchPerformanceEvaluation = () => {
        backendApi.getSocialPerformanceEvaluationRecordsByYearFromSalesman(salesmanId, year)
            .then(res => {
                const data = res?.data
                setSocialPerformanceEvaluation(data)
                const bonus = calculateSumOfBoni(data.socialPerformanceEvaluations)
                setTotalBonus(bonus)
                setPerformanceBonus(bonus)
            })
            .catch(error => {
                setSocialPerformanceEvaluation({
                    salesmanId: salesmanId,
                    year: year,
                    socialPerformanceEvaluations: []
                })
                console.error(error)
            })
    }

    const calculateSumOfBoni = (data) => {
        return data.reduce((acc, evaluation) => {
            return acc + evaluation["bonus"]
        }, 0)
    }

    if (socialPerformanceEvaluation?.socialPerformanceEvaluations && year) {
        return (
            <div className="mt-10 mb-5">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl py-1 px-2 my-3 underline">Social Performance Evaluation</h1>
                    {user.role === "HR" && !editMode && !hrSigned && socialPerformanceEvaluation.socialPerformanceEvaluations.length > 0 &&
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                                    onClick={() => setEditMode(true)}>
                                Edit
                            </button>
                        </div>
                    }
                </div>
                {!editMode && <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Target Value
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Actual Value
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Bonus
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {socialPerformanceEvaluation?.socialPerformanceEvaluations?.map((evaluation) => (
                                        <tr key={evaluation["_id"]}>
                                            <td className="px-6 py-4 whitespace-nowrap">{evaluation["description"]}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{evaluation["targetValue"]}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{evaluation["actualValue"]}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{evaluation["bonus"]}</td>
                                        </tr>)
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
                {editMode &&
                    <EditPerformanceRecord socialPerformanceEvaluation={socialPerformanceEvaluation}
                                           setEditMode={setEditMode}
                                           fetchPerformanceEvaluation={fetchPerformanceEvaluation}/>}
                <div className="mt-4 py-2 px-3 bg-gray-50 rounded inline-block font-medium shadow">
                    Total Bonus (Social Performance Evaluation): {totalBonus}
                </div>
            </div>
        );
    } else {
        return <LoadingSpinner/>
    }
}

export default SocialPerformanceEvaluation;