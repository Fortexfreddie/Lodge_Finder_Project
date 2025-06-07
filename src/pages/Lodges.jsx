import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ListingCards from "../components/ListingCards";

const Lodges = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow px-4 py-8 dark:bg-gray-900 bg-white transition-colors duration-300">
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Browse our selection of lodges</h2>
                </section>
                <div className="py-8">
                    <ListingCards />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Lodges;