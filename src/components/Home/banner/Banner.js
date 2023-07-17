import React from 'react';
import { banner, features } from '../../../Constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';



import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div className='relative'>
            <Swiper
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper relative"
            >
                {
                    banner.map((b, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={b.image}
                                alt={b.title}
                                loading='lazy'
                                className='w-[100vw] h-[100vh] object-cover brightness-[0.60]'
                            />
                            <div className='absolute sm:bottom-80 sm:left-60 left-0 bottom-96 space-y-3'>
                                <h3 className='uppercase text-sky-400 text-2xl font-semibold'>{b['semi-title']}</h3>
                                <h1 className='uppercase sm:text-6xl text-5xl text-center text-white font-extrabold px-[10%]'>{b.title}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='flex flex-col gap-16 fixed sm:top-64 top-80 sm:right-10 right-2 z-10'>
                <FaFacebookF className='w-5 h-5 text-white cursor-pointer' />
                <FaTwitter className='w-5 h-5 text-white cursor-pointer' />
                <FaInstagram className='w-5 h-5 text-white cursor-pointer' />
                <FaTiktok className='w-5 h-5 text-white cursor-pointer' />
            </div>

            <div className='lg:flex-row md:flex-col flex-col flex items-center gap-6 sm:px-20 px-10 py-20'>
                {
                    features.map((feature, idx) => (
                        <div className='bg-white bg-opacity-[0.7] p-5 space-y-4 rounded' key={idx}>
                            <img
                                src={feature.icon}
                                alt={feature.name}
                                className='w-20 h-20'
                            />
                            <h1 className='text-start text-xl text-black font-bold'>{feature.name}</h1>
                            <p className='text-start text-gray-600'>{feature.detail}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Banner;