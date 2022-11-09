import { CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem } from '@coreui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
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