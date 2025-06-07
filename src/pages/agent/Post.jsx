import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Building2, Wallet, Users, MapPin, ImagePlus, FileText } from "lucide-react";

const Post = () => {

    const locations = [
        { "value": "Eziobodo", "label": "Eziobodo" },
        { "value": "Umuchima", "label": "Umuchima" },
        { "value": "Ihiagwa", "label": "Ihiagwa" }  
    ];

    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <div className="container mx-auto p-4">
                    <div className="flex flex-col items-center">
                        <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-md shadow overflow-hidden mb-6 transition-colors duration-300">
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3">
                                <h3 className="text-gray-600 font-semibold dark:text-gray-300">Upload New Posts</h3>
                            </div>
                            <div className="p-4">
                                <form action="">
                                    <div className="mb-4">
                                        <p className="text-sm mb-6 text-gray-600 font-normal dark:text-gray-400">Carefully read the descriptions beside the inputs.</p>
                                    </div>
                                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgeName" className="text-md font-semibold text-gray-600 dark:text-gray-300">The lodge's name</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <Building2 className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="lodgeName"
                                                        id="lodgeName"
                                                        placeholder="Lodge name"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                    />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgePrice" className="text-md font-semibold text-gray-600 dark:text-gray-300">The price of the room</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <Wallet className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="number"
                                                        name="lodgePrice"
                                                        id="lodgePrice"
                                                        placeholder="Lodge price"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                    />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgeSlots" className="text-md font-semibold text-gray-600 dark:text-gray-300">How many rooms are available</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <Users className="h-5 w-5 text-gray-400" />
                                                    <input
                                                        type="number"
                                                        name="lodgeSlots"
                                                        id="lodgeSlots"
                                                        placeholder="Lodge slots"
                                                        className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                    />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgeLocation" className="text-md font-semibold text-gray-600 dark:text-gray-300">The lodge's location</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                                <select name="lodgeLocation" id="lodgeLocation" className="outline-0 w-full pl-4 pr-2 bg-transparent text-gray-500 dark:text-gray-400">
                                                    <option value="" disabled selected>Lodge Location</option>
                                                    {
                                                        locations.map((location, index) => (
                                                            <option key={index} value={location.value}>{location.label}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgeImage" className="text-md font-semibold text-gray-600 dark:text-gray-300">Upload lodge image(s)</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 max-w-sm w-full">
                                                <ImagePlus className="h-5 w-5 text-gray-400" />
                                                <input
                                                    type="file"
                                                    name="lodgeImage"
                                                    id="lodgeImage"
                                                    className="outline-0 w-full pl-2 text-gray-900 dark:text-white"
                                                    multiple
                                                    accept="image/*"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="lodgeDescription" className="text-md font-semibold text-gray-600 dark:text-gray-300">Short lodge description</label>
                                            <div className="flex items-center mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:shadow-lg focus-within:shadow-blue-500/30">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                                <textarea
                                                    type="text"
                                                    name="lodgeDescription"
                                                    id="lodgeDescription"
                                                    placeholder="Lodge Description"
                                                    className="outline-0 w-full pl-4 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                                                >
                                                </textarea>
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
 
export default Post;