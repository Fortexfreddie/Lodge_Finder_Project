import listingImg from '../assets/listing_images/image.png';
import listingImg2 from '../assets/listing_images/image(1).avif';
import listingImg3 from '../assets/listing_images/image(2).avif';
import listingImg4 from '../assets/listing_images/image(3).avif';
import listingImg5 from '../assets/listing_images/image(4).avif';
import { StarIcon, MapPinIcon, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingCards = () => {
    const navigate = useNavigate();

    return ( 
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg2} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg3} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg4} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg2} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg5} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    navigate('/listingDetails')
                }} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <div className='absolute flex items-end inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6'>
                            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-blue-900 hover:border-gray-500 transition-colors duration-500">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                <p className="text-sm font-medium">View Details</p>
                            </a>
                        </div>
                        <img src={listingImg3} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div>
                {/* no group class here */}
                {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="relative h-48">
                        <img src={listingImg2} alt="" className="w-full h-full object-cover"/>
                        <div className='absolute top-2 right-2 px-2 py-1 rounded-md bg-blue-600'>
                            <p className='text-white text-xs font-medium'>₦200,000/yr</p>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='flex items-center mb-2'>
                            <StarIcon className='h-4 w-4 text-yellow-500 mr-1'/>
                            <p className='text-sm font-medium dark:text-white'><span>4.8 (100 reviews)</span></p>
                        </div>
                        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1'>
                            Canada-City Lodge
                        </h3>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Umuchima</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <Home className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>Lodge</p>
                        </div>
                        <div className='flex items-center mb-1 text-gray-600 dark:text-gray-300'>
                            <MapPinIcon className='h-4 w-4 mr-1'/>
                            <p className='text-sm font-medium'>2 rooms available</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='flex justify-center items-center mt-6'>
                    <p className='bg-blue-600 dark:bg-blue-700 rounded-lg shadow-md px-10 py-4 cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300 text-gray-200 font-medium'>See More Properties</p>
            </div>
        </div>
     );
}
 
export default ListingCards;