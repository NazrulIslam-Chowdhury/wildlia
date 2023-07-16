import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import { popular } from '../../Constant';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const Popular = () => {
    return (
        <div className='py-20 space-y-16'>
            <div className='flex flex-col gap-6 px-[8.5px]'>
                <h3 className='font1 text-white sm:text-6xl text-3xl font-bold'>Popular Activities</h3>
                <p className={`text-center `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias at porro excepturi neque deserunt.</p>
            </div>
            <div className='lg:pl-24 md:pl-20 pl-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[Pagination, Autoplay]}
                    className=""
                >
                    {
                        popular.map((p, idx) => (
                            <SwiperSlide key={idx} className=''>
                                <div className=' w-[350px] h-[550px] overflow-hidden relative '>
                                    <PhotoProvider>
                                        <PhotoView src={p.image}>
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                loading='lazy'
                                                className='w-full h-full hover:scale-125 duration-[2s] cursor-pointer absolute object-cover'
                                            />
                                        </PhotoView>
                                    </PhotoProvider>

                                    <div className='flex flex-col items-start absolute bottom-0 bg-teal-800 bg-opacity-[0.8] p-4'>
                                        <h1
                                            className='text-white text-3xl font-bold'>
                                            {p.title}</h1>
                                        <h3 className='flex gap-3 items-center text-white text-xl font-semibold'>
                                            {p.rating}
                                            <div className='flex gap-2 items-center'>
                                                <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                                <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                                <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                                <BsStarFill className='w-3 h-3 text-[#FFD700]' />
                                                <BsStarHalf className='w-3 h-3 text-[#FFD700]' />
                                            </div>
                                        </h3>
                                        <p className='text-left text-gray-300'>{p.detail}</p>
                                    </div>
                                    <div className='absolute top-2 right-2 bg-teal-800 bg bg-opacity-[0.7] py-3 px-6 rounded'>
                                        <h1 className='text-lg text-white font-semibold'>{p.price}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Popular;