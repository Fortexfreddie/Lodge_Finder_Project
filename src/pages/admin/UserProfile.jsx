import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { X, Pencil, SearchIcon, Eye, Trash2, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "../../assets/profile_images/image.png"
import image from '../../assets/listing_images/image.png';



const UserProfile = () => {
    const navigate = useNavigate();
    const [searchUsers, setSearchUsers] = useState(false);

    const add = [
        {
            title: 'Edit User',
            icon: Pencil,
            link: '',
            iconColor: 'text-gray-500 dark:text-gray-400',
            color: 'text-gray-800 dark:text-white'
        },
        {
            title: 'Suspend User',
            icon: X,
            link: '',
            iconColor: 'text-red-500 dark:text-red-400',
            color: 'text-red-800 dark:text-red-400'
        }
    ];

    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div>
                        <div className="grid grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                            {
                                add.map((item, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => navigate(item.link)}
                                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-colors duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <div className={item.color}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h2 className={`text-md font-semibold ${item.color} `}>{item.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="max-w-5xl mx-auto w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">User Details</h3>
                            </div>
                            <div className="p-4">
                                <form action="">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="mb-4 flex flex-col items-center">
                                            <img src={Avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover shadow-md" />
                                        </div>
                                        <div className="mb-4 text-center">
                                            <h2 className="text-xl font-bold text-gray-800 dark:text-white">John Doe</h2>
                                            <p className="text-gray-500 dark:text-gray-400">Freddie</p>
                                            <p className="text-gray-600 dark:text-gray-300 font-semibold">Admin</p>
                                            <div className="mt-4">
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">john@example.com</p>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">09012121212</p>
                                            </div>
                                        </div>
                                    </div>    
                                </form>
                            </div>
                        </div>
                        <div className="max-w-5xl mx-auto w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Bookmarks</h3>
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
                        <div className="max-w-5xl mx-auto w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Properties</h3>
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
                                                    Property Name
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
                                                    Post Date
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
                                                            <p className="text-sm font-normal">Active</p>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-15</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-center">
                                                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                            <Eye className="w-4 h-4" />
                                                            View
                                                        </button>
                                                        <button className="flex items-center gap-1 text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 hover:cursor-pointer mr-4">
                                                            <Wrench className="w-4 h-4" />
                                                            Edit
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
                                                            <p className="text-sm font-normal">Inctive</p>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center justify-start">
                                                        <p className="text-sm font-normal text-gray-900 dark:text-white">2023-01-15</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex items-center justify-center">
                                                        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 hover:cursor-pointer mr-4">
                                                            <Eye className="w-4 h-4" />
                                                            View
                                                        </button>
                                                        <button className="flex items-center gap-1 text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 hover:cursor-pointer mr-4">
                                                            <Wrench className="w-4 h-4" />
                                                            Edit
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
                    </div>    
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default UserProfile;