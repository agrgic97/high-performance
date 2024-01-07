const DataTable = ({employee}) => {
    return (
        <div className="container px-4">
            <table className="min-w-full bg-white shadow-md rounded my-6">
                <tbody className="text-gray-700">
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white w-1/2">Firstname</td>
                        <td className="border py-2 px-4 w-1/2">{employee["firstName"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Middlename</td>
                        <td className="border py-2 px-4">{employee["middleName"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Lastname</td>
                        <td className="border py-2 px-4">{employee["lastName"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Code</td>
                        <td className="border py-2 px-4">{employee["code"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Employee ID</td>
                        <td className="border py-2 px-4">{employee["employeeId"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Full Name</td>
                        <td className="border py-2 px-4">{employee["fullName"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Status</td>
                        <td className="border py-2 px-4">{employee["status"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Date of Birth</td>
                        <td className="border py-2 px-4">{employee["dob"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Drivers Licence Nr</td>
                        <td className="border py-2 px-4">{employee["driversLicenceNumber"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">License Expiry Date</td>
                        <td className="border py-2 px-4">{employee["licenseExpiryDate"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Marital Status</td>
                        <td className="border py-2 px-4">{employee["maritalStatus"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Gender</td>
                        <td className="border py-2 px-4">{employee["gender"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Other ID</td>
                        <td className="border py-2 px-4">{employee["otherId"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Nationality</td>
                        <td className="border py-2 px-4">{employee["nationality"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Unit</td>
                        <td className="border py-2 px-4">{employee["unit"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Job Title</td>
                        <td className="border py-2 px-4">{employee["jobTitle"]}</td>
                    </tr>
                    <tr>
                        <td className="border py-2 px-4 bg-gray-800 text-white">Supervisor</td>
                        <td className="border py-2 px-4">{employee["supervisor"]?.map((supervisor) => supervisor["name"])}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
