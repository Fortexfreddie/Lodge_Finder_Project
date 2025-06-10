import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Settings } from "lucide-react";
import image from '../../assets/listing_images/image.png';


const Kyc = () => {
    return ( 
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                            <div className="text-center sm:text-left">
                                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">KYC Application</h1>
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
                        <div className="flex flex-col items-center">
                            <div className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden p-6 mb-6 space-y-6 transition-colors duration-300">
                                <div className="flex flex-col items-center">
                                    <img src={image} alt="" className="h-52 w-52 rounded-md"/>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                                        <p className="font-semibold dark:text-gray-50">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-semibold dark:text-gray-50">johndoe@email.com</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Whatsapp Number</p>
                                        <p className="font-semibold dark:text-gray-50">+123456789</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                        <p className="font-semibold dark:text-gray-50">Umuchima</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Current Lodge</p>
                                        <p className="font-semibold dark:text-gray-50">Papam Lodge</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                        <p className="font-semibold dark:text-gray-50">Umuchima</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Number</p>
                                        <p className="font-semibold dark:text-gray-50">242121211</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Bank Name</p>
                                        <p className="font-semibold dark:text-gray-50">Opay</p>
                                    </div>
                                </div>
                                    <form action="">
                                        <textarea
                                            className="w-full border border-gray-500 rounded-xl p-4 text-gray-900 dark:text-white outline-hidden mb-4"
                                            placeholder="Add rejection reason (optional)"
                                        />
                                        <div className="flex justify-center gap-4">
                                            <button className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-green-700">
                                                Accept
                                            </button>
                                            <button className="bg-red-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-red-700">
                                                Reject
                                            </button>
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
 
export default Kyc;
