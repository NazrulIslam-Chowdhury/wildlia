import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signInImg from '../../assets/login.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUserWithEmailAndPass, createUserWithGoogle } = useContext(AuthContext);
    const { error, setError } = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register');

    const from = location.state?.from?.pathname || '/'

    const handleSignUpOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const url = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        if (confirmPass !== password) {
            toast.error('Password did not match');
            return;
        }
        console.log(name, url, email, password);
        createUserWithEmailAndPass(email, password, name, url)
            .then(result => {
                const user = result.user;
                toast.success('Sign-up successful');
                navigate(from, { replace: true });
                form.reset();
            })
            .then(error => {
                setError(error.message);
                toast.error(error);
                console.error(error.message);

            })
    }

    const createUserWithGoogleOnClick = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('Sign-up successful');
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
                toast.error(error);
            })
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start mx-4'>
            <div className='col-span-2'>
                <img className='w-11/12 h-4/5' src={signInImg} alt="" />
            </div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-teal-700 mb-96 mt-20">
                <h1 className="text-2xl font-bold text-center text-gray-300 font">Register</h1>
                <form onSubmit={handleSignUpOnSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Name</label>
                        <input type="text" name="name" placeholder="name" className="w-full px-4 py-3 rounded-md  text-black " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Photo URL</label>
                        <input type="text" name="photoURL" placeholder="url" className="w-full px-4 py-3 rounded-md  text-black " />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Email</label>
                        <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md  text-black " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  text-gray-900 " required />

                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-gray-300 font">Confirm Password</label>
                        <input type="password" name="confirm" placeholder="confirm password" className="w-full px-4 py-3 rounded-md  text-gray-900 " required />

                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-lg font-bold text-gray-300 bg-teal-8s00 hover:bg-teal-600 font">Sign in</button>
                    <Toaster />
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm font-semibold text-gray-300 font">Register with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle onClick={createUserWithGoogleOnClick} />
                    </button>
                    <button aria-label="Log in with Facebook" className="p-3 rounded-sm">
                        <FaFacebook />
                    </button>
                </div>
                <p className='text-2xl text-red-900 font-bold'>{error}</p>
                <p className="text-xs font-bold text-center sm:px-6 text-gray-300 font">Already have an account ?
                    <Link to='/login' className="no-underline text-green-900 text-xl font-bold font"> Login Now</Link>
                </p>
            </div>

        </div>
    );
};

export default Register;