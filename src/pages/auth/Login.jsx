import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { MailIcon, LockIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ClipLoader } from 'react-spinners';
import { useState, useEffect } from "react";
import { getValidToken } from '../../utils/token';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // redirect to homepage if valid token is stored
    useEffect(() => {
        const token = getValidToken();
        if (token) {
        navigate('/');
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data);
        setLoading(true);
        
        try{
            const response = await axios.post('http://localhost/lodge-finder-project-backend/api/auth/login.php', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // console.log('Response:', response.data);

            if (response.data.status === 'success') {
                if (data.remember) {
                    localStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.setItem('token', response.data.token);
                }
                
                navigate("/");
            } else {
                alert(response.data.message || "Login failed.");
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong.');
        } finally {
            setLoading(false); 
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen gap-2 dark:bg-gray-900 bg-gray-100">
                <ClipLoader color="#1D4ED8" size={50} />
                <p className='Georama text-blue-700'>Logging In</p>
            </div>
        );
    }

    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="max-w-md w-full">
                    <div className="text-center mb-6">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your account</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Or <Link to="/auth/Signup" className="font-medium text-blue-600 hover:text-blue-500">create a new account</Link></p>
                    </div>
                    <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 mb-2">
                                <MailIcon className="h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email address"
                                    className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                    {...register("email", { required: "Email is required", pattern: { value:/^\S+@\S+$/i, message: "Email is invalid"} })}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email.message}</p>
                            )}
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 mb-2">
                                <LockIcon className="h-5 w-5 text-gray-400" />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs">{errors.password.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="checkbox" className="sr-only">Checkbox</label>
                            <div className="flex justify-between">
                                <div className="flex items-center mt-3">
                                    <input 
                                        type="checkbox"
                                        id="remember" 
                                        className="h-4 w-4 text-blue-600" 
                                        {...register("remember")}
                                    />
                                    <span className="ml-2 text-gray-700 dark:text-gray-300">Remember me</span>
                                </div>
                                <div className="items-center mt-3">
                                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot your password?</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">
                            <button type="submit" className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Login;