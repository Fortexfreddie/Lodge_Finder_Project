import axios from 'axios';

// Create instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost/lodge-finder-project-backend/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Needed for cookies like refresh_token
    });

    // Request Interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token');
            if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response Interceptor
    axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 errors and refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

            try {
                const res = await axios.post(
                    'http://localhost/lodge-finder-project-backend/api/auth/refresh.php', 
                    {},
                    { withCredentials: true } // send the refresh token cookie
                );
                
                if (res.status === 200) {
                const newAccessToken = res.data.token; // Get new token from response
                const remember = res.data.remember;

                // Save new token to local or session storage based on 'remember'
                if (remember) {
                localStorage.setItem('token', newAccessToken);
                } else {
                sessionStorage.setItem('token', newAccessToken);
                }

                console.log('Hey, just refreshed token rn');

                // Set default Authorization header globally
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

                // Retry original request with the new token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
                }
            } catch (err) {
                console.error('Refresh token failed', err);
                // Handle logout or redirect
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;