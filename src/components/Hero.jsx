import SearchBar from "./SearchBar";
import heroBg from "../assets/home_images/image.png";

const Hero = () => {
    return ( 
        <div className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
                <img
                src={heroBg}
                alt="Luxury home interior"
                className="w-full h-full object-cover opacity-40"
            />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Find Your Perfect Stay
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
                Discover amazing places to stay, from cozy apartments to luxury lodges
                </p>
                <SearchBar />
            </div>
        </div>
     );
}
 
export default Hero;