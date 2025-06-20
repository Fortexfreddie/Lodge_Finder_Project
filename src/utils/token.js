import { jwtDecode } from "jwt-decode";

export function getValidToken() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 > Date.now()) {
            return token;
        } else {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            return null;
        }
    } catch {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        return null;
    }
}

export function isThereToken() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
       return token; 
    } else{
        return null;
    }
}
