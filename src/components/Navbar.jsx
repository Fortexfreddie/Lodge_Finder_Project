import { FaHome } from 'react-icons/fa';
import { Search, Moon, Sun, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from "./SearchBar";


const Navbar = () => {
    const navigate = useNavigate();
    // State to manage dark mode
    // Get theme from localStorage on first render
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    // State to manage the mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false);
    // state to show search icon
    const [showSearch, setShowSearch] = useState(false);

    // Function to toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(prev => {
          const newMode = !prev;
          localStorage.setItem('theme', newMode ? 'dark' : 'light');
          document.documentElement.classList.toggle('dark', newMode);
          return newMode;
        });
    };
    
    // Apply the dark class on mount based on localStorage
    useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return ( 
        <nav className="bg-white dark:bg-gray-800 shadow transition-colors duration-300 px-6">
            <div className='flex justify-between items-center py-4'>
                <div className="flex items-center text-2xl font-bold text-blue-700">
                    <a href="\" className='flex items-center gap-2'><FaHome className="h-6 w-6"/> LodgeFinder</a>
                </div>
                <ul className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-normal">
                    <li><Link to="/" className='hover:text-blue-700'>Home</Link></li>
                    <li><Link to="/Profile" className='hover:text-blue-700'>Profile</Link></li>
                    <li><Link to="/Apartments" className='hover:text-blue-700'>Apartments</Link></li>
                    <li><Link to="/Lodges" className='hover:text-blue-700'>Lodges</Link></li>
                </ul>
                <div className="flex items-center gap-3 text-gray-600">
                    <div onClick={toggleTheme} className="cursor-pointer text-gray-600 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors">
                        { isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </div>
                    <div
                        onClick={() => setShowSearch(!showSearch)}
                        className='cursor-pointer text-gray-600 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors'>
                            { showSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                    </div>
                    <div onClick={() => setMenuOpen(!menuOpen)} className='cursor-pointer md:hidden text-gray-600 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors'>
                        { menuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/> }
                    </div>
                    {/* <div className='hidden cursor-pointer text-gray-600 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors'>
                        <User className="h-5 w-5"/>
                    </div> */}
                    <div className="hidden md:flex items-center cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-700">
                        <button onClick={() => {
                            navigate("/Login")
                        }} className="flex items-center gap-2">
                            <User className="h-5 w-5"/>
                            <span className="cursor-pointer">Login</span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`
                transition-all duration-500 ease-in-out
                transform overflow-hidden
                ${menuOpen ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}
                `}
            >
                <div className='flex flex-col md:hidden gap-4 pb-4'>
                    <hr className='border border-gray-200 dark:border-gray-600' />
                    <div>
                        <ul className="flex flex-col gap-3 text-gray-600 dark:text-gray-300 font-normal">
                            <li><Link to="/" className='hover:text-blue-700'>Home</Link></li>
                            <li><Link to="/Profile" className='hover:text-blue-700'>Profile</Link></li>
                            <li><Link to="/Apartments" className='hover:text-blue-700'>Apartments</Link></li>
                            <li><Link to="/Lodges" className='hover:text-blue-700'>Lodges</Link></li>
                            <li><Link to="/Login" className='hover:text-blue-700'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>        
            <div
                className={`
                transition-all duration-500 ease-in-out
                transform overflow-hidden
                ${showSearch ? 'opacity-100 scale-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}
                `}
            >
                <div className='flex flex-col items-center justify-center mb-4 mt-2'>
                    <SearchBar />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;