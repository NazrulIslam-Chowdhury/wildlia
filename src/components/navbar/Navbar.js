import { CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        // <header className="">
        //     <div className="container flex justify-between h-16 mx-auto">
        //         
        //         <ul className="items-stretch hidden space-x-3 lg:flex">
        //             <li className="flex">
        //                 <Link to='/' className="no-underline flex items-center font-semibold border-none px-4 text-black text-lg hover:bg-green-400 rounded">Home</Link>
        //             </li>
        //             <li className="flex">
        //                 <Link to='/blog' className="no-underline flex items-center ">Blog</Link>
        //             </li>

        //         </ul>
        //         <div className="items-center flex-shrink-0 hidden lg:flex">
        //             
        //             <button className="self-center px-8 py-3 font-semibold rounded dark:bg-green-400 hover:bg-green-600 text-gray-900">Register</button>
        //         </div>
        //         <button className="p-4 lg:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
        //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        //             </svg>
        //         </button>
        //     </div>
        // </header>
        <div>
            <CNavbar expand="lg" colorScheme="light" className="p-4 bg-green-200 text-gray-100">
                <CContainer fluid>
                    <Link to='/' aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-28 h-28 rounded-full bg-green-300' src={logo} alt="" />
                    </Link>
                    <CNavbarToggler
                        aria-label="Toggle navigation"
                        aria-expanded={visible}
                        onClick={() => setVisible(!visible)}
                    />
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CNavbarNav className='items-center'>
                            <CNavItem>
                                <Link className='no-underline cursor-pointer font-semibold px-4 
                               py-2 text-black text-lg hover:bg-green-400 rounded' to='/' active>
                                    Home
                                </Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className='no-underline  cursor-pointer font-semibold py-2 px-4 text-black text-lg hover:bg-green-400 rounded' to='/blog' active>Blog</Link>
                            </CNavItem>
                            <CNavItem>
                                <Link className='no-underline  cursor-pointer font-semibold py-2 px-4 text-black text-lg hover:bg-green-400 rounded' to='/services' active>Services</Link>
                            </CNavItem>
                            <CNavItem>
                                <button className="bg-green-400  hover:bg-green-600 py-2 rounded "><Link className='no-underline font-semibold px-4 text-black text-lg' to='/login' active>
                                    Login
                                </Link></button>

                            </CNavItem>
                        </CNavbarNav>
                    </CCollapse>
                </CContainer>
            </CNavbar>
        </div>
    );
};

export default Navbar;