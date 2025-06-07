import { XIcon, MapPinIcon, StarIcon, Droplet, Zap, Wifi, PhoneIcon, ShieldCheck, Bookmark, Share } from 'lucide-react';
import image from '../assets/listing_images/image.png';
import img1 from '../assets/listing_images/image(1).avif';
import img2 from '../assets/listing_images/image(2).avif';
import img4 from '../assets/listing_images/image(5).avif';
import img5 from '../assets/listing_images/image(4).avif';
import img6 from '../assets/listing_images/image(6).avif';
import img7 from '../assets/listing_images/image(7).avif';
import { useNavigate } from 'react-router-dom';
import ListingCards from "./ListingCards";
import { useState } from "react";

const ListingDetail = () => {
    const navigate = useNavigate();
    const [starHovered, setStarHovered] = useState(null);
    const [mainImage, setMainImage] = useState(image);

    const starArr = [0,1,2,3,4];
    const reviewArr = [0,1,2,3];
    const lodgeImages = [img1, img2, img4, img5, img7, img6];

    return ( 
        <div className="container mx-auto px-4 py-8 dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
            <div className='bg-white dark:bg-gray-800 transition-colors duration-300 rounded-lg shadow-lg p-4 mb-6'>
                <div className='md:flex'>
                    <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 w-full md:w-1/2 flex flex-col">
                        <div className="relative h-64 md:h-128">
                            <button onClick={() => {navigate('/')}} className="absolute cursor-pointer top-4 right-4 rounded-full bg-gray-200 dark:bg-gray-700 p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                <XIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                            </button>
                            <img src={mainImage} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                        <div className="p-4 bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
                            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-6 gap-2 max-w-4xl mx-auto">
                                {
                                    lodgeImages.map((img, index) => (
                                        <div 
                                            key={index}
                                            className="h-16 sm:h-20 overflow-hidden rounded-lg cursor-pointer"
                                            onClick={() => setMainImage(img)}
                                        >
                                            <img src={img} alt={`Lodge Image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="p-6 w-full md:w-1/2 flex flex-col">
                        <div className="flex flex-col md:flex-col justify-between mb-4">
                            <div className='flex flex-col sm:flex-row justify-between'>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Canada-City Lodge</h1>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                                        <MapPinIcon className="h-4 w-4 mr-1"/>
                                        <span className="text-gray-600 dark:text-gray-300">UMUCHIMA, FUTO</span>
                                    </div>
                                </div>
                                <div className='mb-4 flex items-center justify-end sm:mb-0'>
                                    <button>
                                        <Bookmark className="h-5 w-5 mr-1 cursor-pointer text-blue-500 hover:text-blue-700" />
                                    </button>
                                    <button>
                                        <Share className="h-5 w-5 mr-1 cursor-pointer text-blue-500 hover:text-blue-700" />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row md:flex-col w-full flex-grow items-center gap-4'>
                                <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg w-full">
                                    <div>
                                        {
                                            reviewArr.map((index) => (
                                                <button
                                                    key={index}
                                                >
                                                    <StarIcon className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <span>
                                        <span className="font-medium">4 / 5 stars</span> <span className="text-gray-500 dark:text-gray-400 ml-1">(124 reviews)</span>
                                    </span>
                                </div>
                                <div className="flex flex-col items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg w-full">
                                    <div>
                                        {
                                            starArr.map((index) => (
                                                <button
                                                    key={index}
                                                    onMouseEnter={() => setStarHovered(index)}
                                                    onMouseLeave={() => setStarHovered(null)}
                                                >
                                                    <StarIcon className={`h-5 w-5 mr-1 cursor-pointer fill-current ${starHovered !== null && index <= starHovered ? "text-yellow-500" : "text-gray-400 dark:text-gray-500"} transition-colors duration-200`} />
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-1">Add a review</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-4">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Type</p>
                                    <p className="font-medium text-gray-800 dark:text-white">Lodge</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Slots</p>
                                    <p className="font-medium text-gray-800 dark:text-white"><span>3</span> rooms available</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Balcony</p>
                                    <p className="font-medium text-gray-800 dark:text-white">Yes</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">Kitchen</p>
                                    <p className="font-medium text-gray-800 dark:text-white">Yes</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>Description</h2>
                            <p className='text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nisi quasi sed molestias qui, quisquam minus eum similique facere! Iure!</p>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>Amenities</h2>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                                <div className="flex items-center text-gray-600">
                                    <Droplet className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>Water</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Zap  className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>Electricity</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Wifi className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>Network</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <ShieldCheck className="h-5 w-5 mr-2 text-blue-500" />
                                    <span>Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mt-4 pb-6'>
                    <div className='bg-gray-100 dark:bg-gray-700 w-full sm:w-1/2 transition-colors duration-300 p-4 rounded-lg mb-2'>
                        <div className='flex flex-row items-center'>
                            <PhoneIcon className='h-5 w-5 mr-2 text-blue-600' />
                            <p className='font-medium dark:text-white'>+2347085062472</p>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 text-sm'>Contact the property owner directly for inquiries</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 w-full text-sm">Price per year</p>
                            <p className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">₦200,000</p>
                        </div>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer'>Book Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Similar Properties You Might Like</h2>
                    <p className="text-md dark:text-gray-400">Browse our selection of premium apartments and lodges</p>
                </div>
                <div className='py-8'>
                    <ListingCards />
                </div>
            </div>
        </div>
    );
}
 
export default ListingDetail;