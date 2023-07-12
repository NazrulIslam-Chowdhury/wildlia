import React from 'react';
import { moreDestinations } from '../../Constant';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { BsStarFill, BsStarHalf } from "react-icons/bs";


const MoreDestination = () => {

    return (
        <div className='p-20 sm:space-y-20 space-y-16'>
            <div className='flex flex-col gap-6'>
                <h3 className='font1 text-white sm:text-6xl text-3xl font-bold'>Go Wild With</h3>
                <h1 className='text-white sm:text-7xl text-4xl font-extrabold'>More Destinations</h1>
                <p className={`text-center `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias at porro excepturi neque deserunt.</p>
            </div>
            <div className={`flex gap-10 flex-wrap justify-center `}>
                {
                    moreDestinations.map((destination, idx) => (
                        <div>
                            <div className='w-[350px] h-[350px] overflow-hidden relative '>
                                <PhotoProvider>
                                    <PhotoView src={destination.image}>
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            loading='lazy'
                                            className='w-full h-full hover:scale-125 duration-[2s] cursor-pointer absolute'
                                        />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className='flex flex-col items-start absolute bottom-0 bg-teal-800 bg-opacity-[0.7] p-4'>
                                    <h1
                                        className='text-white text-3xl font-bold'>
                                        {destination.name}</h1>
                                    <h3 className='flex gap-3 items-center text-white text-xl font-semibold'>
                                        {destination.star}
                                        <div className='flex gap-2 items-center'>
                                            <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                            <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                            <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                            <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                            <BsStarHalf className='w-3 h-3 text-[#FFD700]' />
                                        </div>
                                    </h3>
                                    <p className='text-left text-gray-300'>{destination.detail}</p>
                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoreDestination;