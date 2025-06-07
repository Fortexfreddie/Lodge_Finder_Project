import ListingCards from "./ListingCards";

const Properties = () => {
    return ( 
        <div className="px-4 py-8 dark:bg-gray-900 bg-white transition-colors duration-300">
            <section>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Featured Properties</h2>
                <p className="text-md dark:text-gray-400">Browse our selection of premium apartments and lodges</p>
            </section>
            <div className="py-8">
                <ListingCards />
            </div>
        </div>
 );
}
 
export default Properties;