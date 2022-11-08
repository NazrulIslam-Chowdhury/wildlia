import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-green-200 dark:text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link to='/' className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-green-400">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-400">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='text-black' to="">Features</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">Integrations</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">Pricing</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-400">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='text-black' to="">Privacy</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-400">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link className='text-black' to="">Public API</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">Documentation</Link>
                            </li>
                            <li>
                                <Link className='text-black' to="">Guides</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-gray-400">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <Link to="" title="Facebook" className="flex items-center p-1">
                                <FaFacebook className='h-16 w-16 text-green-400' />
                            </Link>
                            <Link to="" title="Twitter" className="flex items-center p-1">
                                <FaTwitter className='h-16 w-16 text-green-400' />
                            </Link>
                            <Link to="" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='h-16 w-16 text-green-400' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Wildlia Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;