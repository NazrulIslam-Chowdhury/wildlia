import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import guidImg from '../../assets/20180906_223635.jpg';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const CardDetail = () => {
    const { user, loading } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const detail = useLoaderData();

    const { img, title, price, service_duration, location_details
    } = detail;

    useTitle('Detail');

    useEffect(() => {
        fetch('https://wildlia-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [])

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-7 sm:gap-y-8'>

                <div className=' grid-cols-1'>
                    <div className="max-w-lg p-4 shadow-xl shadow-black bg-teal-700 rounded h-auto ">

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <PhotoProvider>
                                    <PhotoView src={img}>
                                        <img src={img} alt="" className=" block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    </PhotoView>
                                </PhotoProvider>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold font text-gray-300">{title}
                                </h3>
                                <p className='font text-gray-300'><span>Service Duration:</span>{service_duration}</p>
                                <p className='text-gray-300 font'><span>Price: $</span>{price}</p>
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
                                <p className='text-lg font text-gray-300'>Nazrul Islam Chowdhury</p>
                                <small className='text-gray-300 font'>Professional tour guide</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 col-span-2'>
                    <div>
                        <p className='font text-gray-300'>{
                            location_details}</p>
                    </div>
                </div>

                {
                    user?.uid ?
                        <button className="bg-teal-800  hover:bg-teal-700 py-2 rounded "><Link className='no-underline font-semibold font px-4 text-gray-300 text-lg' to='/add-review' active>
                            Add a review
                        </Link></button>
                        :
                        <button className="bg-teal-800 hover:bg-teal-700 font py-2 rounded "><Link className='no-underline font-semibold px-4 text-gray-300 text-lg' to='/add-review' active>
                            Login to add a review
                        </Link></button>
                }

            </div>

            {
                user?.uid ?
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-4 rounded mt-8'>
                        {
                            reviews.map(review =>
                                <div key={review._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100 shadow-md shadow-black">
                                    <div className="flex justify-between p-4">
                                        <div className="flex space-x-4">
                                            <div>
                                                <img src={review.userImg} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray font">{review.name}</h4>
                                                <span className="text-xs text-gray-300 font">{review.email}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                            </svg>
                                            <span className="text-xl font-bold">4.5</span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm text-gray-300 font">
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    :
                    <>
                    </>
            }

        </div>
    );
};

export default CardDetail;