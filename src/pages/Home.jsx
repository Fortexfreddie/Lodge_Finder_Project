import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import Footer from "../components/footer";
const Home
 = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Hero />
                <Properties />
            </div>
            <Footer />
        </div>
     );
}
 
export default Home
;