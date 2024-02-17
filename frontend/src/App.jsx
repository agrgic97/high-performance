import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Header from "./components/Header.jsx";
import BonusSalaries from "./components/BonusSalaries.jsx";

export const AuthContext = createContext(null);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!isAuthenticated && sessionStorage.getItem("user")) {
            setIsAuthenticated(true);
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    return (
        <>
            <AuthContext.Provider value={user}>
                <Header setUser={setUser}/>
                <Router>
                    <Routes>
                        <Route
                            path="/login"
                            element={<LoginForm isAuthenticated={isAuthenticated}
                                                setIsAuthenticated={setIsAuthenticated}
                                                setUser={setUser} />}
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute isAuthenticated={isAuthenticated}>
                                    <Dashboard/>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/bonus-salaries"
                            element={
                                <ProtectedRoute isAuthenticated={isAuthenticated}>
                                    <BonusSalaries/>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </>
    )
}

export default App
