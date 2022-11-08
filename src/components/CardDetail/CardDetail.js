import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import guidImg from '../../assets/20180906_223635.jpg';

const CardDetail = () => {
    const detail = useLoaderData();
    console.log(detail)
    const { img, title, price, service_duration, location_details
    } = detail;

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-7 sm:gap-y-8'>

            <div className=' grid-cols-1'>
                <div className="max-w-lg p-4 shadow-xl shadow-black bg-green-200 text-gray-900 rounded h-auto ">

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={img} alt="" className=" block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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
        </div>
    );
};

export default CardDetail;