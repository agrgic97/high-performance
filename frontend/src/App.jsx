import './App.css'
import Dashboard from "./components/Dashboard.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Header from "./components/Header.jsx";

export const AuthContext = createContext(null)

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    return (
        <>
            <AuthContext.Provider value={user}>
                <Header setUser={setUser}/>
                <Router>
                    <Routes>
                        <Route path="/" element={<div>Hello world!</div>}/>
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
                        {/* Add other routes here */}
                    </Routes>
                </Router>
            </AuthContext.Provider>
        </>
    )
}

export default App
