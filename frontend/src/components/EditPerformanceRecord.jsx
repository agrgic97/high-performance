import {useState} from "react";
import API from "../api/API.js";

const EditPerformanceRecord = ({socialPerformanceEvaluation, setEditMode, fetchPerformanceEvaluation}) => {
    const [evaluations, setEvaluations] = useState(socialPerformanceEvaluation);
    const backendApi = new API();

    const saveRecords = (data) => {
        backendApi.updateSocialPerformanceEvaluation(socialPerformanceEvaluation["_id"], data)
            .then(res => {
                if (res?.data?.success) {
                    setEditMode(false)
                    fetchPerformanceEvaluation()
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="bg-gray-100 p-2 rounded shadow border-b border-gray-200">
            {socialPerformanceEvaluation.socialPerformanceEvaluations.map(evaluation =>
                (<div key={evaluation["_id"]}>
                    <label htmlFor="description" className="block mb-4">
                        <span className="text-gray-700">Description</span>
                        <input type="text"
                               name="description"
                               defaultValue={evaluation["description"]}
                               className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               onChange={(event) => {
                                   setEvaluations((previousState) => {
                                       const socialPerformanceEvaluations = previousState.socialPerformanceEvaluations.map(socialRecord => {
                                           if (socialRecord["_id"] === evaluation["_id"]) socialRecord["description"] = event.target.value
                                           return socialRecord
                                       })
                                       return {
                                           ...previousState,
                                           socialPerformanceEvaluations
                                       }
                                   })
                               }}/>
                    </label>

                    <label htmlFor="targetValue" className="block mb-4">
                        <span className="text-gray-700">Target Value</span>
                        <input type="number"
                               name="targetValue"
                               min={1}
                               max={5}
                               defaultValue={evaluation["targetValue"]}
                               className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               onChange={(event) => {
                                   setEvaluations((previousState) => {
                                       const socialPerformanceEvaluations = previousState.socialPerformanceEvaluations.map(socialRecord => {
                                           if (socialRecord["_id"] === evaluation["_id"]) socialRecord["targetValue"] = event.target.value
                                           return socialRecord
                                       })
                                       return {
                                           ...previousState,
                                           socialPerformanceEvaluations
                                       }
                                   })
                               }}/>
                    </label>

                    <label htmlFor="actualValue" className="block mb-4">
                        <span className="text-gray-700">Actual Value</span>
                        <input type="number"
                               name="actualValue"
                               min={1}
                               max={5}
                               defaultValue={evaluation["actualValue"]}
                               className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               onChange={(event) => {
                                   setEvaluations((previousState) => {
                                       const socialPerformanceEvaluations = previousState.socialPerformanceEvaluations.map(socialRecord => {
                                           if (socialRecord["_id"] === evaluation["_id"]) socialRecord["actualValue"] = event.target.value
                                           return socialRecord
                                       })
                                       return {
                                           ...previousState,
                                           socialPerformanceEvaluations
                                       }
                                   })
                               }}/>
                    </label>

                </div>))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={() => {
                        saveRecords(evaluations)
                    }}>
                Save
            </button>
        </div>
    );
}

export default EditPerformanceRecord;