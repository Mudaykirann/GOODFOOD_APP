import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to='/'>
                            <h1 className="text-2xl">Good<b className='text-red-500'>Food.</b></h1></Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signup" className="px-4 py-2  text-black hover:text-red-900 uppercase rounded-md">Sign up</Link>
                        <Link to="/login" className="px-4 py-2 bg-red-500 text-white uppercase rounded-md hover:bg-red-600">Login</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-white text-upper bg-red-500 hover:bg-red-600">Signup</Link>
                        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white text-upper bg-gray-500 hover:bg-gray-600">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
