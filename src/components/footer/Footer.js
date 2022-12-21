import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-teal-800 dark:text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link to='/' className="no-underline flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-28 h-28 rounded-full">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-300">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='no-underline text-gray-200' to="">Features</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Integrations</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Pricing</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-300">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Privacy</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-300">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Public API</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Documentation</Link>
                            </li>
                            <li>
                                <Link className='text-gray-200 no-underline' to="">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-300">Social media</div>
                        <div className="flex justify-start space-x-2">
                            <Link to="" title="Facebook" className="no-underline flex items-center p-1">
                                <FaFacebook className='h-10 w-10 text-teal-600' />
                            </Link>
                            <Link to="" title="Twitter" className="no-underline flex items-center p-1">
                                <FaTwitter className='h-10 w-10 text-teal-600' />
                            </Link>
                            <Link to="" title="Instagram" className="no-underline flex items-center p-1">
                                <FaInstagram className='h-10 w-10 text-teal-600' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-300">© 2022 Wildlia Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;