import SelectSalesman from "./SelectSalesman.jsx";
import {useState} from "react";
import EmployeeInfo from "./EmployeeInfo.jsx";

const Dashboard = () => {
    const [employeeId, setEmployeeId] = useState(null);

    const handleEmployeeId = (id) => {
        setEmployeeId(id);
    }

    return (
        <main className="flex-1 p-4">
            {/* Main content */}
            <h1 className="text-2xl font-bold mb-4">High Performance</h1>
            <div className="grid grid-cols-2 gap-4">
                {/* Display dashboard content here */}
                <div className="bg-white p-4 rounded shadow-md col-span-12">
                    <SelectSalesman handleEmployeeId={handleEmployeeId}/>
                </div>
                <div className="bg-white p-4 rounded shadow-md">
                    <EmployeeInfo employeeId={employeeId}/>
                </div>
                {/* Add more content */}
            </div>
        </main>
    )
}

export default Dashboard;