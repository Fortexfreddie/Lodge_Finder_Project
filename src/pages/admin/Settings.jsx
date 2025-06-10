import { Settings, EyeOff, FileDown, Ban, CalendarX, LockIcon, Eye, Trash2, SearchIcon, X } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import backgroundImage from "../../assets/profile_images/photo10@2x.jpg";
import Avatar from "../../assets/profile_images/image.png"
import { useNavigate } from "react-router-dom";
import image from '../../assets/listing_images/image.png';
import { useState } from "react";

const Setting = () => {
    const navigate = useNavigate();
    const [searchBookmarks, setSearchBookmarks] = useState(false);
  
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto p-4">
                    <div className="relative rounded-md shadow overflow-hidden mb-6 h-80 md:h-96">
                        <div className="absolute flex flex-col p-4 inset-0 justify-center items-center bg-black/60 dark:bg-black/70 to-transparent transition-colors duration-300">
                            <div className="mb-6">
                                <img src={Avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 dark:border-gray-400 shadow-md transition-colors duration-300" />
                            </div>
                            <h1 className="text-2xl font-bold text-white">Admin Settings</h1>
                            <p className="text-xl text-gray-200 font-semibold">Admin</p>
                            <div
                                onClick={() => {}}
                                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-md transition-colors duration-200 mt-6 cursor-pointer"
                                >
                                <Settings className="h-5 w-5" />
                                <span className="font-semibold">Maintenance Mode</span>
                                </div>

                        </div>
                        <img src={backgroundImage} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Emergency Actions</h3>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                        <div className="flex items-center justify-center py-6 px-4">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                                <EyeOff className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                        <div 
                                            onClick={() => navigate("/Agent/Post")}
                                            className="flex items-center justify-between py-2 px-4 bg-gray-100 dark:bg-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300">
                                            <h2 className="text-sm font-semibold text-blue-900">Hide all posts</h2>
                                            <EyeOff className="h-5 w-5 text-blue-900" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                        <div className="flex items-center justify-center py-6 px-4">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                                <FileDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                        <div 
                                            onClick={() => navigate("/Agent/Post")}
                                            className="flex items-center justify-between py-2 px-4 bg-gray-100 dark:bg-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300">
                                            <h2 className="text-sm font-semibold text-blue-900">Export products</h2>
                                            <FileDown className="h-5 w-5 text-blue-900" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                        <div className="flex items-center justify-center py-6 px-4">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                                <Ban className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                        <div 
                                            onClick={() => navigate("/Agent/Post")}
                                            className="flex items-center justify-between py-2 px-4 bg-gray-100 dark:bg-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300">
                                            <h2 className="text-sm font-semibold text-blue-900">Disable posting</h2>
                                            <Ban className="h-5 w-5 text-blue-900" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow transition-colors duration-300">
                                        <div className="flex items-center justify-center py-6 px-4">
                                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                                <CalendarX className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                        <div 
                                            onClick={() => navigate("/Agent/Post")}
                                            className="flex items-center justify-between py-2 px-4 bg-gray-100 dark:bg-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-300">
                                            <h2 className="text-sm font-semibold text-blue-900">Disable booking</h2>
                                            <CalendarX className="h-5 w-5 text-blue-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Bookmarks</h3>
                                <div
                                    onClick={() => setSearchBookmarks(!searchBookmarks)} 
                                    className="bg-gray-200 dark:bg-gray-600 p-1 rounded-sm cursor-pointer">
                                    { searchBookmarks ? <X className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                                </div>
                            </div>
                            <div 
                                className={`
                                    transition-all duration-500 ease-in-out
                                    transform overflow-hidden
                                    ${searchBookmarks ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}
                                `}>
                                {
                                    searchBookmarks && (
                                        
                                            <div className="flex items-center justify-between p-4">
                                                <input
                                                    type="text"
                                                    placeholder="Search bookmarks..."
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
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
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
                        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Change Password</h3>
                            </div>
                            <div className="p-4">
                                <form action="">
                                    <div className="mb-4">
                                        <p className="text-md mb-2 text-gray-600 font-normal dark:text-gray-400">Changing your sign in password is an easy way to keep your account secure.</p>
                                    </div>
                                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        <div className="mb-4 w-full">
                                            <label htmlFor="password" className="text-md font-semibold text-gray-600 dark:text-gray-300">Current Password</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <LockIcon className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="password"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                    />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="newPassword" className="text-md font-semibold text-gray-600 dark:text-gray-300">New Password</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <LockIcon className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        id="newPassword"
                                                        placeholder="New Password"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                    />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="confirmPassword" className="text-md font-semibold text-gray-600 dark:text-gray-300">Confirm Password</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
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
                                    </div>
                                    <div className="mb-4 flex md:flex items-center justify-center w-full">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-semibold transition-colors cursor-pointer w-full md:w-2/12">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Setting;