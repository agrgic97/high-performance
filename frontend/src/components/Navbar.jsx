import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../App.jsx";

const Navbar = () => {
    const user = useContext(AuthContext)
    return (
        <nav className="bg-gradient-to-b from-blue-300 to-blue-200 p-4">
            <div className="container flex items-center">
                <div className="flex space-x-4">
                    <NavLink to="/dashboard"
                             className={({isActive}) => {return `text-white hover:text-blue-600 transition duration-300 ease-in-out ${isActive ? "font-bold" : ""}`}}
                             >Records</NavLink>
                    {user.role === "HR" && <NavLink to="/edit"
                              className="text-white hover:text-blue-600 transition duration-300 ease-in-out"
                              style={({isActive}) => {
                                  return {
                                      fontWeight: isActive ? "bold" : ""
                                  }
                              }}>Edit Records</NavLink>}
                    {user.role === "CEO" && <NavLink to="/bonus-salaries"
                              className="text-white hover:text-blue-600 transition duration-300 ease-in-out"
                              style={({isActive}) => {
                                  return {
                                      fontWeight: isActive ? "bold" : ""
                                  }
                              }}>Bonus Salaries</NavLink>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;