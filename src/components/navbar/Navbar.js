import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <header className="p-4 bg-green-200 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                    <img className='w-28 h-28 rounded-full bg-green-300' src={logo} alt="" />
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link to='/' className="none flex items-center font-semibold border-none px-4 text-black text-lg hover:bg-green-400 rounded">Home</Link>
                    </li>
                    <li className="flex">
                        <Link to='/blog' className="flex items-center font-semibold px-4 text-black text-lg hover:bg-green-400 rounded">Blog</Link>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center text-gray-900 font-semibold px-8 py-3 rounded bg-green-400">Log in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-green-400 dark:text-gray-900">Register</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;