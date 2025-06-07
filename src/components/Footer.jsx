const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-8">
            <div className="mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">LodgeFinder</h3>
                        <p className="text-gray-300 text-sm">Find your perfect apartment or lodge with our comprehensive
                        listing service.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Apartments</a></li>
                            <li><a href="#" className="hover:text-white">Lodges</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Private Policy</a></li>
                            <li><a href="#" className="hover:text-white">Customer Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li>Independence layout enugu, Enugu state</li>
                            <li>Phone: +2347085062472</li>
                            <li>Email: getyourlodge@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 LodgeFinder. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;