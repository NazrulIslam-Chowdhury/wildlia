import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import '../../App.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const logOutOnClick = () => {
        logOut()
            .then(() => {
                toast.success('Log-out successfully')
            })
            .catch(error => {
                toast.error(error)
            })
    }
    return (
        <div>
            <div className="navbar bg-gradient-to-t from-teal-800 to-black">
                <div className="navbar-start">
                    <div className="dropdown w-auto">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-t from-teal-800 to-black rounded-box w-auto">
                            <li><Link className='px-4 
                               py-2 text-gray-300 text-lg hover:bg-teal-500 hover:text-black font' to='/' active>
                                Home
                            </Link></li>
                            <li><Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black' to='/blog' active>Blog</Link></li>
                            <li><Link className='py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black font' to='/services' active>Services</Link></li>
                            <li>
                                {
                                    user?.uid &&
                                    <>
                                        <Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black' to='/my-reviews' active>My Reviews</Link>

                                        <Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black ' to='/add-service' active>Add Service</Link>
                                    </>
                                }
                            </li>
                            <li>
                                <div className='flex items-center flex-wrap'>
                                    <img src={user?.photoURL} className='h-10 font w-10 rounded-full' alt="" />
                                    <div className=' text-gray-300 font'>
                                        <p>{user?.displayName}</p>
                                        <p className='mr-1'>{user?.email}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className='flex items-center'>
                        <img className='w-20 h-20 rounded-full' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='px-4 
                               py-2 text-gray-300 text-lg hover:bg-teal-500 hover:text-black font' to='/' active>
                            Home
                        </Link></li>
                        <li><Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black' to='/blog' active>Blog</Link></li>
                        <li><Link className='py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black font' to='/services' active>Services</Link></li>
                        <li>
                            {
                                user?.uid &&
                                <>
                                    <Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black' to='/my-reviews' active>My Reviews</Link>

                                    <Link className=' font py-2 px-4 text-gray-300 text-lg hover:bg-teal-500 hover:text-black ' to='/add-service' active>Add Service</Link>
                                </>
                            }
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='hidden items-center lg:flex md:flex mr-4'>
                        <img src={user?.photoURL} className='h-10 font w-10 rounded-full' alt="" />
                        <div className='ml-2 text-gray-300 font'>
                            <p className='lg:block md:block sm:hidden'>{user?.displayName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    {
                        user?.uid ?
                            <button onClick={logOutOnClick} className="bg-teal-800  hover:bg-teal-500 hover:text-black py-2 font px-4 text-gray-300 text-lg rounded">Log Out</button>
                            :
                            <button className="bg-teal-800  hover:bg-teal-500 hover:text-black py-2 rounded "><Link className='font px-4 text-gray-300 text-lg' to='/login' active>
                                Login
                            </Link></button>

                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;