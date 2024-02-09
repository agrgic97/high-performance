import {useContext, useEffect, useState} from "react";
import Api from "../api/API.js";
import {AuthContext} from "../App.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle, faFilePen, faXmark} from "@fortawesome/free-solid-svg-icons";
import {formatDateTime} from "../utils/utils.js";

const RecordInformation = ({salesmanId, year, bonus, hrmId, name}) => {
    const [recordInformation, setRecordInformation] = useState(null);
    const [content, setContent] = useState("");
    const [hrChecked, setHrChecked] = useState(false);
    const [ceoChecked, setCeoChecked] = useState(false);
    const user = useContext(AuthContext);

    const backendApi = new Api()

    const handleDataUpdate = (data) => {
        backendApi.updateRecordInformation(recordInformation._id, data)
            .then(res => {
                if (res.data.success) fetchData()
            })
            .catch(error => console.error(error))
    }

    const updateBonusSalary = () => {
        backendApi.updateBonusSalary(hrmId, {
            "year": year,
            "value": bonus
        }).then(res => {
            console.log(res.data)
        }).catch(error => console.error(error))
    }

    const fetchData = () => {
        backendApi.getRecordInformationByYearFromSalesman(salesmanId, year)
            .then(res => {
                setRecordInformation(res?.data)
                setContent(res?.data?.remarks)
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [salesmanId, year]);

    return (
        <div>
            {recordInformation &&
                <div>
                    {(user.role === "CEO") ?
                        <form className="mt-5">
                            <label className="font-bold px-2 underline"
                                   htmlFor="textarea">Remarks</label>
                            <textarea
                                id="textarea"
                                className="w-full p-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                                rows="5"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                                type="button"
                                onClick={() => handleDataUpdate({...recordInformation, remarks: content})}
                            >
                                Submit
                            </button>
                        </form>
                        :
                        <div className="mt-5">
                            <span className="block text-gray-700 text-sm font-bold mb-2">Remarks</span>
                            <div
                                className="w-full p-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                                {recordInformation.remarks}
                            </div>
                        </div>}

                    <div className="my-5">
                        <h4 className="font-bold">HR Signature:</h4>
                        {(recordInformation.hrSignature.signed) ?
                            <div>
                                <p>Signed by HR (Chantal Banks) <FontAwesomeIcon icon={faFilePen}/></p>
                                <p className="italic text-gray-500 text-sm">{formatDateTime(recordInformation.hrSignature.date)}</p>
                            </div>
                            :
                            <form>
                                {(user.role === "HR") ? <label>Sign Performance Record
                                    <input
                                        className="ml-2"
                                        type="checkbox"
                                        onChange={() => setHrChecked((prevState) => !prevState)}
                                    />
                                </label> : <p>Not signed yet!</p>}
                                {(user.role === "HR") && (hrChecked) &&
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 p-1 rounded focus:outline-none focus:shadow-outline-blue"
                                        type="button"
                                        onClick={() => {
                                            handleDataUpdate({
                                                ...recordInformation,
                                                hrSignature: {
                                                    signed: true, date: new Date()
                                                }
                                            })
                                        }}
                                    >
                                        Save
                                    </button>}
                            </form>}
                    </div>

                    <div className="my-5">
                        <h4 className="font-bold">CEO Signature:</h4>
                        {(recordInformation.ceoSignature.signed) ?
                            <div>
                                <p>Signed by CEO (Michael Moore) <FontAwesomeIcon icon={faFilePen}/></p>
                                <p className="italic text-gray-500 text-sm">{formatDateTime(recordInformation.ceoSignature.date)}</p>
                            </div>
                            :
                            <form>
                                {(user.role === "CEO") ? <label>Sign Performance Record
                                    <input
                                        className="ml-2"
                                        type="checkbox"
                                        onChange={() => setCeoChecked((prevState) => !prevState)}
                                    />
                                </label> : <p>Not signed yet!</p>}
                                {(user.role === "CEO") && (ceoChecked) &&
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 p-1 rounded focus:outline-none focus:shadow-outline-blue"
                                        onClick={() => {
                                            handleDataUpdate({
                                                ...recordInformation,
                                                ceoSignature: {
                                                    signed: true, date: new Date()
                                                }
                                            });

                                        }}
                                    >
                                        Save
                                    </button>}
                            </form>}
                    </div>
                    <div className="my-5">
                        <h4 className="font-bold">Salesman Confirmation:</h4>
                        {(recordInformation.salesmanConfirmation.confirmed) ?
                            <div>
                                <p>Confirmed by Salesman ({name}) <FontAwesomeIcon icon={faCheckCircle}/></p>
                                <p className="italic text-gray-500 text-sm">{formatDateTime(recordInformation.salesmanConfirmation.date)}</p>
                            </div>
                            :
                            <div>
                                {((user.role === "SALESMAN") && recordInformation.hrSignature.signed && recordInformation.ceoSignature.signed) ?
                                    <form>
                                        <button className="bg-green-600 text-white rounded py-1 px-2 mr-2"
                                                type="button"
                                                onClick={() => {
                                                    handleDataUpdate({
                                                        ...recordInformation,
                                                        salesmanConfirmation: {
                                                            confirmed: true,
                                                            date: new Date()
                                                        }
                                                    });
                                                    updateBonusSalary();
                                                }}>Confirm
                                            <FontAwesomeIcon className="ml-2" icon={faCheck}/>
                                        </button>
                                        <button className="bg-red-600 text-white rounded py-1 px-2"
                                                type="button"
                                                onClick={() => {
                                                    handleDataUpdate({
                                                        ...recordInformation,
                                                        hrSignature: { signed: false },
                                                        ceoSignature: { signed: false }
                                                    });
                                                }}>Decline
                                            <FontAwesomeIcon className="ml-2" icon={faXmark}/>
                                        </button>
                                </form> : <p>Not confirmed yet!</p>}
                            </div>}
                    </div>
                </div>}
        </div>
    );
}

export default RecordInformation;