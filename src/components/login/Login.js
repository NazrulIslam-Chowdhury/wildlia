import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { logIn, createUserWithGoogle } = useContext(AuthContext);
    const { error, setError } = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/'

    const handleLoginOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login successfully');
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                toast.error(error);
            })
    }

    const loginWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('Login successfully');
                navigate(from, { replace: true });
                // console.log(user);
            })
            .catch(error => {
                setError(error.message);
                toast.error(error);
            })
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start mx-4'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-teal-700 mb-96 mt-20">
                <h1 className="text-2xl font-bold text-center font text-gray-300">Login</h1>
                <form onSubmit={handleLoginOnSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Email</label>
                        <input type="email" name="email" placeholder="email" className="bg-gray-300 w-full px-4 py-3 rounded-md  text-gray-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Password</label>
                        <input type="password" name="password" placeholder="Password" className="bg-gray-300 w-full px-4 py-3 rounded-md  text-gray-600 " required />
                        <div className="flex justify-end text-xs text-gray-300">
                            <Link className='no-underline font' to=''>Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-lg font-bold text-gray-300 bg-teal-800 hover:bg-teal-600 font">Sign in</button>
                    <Toaster />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700">{error}</div>
                    <p className="px-3 text-sm font-semibold text-gray-300 font">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle onClick={loginWithGoogle} />
                    </button>
                    <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                        <FaFacebook />
                    </button>
                </div>
                <p className='text-2xl text-red-900 font-bold'></p>
                <p className="text-xs font-bold font text-center sm:px-6 text-gray-300">Don't have an account ?
                    <Link to='/register' className="no-underline text-green-900 font-bold font text-base"> Register Now</Link>
                </p>
            </div>
            <div className='col-span-2'>
                <img className='w-11/12 h-4/5' src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;