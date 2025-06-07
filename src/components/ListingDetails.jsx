import Navbar from "./Navbar";
import ListingDetail from "./ListingDetail";
import Footer from "./footer";


const ListingDetails = () => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
                <ListingDetail />
            </div>
            <Footer />
        </div>
    );
}
 
export default ListingDetails;