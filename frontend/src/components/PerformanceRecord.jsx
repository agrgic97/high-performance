import OrdersEvaluation from "./OrdersEvaluation.jsx";
import SocialPerformanceEvaluation from "./SocialPerformanceEvaluation.jsx";
import {useContext, useState} from "react";
import {AuthContext} from "../App.jsx";

const PerformanceRecord = ({ year, salesmanId }) => {
    const [ordersBonus, setOrdersBonus] = useState(0);
    const [performanceBonus, setPerformanceBonus] = useState(0);
    const user = useContext(AuthContext);

    return (
        <div>
            {year && salesmanId && <div>
                <OrdersEvaluation year={year} salesmanId={salesmanId} setOrdersBonus={setOrdersBonus}/>
                <SocialPerformanceEvaluation year={year} salesmanId={salesmanId} setPerformanceBonus={setPerformanceBonus}/>
            </div>
            }
            <hr/>
            <div className="my-4 py-2 px-3 bg-blue-900 rounded inline-block text-lg text-white font-medium shadow">Complete Bonus: {ordersBonus + performanceBonus}</div>
            <div>
                <form>
                    <label>Approved by HR Department
                        <input className="ml-4" type="checkbox" disabled={!(user.role === "HR")}/>
                    </label>
                    {(user.role === "HR") && <button className="ml-4 bg-gray-300 font-medium text-white rounded py-1 px-2 border-black"
                             type="submit">
                        Save
                    </button>}
                </form>
            </div>
        </div>
    );
}

export default PerformanceRecord;