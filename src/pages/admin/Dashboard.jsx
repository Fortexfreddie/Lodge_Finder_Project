import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Building2, Home, ShoppingCart, DollarSign, Eye, Trash2, CalendarCheck, PlusIcon, Settings, ArrowRightCircleIcon, ClipboardCheck, UserX, Users, ShieldCheck, UserCheck, Headphones } from "lucide-react";
import image from '../../assets/listing_images/image.png';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();

    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div>
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Admin Panel</h1>
                                <p className="text-md font-semibold mb-6 text-gray-700 dark:text-gray-300">Welcome freddie, everything looks great.</p>
                            </div>
                            <div>
                                <button 
                                    onClick={() => navigate("/Admin/Settings")}
                                    className="flex items-center gap-2 px-4 py-2 bg-transparent text-gray-500 dark:text-gray-50 rounded-lg hover:shadow hover:bg-gray-800 hover:dark:bg-gray-600 transition-colors duration-300 cursor-pointer">
                                    <Settings className="w-5 h-5" />
                                    <span className="font-semibold">Settings</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">11</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Customer Support</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <Headphones className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Customer Support</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">450</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Users</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">10</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Admins</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">₦200,000</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Revenue</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">100</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Agents</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <UserCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">33</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Agent KYC Applications</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <ClipboardCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">46</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Review Listings</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <ClipboardCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Review Listings</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">10</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Total Listings</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">10</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Active Properties</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <Home className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">35</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Booking Requests</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <CalendarCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">30</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Total Sales</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <ShoppingCart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">5</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Suspended Users</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <UserX className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">0</h1>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">Suspended Admins</p>
                                    </div>
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <UserX className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Total Users</h2>
                                    <ArrowRightCircleIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-center py-6 px-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <PlusIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div 
                                    onClick={() => navigate("/Agent/Post")}
                                    className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Add new Admin</h2>
                                    <PlusIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                <div className="flex items-center justify-center py-6 px-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <PlusIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>
                                <div 
                                    onClick={() => navigate("/Agent/Post")}
                                    className="flex items-center justify-between py-2 px-4 bg-gray-50 dark:bg-gray-700">
                                    <h2 className="text-sm font-medium text-blue-500 dark:text-blue-600">Add new listing</h2>
                                    <PlusIcon className="h-5 w-5 text-blue-500 dark:text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;