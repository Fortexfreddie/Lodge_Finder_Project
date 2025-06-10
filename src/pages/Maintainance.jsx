import { Settings } from "lucide-react";
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FaHome } from 'react-icons/fa';


const Maintainance = () => {
    // State to manage dark mode
    // Get theme from localStorage on first render
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    
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
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">
            <nav className="bg-white dark:bg-gray-800 shadow transition-colors duration-300 px-6">
                <div className='flex justify-between items-center py-4'>
                    <div className="flex items-center text-2xl font-bold text-blue-700">
                        <a href="\" className='flex items-center gap-2'><FaHome className="h-6 w-6"/> LodgeFinder</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                        <div onClick={toggleTheme} className="cursor-pointer text-gray-600 dark:text-gray-300 bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors">
                            { isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-grow flex items-center justify-center">
                <div className="text-center px-4 py-12">
                <div className="mb-6 flex justify-center">
                    <Settings className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin-slow" />
                </div>
                <h1 className="text-3xl font-bold mb-4">We're Under Maintenance</h1>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                    ..but we'll be back online shortly!
                </p>
                </div>
            </div>
            <div className="bg-gray-800 p-10 text-center text-gray-400 text-sm">
                <p>&copy; 2025 LodgeFinder. All rights reserved.</p>
            </div>
        </div>

     );
}
 
export default Maintainance;