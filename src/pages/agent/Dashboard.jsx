import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Building2, Home, ShoppingCart, DollarSign, Eye, Trash2, PlusIcon } from "lucide-react";
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
                        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Agent Dashboard</h1>
                        <p className="text-md font-semibold mb-6 text-gray-700 dark:text-gray-300">Welcome to your dashboard! Here you can manage your listings, view inquiries, and more.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">4</p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Total Listings</h2>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <Home className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">2</p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Active Properties</h2>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">3</p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Total Sales</h2>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-300">₦200,000</p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Revenue</h2>
                                </div>
                            </div>
                            <div
                                onClick={() => navigate("/Agent/Post")}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:cursor-pointer hover:shadow-md dark:hover:shadow-2xl transition-colors duration-300">
                                <div className="flex flex-col items-center">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                                        <PlusIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300">Add new listing</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className="overflow-x-auto rounded-t-lg scrollable-table w-full">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Property
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img src={image} alt="" className="h-10 w-10 rounded-full object-cover"/>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Lodge</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000/yr</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Active</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end">
                                                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </button>

                                                    <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img src={image} alt="" className="h-10 w-10 rounded-full object-cover"/>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Lodge</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000/yr</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Active</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end">
                                                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </button>

                                                    <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img src={image} alt="" className="h-10 w-10 rounded-full object-cover"/>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Lodge</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000/yr</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Active</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end">
                                                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </button>

                                                    <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <img src={image} alt="" className="h-10 w-10 rounded-full object-cover"/>
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Lodge</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000/yr</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <p className="text-sm font-normal text-gray-900 dark:text-white">Active</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end">
                                                <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                    <Eye className="w-4 h-4" />
                                                    View
                                                </button>

                                                    <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer">
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 border-t rounded-b-lg border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-center text-sm">
                                <button className="px-3 py-2 cursor-pointer leading-tight tracking-wide text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                    Previous
                                </button>
                                <button className="px-3 py-2 cursor-pointer leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
                                    1
                                </button>
                                <button className="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                    2
                                </button>
                                <button className="px-3 py-2 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                    3
                                </button>
                                <button className="px-3 py-2 cursor-pointer leading-tight tracking-wide text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                                    Next
                                </button>
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