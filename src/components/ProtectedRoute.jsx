import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const removeToken = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    };


    if (!token) return <Navigate to="/auth/Login" replace />;

    try {
        const decoded = jwtDecode(token);

        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            // Token is expired
            console.log("Token expired");
            removeToken();
            return <Navigate to="/auth/Login" replace />;
        }

        // Check user role
        if (requiredRole && decoded.user.role !== requiredRole) {
            return <Navigate to="/unauthorized" />; // 403 page
        }

        return children;
    } catch (error) {
        console.error("Token decode error:", error);
        removeToken();
        return <Navigate to="/auth/Login" replace />;
    }
};

export default ProtectedRoute;
