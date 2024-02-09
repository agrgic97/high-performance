import SelectSalesman from "./SelectSalesman.jsx";
import {useContext, useState} from "react";
import EmployeeInfo from "./EmployeeInfo.jsx";
import {AuthContext} from "../App.jsx";

const Dashboard = () => {
    const [salesmanId, setSalesmanId] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const user = useContext(AuthContext);

    return (
        <main className="flex-1 p-4 w-2/3 mx-auto">
            {(user.role === "CEO" || user.role === "HR") &&
                <div className="grid gap-4">
                    <div className="bg-white p-4 rounded shadow-md col-span-12">
                        <SelectSalesman setSalesmanId={setSalesmanId} setSelectedYear={setSelectedYear}/>
                        {salesmanId && <EmployeeInfo salesmanId={salesmanId} year={selectedYear} setSelectedYear={setSelectedYear}/>}
                    </div>
                </div>
            }
            {(user.role === "SALESMAN") &&
            <div className="grid gap-4">
                <div className="bg-white p-4 rounded shadow-md col-span-12">
                    <EmployeeInfo salesmanId={user.employeeId} year={selectedYear} setSelectedYear={setSelectedYear}/>
                </div>
            </div>}
        </main>
    )
}

export default Dashboard;