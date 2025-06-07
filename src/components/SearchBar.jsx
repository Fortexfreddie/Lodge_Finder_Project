import { Search } from 'lucide-react';

const SearchBar = () => {
    return ( 
        <div className="flex bg-gray-300 dark:bg-gray-900 shadow-md rounded-lg p-4 gap-2 overflow-hidden max-w-3xl w-full items-center">
            <input type="text" name="" id="" placeholder='Where do you want to stay?' className='w-full outline-blue-500 rounded-md p-3 border border-gray-200 text-gray-900 dark:text-white bg-white dark:bg-gray-700 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <a href="#">
                <button className="flex cursor-pointer items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 font-semibold transition-colors">
                    <Search className="inline mr-2 w-5 h-5" />
                    Search
                </button>
            </a>
        </div>
     );
}
 
export default SearchBar;