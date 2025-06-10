import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SearchIcon, X, Eye, Trash2, Settings, BadgeCheck } from "lucide-react";
import image from '../../assets/listing_images/image.png';


const Bookings = () => {
    const navigate = useNavigate();
    const [searchUsers, setSearchUsers] = useState(false);
    
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Bookings Management</h1>
                                <p className="text-md font-semibold mb-6 text-gray-700 dark:text-gray-300">
                                    You can manage all bookings here. Review, approve, or delete bookings as needed.
                                </p>
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
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Bookings</h3>
                                <div
                                    onClick={() => setSearchUsers(!searchUsers)} 
                                    className="bg-gray-200 dark:bg-gray-600 p-1 rounded-sm cursor-pointer">
                                    { searchUsers ? <X className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                                </div>
                            </div>
                            <div 
                                className={`
                                    transition-all duration-500 ease-in-out
                                    transform overflow-hidden
                                    ${searchUsers ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}
                                `}>
                                {
                                    searchUsers && (
                                        
                                            <div className="flex items-center justify-between p-4">
                                                <input
                                                    type="text"
                                                    placeholder="Search properties..."
                                                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                                />
                                                <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200">
                                                    Search
                                                </button>
                                            </div>
                                        
                                    )
                                }
                            </div>
                            <div className="p-1">
                                <div className="overflow-x-auto scrollable-table w-full">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Property
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Type
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Location
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Price
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Customer
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Sales Person
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Booking Date
                                                </th>
                                                <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Status Date
                                                </th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Apartment</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                                            <p className="text-sm font-normal">pending</p>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">John Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Jane Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-15</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-20</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-center">
                                                        <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer mr-4">
                                                            <Trash2 className="w-4 h-4" />
                                                            Cancel
                                                        </button>
                                                        <button className="flex items-center gap-1 text-green-600 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer">
                                                            <BadgeCheck className="w-4 h-4" />
                                                            Purchased
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Apartment</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                                            <p className="text-sm font-normal">canceled</p>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">John Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Jane Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-15</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-20</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-center">
                                                        <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer mr-4">
                                                            <Trash2 className="w-4 h-4" />
                                                            Cancel
                                                        </button>
                                                        <button className="flex items-center gap-1 text-green-600 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer">
                                                            <BadgeCheck className="w-4 h-4" />
                                                            Purchased
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Canada-City</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Apartment</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Umuchima</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">₦200,000</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                            <p className="text-sm font-normal">purchased</p>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">John Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">Jane Doe</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-15</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-20</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-center">
                                                        <button className="flex items-center gap-1 text-red-600 hover:text-red-900 dark:hover:text-red-400 hover:cursor-pointer mr-4">
                                                            <Trash2 className="w-4 h-4" />
                                                            Cancel
                                                        </button>
                                                        <button className="flex items-center gap-1 text-green-600 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer">
                                                            <BadgeCheck className="w-4 h-4" />
                                                            Purchased
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-800 p-6 border-t border-gray-200 dark:border-gray-700">
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
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Bookings;