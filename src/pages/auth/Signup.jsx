import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { UserIcon, MailIcon, LockIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";


const Signup = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-grow items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <div className="max-w-md w-full">
                    <div className="text-center mb-6">
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Create your account</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Already have an account? <Link to="/Login" className="font-medium text-blue-600 hover:text-blue-500">Sign in</Link></p>
                    </div>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="sr-only">First Name</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                            <UserIcon className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First name"
                                className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                            />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName" className="sr-only">Last Name</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                            <UserIcon className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last name"
                                className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                            />
                            </div>
                        </div>

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
                            <label htmlFor="phonenumber" className="sr-only">Phone Number</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                            <PhoneIcon className="h-5 w-5 text-gray-400" />
                            <input
                                type="number"
                                name="phonenumber"
                                id="phonenumber"
                                placeholder="Phone number"
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
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2">
                            <LockIcon className="h-5 w-5 text-gray-400" />
                            <input
                                type="password"
                                name="confirmPassword"  
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                            />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Signup;