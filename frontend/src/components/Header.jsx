import {useContext} from "react";
import {AuthContext} from "../App.jsx";

const Header = ({setUser}) => {
    const user = useContext(AuthContext);

    return (
        <header className="bg-blue-500 p-4 text-white flex justify-between align-middle items-center">
            <h1 className="text-2xl font-bold">High Performance</h1>
            <div>
                <span className="font-bold mr-3">{user?.username}</span>
                {user && <button className="py-1 px-2 border-2 border-white rounded"
                onClick={() => {
                    setUser(null);
                    sessionStorage.removeItem("user")
                    window.location.reload();
                }}>Logout</button>}
            </div>
        </header>
    );
};

export default Header;
