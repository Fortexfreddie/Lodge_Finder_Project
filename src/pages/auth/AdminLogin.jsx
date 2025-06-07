import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { MailIcon, LockIcon } from "lucide-react";

const AdminLogin = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="max-w-md w-full">
                    <div className="text-center mb-6">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Sign in to your admin panel</h2>
                    </div>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                                <MailIcon className="h-5 w-5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                                <LockIcon className="h-5 w-5 text-gray-400" />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="checkbox" className="sr-only">Checkbox</label>
                            <div className="flex justify-between">
                                <div className="flex items-center mt-3">
                                    <input 
                                        type="checkbox"
                                        id="remember" 
                                        name="remember"
                                        className="h-4 w-4 text-blue-600" 
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
 
export default AdminLogin;