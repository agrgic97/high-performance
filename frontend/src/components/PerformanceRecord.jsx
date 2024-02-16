import OrdersEvaluation from "./OrdersEvaluation.jsx";
import SocialPerformanceEvaluation from "./SocialPerformanceEvaluation.jsx";
import {useState} from "react";
import RecordInformation from "./RecordInformation.jsx";

const PerformanceRecord = ({ year, salesmanId, hrmId, name }) => {
    const [ordersBonus, setOrdersBonus] = useState(0);
    const [performanceBonus, setPerformanceBonus] = useState(0);
    const [hrSigned, setHrSigned] = useState(null);

    return (
        <div>
            {year && salesmanId && <div>
                <OrdersEvaluation year={year}
                                  salesmanId={salesmanId}
                                  setOrdersBonus={setOrdersBonus}/>
                <SocialPerformanceEvaluation year={year}
                                             salesmanId={salesmanId}
                                             setPerformanceBonus={setPerformanceBonus}
                                             hrSigned={hrSigned}/>
            </div>
            }
            <div className="my-6 py-2 px-3 bg-blue-900 rounded inline-block text-lg text-white font-medium shadow">Total Bonus (Orders Evaluation + Social Performance Evaluation): {ordersBonus + performanceBonus}</div>
            {year && salesmanId && <RecordInformation year={year}
                                                      salesmanId={salesmanId}
                                                      ordersBonus={ordersBonus}
                                                      performanceBonus={performanceBonus}
                                                      hrmId={hrmId}
                                                      name={name}
                                                      setHrSigned={setHrSigned}/>}
        </div>
    );
}

export default PerformanceRecord;