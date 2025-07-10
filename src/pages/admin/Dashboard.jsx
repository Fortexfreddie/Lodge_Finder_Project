import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Building2, Home, ShoppingCart, DollarSign, CalendarCheck, PlusIcon, Settings, ArrowRightCircleIcon, ClipboardCheck, UserX, Users, ShieldCheck, UserCheck, Headphones } from "lucide-react";
import { useNavigate, Outlet } from "react-router-dom";
import api from '../../utils/api';
import { useState, useEffect } from "react";



const Dashboard = () => {
    const navigate = useNavigate();
    const [statsData, setStatsData] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get("/admin/get-dashboard-stats.php");

                if (response.data.status === "success") {
                    setStatsData(response.data.data);
                    console.log(response.data.data);
                }
            } catch (err) {
                console.error("Failed to load dashboard stats:", err);
                if (err.response?.status === 401) {
                    navigate('/auth/login');
                }
            }
        }

        fetchStats();
    }, []);

    const stats = [
        {
            title: 'Total Users',
            value: statsData?.total_users ?? 0,
            icon: Users,
            link: 'Users',
        },
        {
            title: 'Total Admins',
            value: statsData?.total_admins ?? 0,
            icon: ShieldCheck,
            link: 'Users',
        },
        {
            title: 'Total Revenue',
            value: '₦200,000',
            icon: DollarSign,
            link: '/Admin/Revenue',
        },
        {
            title: 'Total Agents',
            value: statsData?.total_agents ?? 0,
            icon: UserCheck,
            link: 'Users',
        },
        {
            title: 'Total Agent KYC Applications',
            value: statsData?.total_kyc_applications ?? 0,
            icon: ClipboardCheck,   
            link: '/Admin/KycApplication',
        },
        {
            title: 'Total Review Listings',
            value: '46',
            icon: ClipboardCheck,
            link: '/Admin/Review',
        },
        {
            title: 'Total Total Listings',
            value: '10',
            icon: Building2,
            link: '/Admin/Properties',
        },
        {
            title: 'Total Active Properties',
            value: '10',
            icon: Home,
            link: '/Admin/Properties',
        },
        {
            title: 'Total Booking Requests',
            value: '35',
            icon: CalendarCheck,
            link: '/Admin/Bookings',
        },
        {
            title: 'Total Total Sales',
            value: '30',
            icon: ShoppingCart,
            link: '/Admin/Users',
        },
        {
            title: 'Total Suspended Users',
            value: '5',
            icon: UserX,
            link: '/Admin/Users',
        },
        {
            title: 'Total Suspended Admins',
            value: '0',
            icon: UserX,
            link: '/Admin/Users',
        }
    ];

    const add = [
        {
            title: 'Add new Admin',
            icon: PlusIcon,
            link: '/Admin/Users',
        },
        {
            title: 'Add new listing',
            icon: PlusIcon,
            link: '/Agent/Post',
        }
    ];

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
                            {
                                stats.map((stat, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => navigate(stat.link)}
                                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-colors duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-gray-500 dark:text-gray-400">
                                                <stat.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xl font-bold text-gray-800 dark:text-white">{stat.value}</span>
                                        </div>
                                        <h2 className="text-md font-semibold text-gray-800 dark:text-white">{stat.title}</h2>
                                    </div>
                                ))
                            }
                            {
                                add.map((item, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => navigate(item.link)}
                                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-colors duration-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <div className="text-gray-500 dark:text-gray-400">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <h2 className="text-md font-semibold text-gray-800 dark:text-white">{item.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <Outlet />
                        </div>
                    </div>    
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;