// src/components/LoginForm.js
import {useState} from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import API from "../api/API.js";

const LoginForm = ({ isAuthenticated, setIsAuthenticated, setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const backendAPI =  new API();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await backendAPI.login({ username, password })

            if (response.data?.success) {
                setIsAuthenticated(true);
                sessionStorage.setItem("user", JSON.stringify(response.data?.user))
                setUser(response.data?.user);
                navigate("/dashboard");
            }

        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    if (!isAuthenticated) return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="border rounded w-full py-2 px-3"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
    else return (<Navigate to="/dashboard"/>);
};

export default LoginForm;
