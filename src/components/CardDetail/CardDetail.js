import React, { useContext } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import guidImg from '../../assets/20180906_223635.jpg';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewSection from '../reviewSection/ReviewSection';

const CardDetail = () => {
    const { user, loading } = useContext(AuthContext);
    const detail = useLoaderData();
    const { img, title, price, service_duration, location_details
    } = detail;
    useTitle('Detail');

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-7 sm:gap-y-8'>

            <div className=' grid-cols-1'>
                <div className="max-w-lg p-4 shadow-xl shadow-black bg-green-200 text-gray-900 rounded h-auto ">

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt="" className=" block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-green-800">{title}
                            </h3>
                            <p><span>Service Duration:</span>{service_duration}</p>
                            <p><span>Price: $</span>{price}</p>
                            <div className='flex items-center'>
                                <FaStar className='text-yellow-600' />
                                <FaStar className='text-yellow-600' />
                                <FaStar className='text-yellow-600' />
                                <FaStar className='text-yellow-600' />
                                <FaStarHalf className='text-yellow-600' />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center'>
                        <img className='h-16 w-16 rounded-full' src={guidImg} alt="" />
                        <div className='ml-5'>
                            <p className='text-lg'>Nazrul Islam Chowdhury</p>
                            <small>Professional tour guide</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' col-span-2'>
                <div>
                    <p>{location_details
                    }</p>
                </div>
            </div>
            <ReviewSection></ReviewSection>
            {
                user?.uid ?
                    <button className="bg-green-400  hover:bg-green-600 py-2 rounded "><Link className='no-underline font-semibold px-4 text-black text-lg' to='/add-review' active>
                        Add a review
                    </Link></button>
                    :
                    <button className="bg-green-400  hover:bg-green-600 py-2 rounded "><Link className='no-underline font-semibold px-4 text-black text-lg' to='/login' active>
                        Login to add a review
                    </Link></button>
            }
        </div>
    );
};

export default CardDetail;