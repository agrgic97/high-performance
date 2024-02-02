import {Navigate} from 'react-router-dom';
import ProtectedView from "../ProtectedView.jsx";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? <ProtectedView>{children}</ProtectedView> : <Navigate to="/login"/>
}

export default ProtectedRoute;
