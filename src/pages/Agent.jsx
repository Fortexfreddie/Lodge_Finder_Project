import { ArrowRight, CreditCard, ImagePlus, PhoneIcon, LockIcon, HomeIcon, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import backgroundImage from "../assets/profile_images/photo10@2x.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from '../utils/api';
import { isThereToken } from '../utils/token';
import { useEffect, useState } from "react";


const Profile = () => {
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const locations = [
        { "value": "Eziobodo", "label": "Eziobodo" },
        { "value": "Umuchima", "label": "Umuchima" },
        { "value": "Ihiagwa", "label": "Ihiagwa" }  
    ];

    const banks = [
        { "value": "Access Bank", "label": "Access Bank" },
        { "value": "Carbon", "label": "Carbon" },
        { "value": "Citibank", "label": "Citibank" },
        { "value": "Ecobank", "label": "Ecobank" },
        { "value": "Eyowo", "label": "Eyowo" },
        { "value": "FairMoney", "label": "FairMoney" },
        { "value": "FCMB", "label": "First City Monument Bank (FCMB)" },
        { "value": "Fidelity Bank", "label": "Fidelity Bank" },
        { "value": "First Bank", "label": "First Bank" },
        { "value": "Globus Bank", "label": "Globus Bank" },
        { "value": "GoMoney", "label": "GoMoney" },
        { "value": "Heritage Bank", "label": "Heritage Bank" },
        { "value": "Jaiz Bank", "label": "Jaiz Bank" },
        { "value": "Keystone Bank", "label": "Keystone Bank" },
        { "value": "Kuda Bank", "label": "Kuda Bank" },
        { "value": "Moniepoint", "label": "Moniepoint" },
        { "value": "Opay", "label": "Opay" },
        { "value": "Palmpay", "label": "Palmpay" },
        { "value": "Parallex Bank", "label": "Parallex Bank" },
        { "value": "Polaris Bank", "label": "Polaris Bank" },
        { "value": "Providus Bank", "label": "Providus Bank" },
        { "value": "Rubies Bank", "label": "Rubies Bank" },
        { "value": "Sparkle", "label": "Sparkle" },
        { "value": "Stanbic IBTC Bank", "label": "Stanbic IBTC Bank" },
        { "value": "Standard Chartered Bank", "label": "Standard Chartered Bank" },
        { "value": "Sterling Bank", "label": "Sterling Bank" },
        { "value": "SunTrust Bank", "label": "SunTrust Bank" },
        { "value": "Titan Trust Bank", "label": "Titan Trust Bank" },
        { "value": "UBA", "label": "United Bank for Africa (UBA)" },
        { "value": "Union Bank", "label": "Union Bank" },
        { "value": "Unity Bank", "label": "Unity Bank" },
        { "value": "Vbank", "label": "Vbank" },
        { "value": "Wema Bank", "label": "Wema Bank" },
        { "value": "Zenith Bank", "label": "Zenith Bank" }
    ];
      
        
    const onSubmit = async (data) => {
        if (!isThereToken()) {
            navigate('/auth/login');
            return;
        }

        const file = watch("Passport")?.[0];
        if (!file) {
            alert('Please upload a passport image');
            return;
        }

        const formData = new FormData(); // Create FormData for file upload
        if (!file) {
            alert('Please upload a passport image');
            return;
        }
        formData.append("Passport", file); // Append the file
        formData.append("Location", data.location);
        formData.append("Lodge", data.Lodge);
        formData.append("WhatsappNumber", data.WhatsappNumber);
        formData.append("AccountNumber", data.AccountNumber);
        formData.append("Bank", data.Bank);

        setIsUploading(true); // Set uploading state to true
        
        try {
            const response = await api.post('/kyc/submit_kyc.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            alert('KYC updated successfully');
            setIsUploading(false); // Reset uploading state
        } catch (error) {
            console.error('Error updating KYC:', error);
            setIsUploading(false); // Reset uploading state
            if (!err.response) {
                alert("Network error. Please check your connection.");
            } else if (err.response.status === 401) {
                alert('Session expired. Please log in again.');
                navigate('/auth/login');
            } else if (err.response?.status === 429) {
                alert("Too many requests, please try again later.");
            } else {
                alert(err.response.data?.message || "Something went wrong. Please try again.");
            }
        }
    }

    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto p-4">
                    <div className="relative rounded-md shadow overflow-hidden mb-6 h-80 md:h-96">
                        <div className="absolute p-4 flex flex-col inset-0 justify-center items-center bg-black/60 dark:bg-black/70 to-transparent transition-colors duration-300">
                            <h1 className="text-md sm:text-lg md:text-3xl font-bold text-white mb-4">Complete your KYC to become an agent today</h1>
                            <p className="text-sm sm:text-md md:text-xl text-gray-200 font-normal">Please upload the accurate information requested below</p>
                            <div 
                                onClick={() => {navigate('/agent/dashboard');}}
                                className="flex items-center bg-gray-900 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-950 mt-6 shadow-md">
                                <button className="text-white font-bold cursor-pointer">Dashboard</button>
                                <ArrowRight  className="h-5 w-5 text-gray-200 ml-2"/>
                            </div>
                        </div>
                        <img src={backgroundImage} className="w-full h-full object-cover" alt="background Image" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">KYC</h3>
                            </div>
                            <div className="p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4">
                                        <p className="text-md mb-2 text-gray-600 font-normal dark:text-gray-400">Upload accurate details of yourself to become an agent.</p>
                                    </div>
                                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        <div className="mb-4 w-full">
                                            <label htmlFor="profilePic" className="text-md font-semibold text-gray-600 dark:text-gray-300">Upload passport</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 max-w-sm w-full">
                                                <ImagePlus className="h-5 w-5 text-gray-400" />
                                                <input
                                                    type="file"
                                                    name="Passport"
                                                    id="Passport"
                                                    className="outline-0 w-full pl-2 text-gray-900 dark:text-white"
                                                    accept="image/*"
                                                    disabled={isUploading}
                                                    {...register("Passport", { required: "Image is required", validate: {
                                                        fileType: (value) => value[0]?.type.startsWith("image/") || "Only image files allowed", fileSize: (value) => value[0]?.size < 2 * 1024 * 1024 || "Max size is 2MB"
                                                    },
                                                    })}
                                                />
                                            </div>
                                            {errors.Passport && <p className="text-red-500 text-sm mt-1">{errors.Passport.message}</p>}
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="location" className="text-md font-semibold text-gray-600 dark:text-gray-300">Current Location</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                                <select {...register("location", { required: "Please select a location"})} 
                                                    name="location" id=""
                                                    defaultValue=""
                                                    className="outline-0 w-full pl-4 pr-2 bg-transparent text-gray-500 dark:text-gray-400">
                                                    <option value="" disabled>Select Location</option>
                                                    {
                                                        locations.map((location, index) => (
                                                            <option key={index} value={location.value}>{location.label}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p> }
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodge" className="text-md font-semibold text-gray-600 dark:text-gray-300">Current Lodge</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <HomeIcon className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="Lodge"
                                                        id="Lodge"
                                                        placeholder="lodge name"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                        {...register("Lodge", { required: "Lodge name is required" })}
                                                    />
                                            </div>
                                            {errors.Lodge && <p className="text-red-500 text-sm mt-1">{errors.Lodge.message}</p>}
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="whatsappNumber" className="text-md font-semibold text-gray-600 dark:text-gray-300">Whatsapp Number</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <PhoneIcon className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="number"
                                                        name="WhatsappNumber"
                                                        id="WhatsappNumber"
                                                        placeholder="Whatsapp Number"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                        {...register("WhatsappNumber", { required: "Whatsapp number is required", pattern: {value: /^(?:\+234|0)[789][01]\d{8}$/, message: "Phone number is invalid"} })}
                                                    />
                                            </div>
                                            {errors.WhatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.WhatsappNumber.message}</p>}
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="accountNumber" className="text-md font-semibold text-gray-600 dark:text-gray-300">Account Number</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <LockIcon className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="number"
                                                        name="AccountNumber"
                                                        id="AccountNumber"
                                                        placeholder="Account Number"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                        {...register("AccountNumber", { required: "Account number is required", minLength: { value: 10, message: "Account number must be 10 characters" }, maxLength: { value: 10, message: "Account number must be 10 characters"} })}
                                                    />
                                            </div>
                                            {errors.AccountNumber && <p className="text-red-500 text-sm mt-1">{errors.AccountNumber.message}</p>}
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="bank" className="text-md font-semibold text-gray-600 dark:text-gray-300">Bank Name</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <CreditCard className="h-5 w-5 text-gray-400" />
                                                <select {...register("Bank", { required: "Please select a bank"})} 
                                                    name="Bank" id="Bank" 
                                                    defaultValue=""
                                                    className="outline-0 w-full pl-4 pr-2 bg-transparent text-gray-500 dark:text-gray-400">
                                                    <option value="" disabled>Select Bank</option>
                                                    {
                                                        banks.map((bank, index) => (
                                                            <option key={index} value={bank.value}>{bank.label}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            {errors.Bank && <p className="text-red-500 text-sm mt-1">{errors.Bank.message}</p>}
                                        </div>
                                    </div>
                                    <div className="mb-4 flex md:flex items-center justify-center w-full">
                                        <button type="submit" disabled={isUploading} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-semibold transition-colors cursor-pointer w-full md:w-2/12">{isUploading ? "Updating..." : "Update"}</button>
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
 
export default Profile;