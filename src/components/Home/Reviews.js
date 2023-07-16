import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { reviews } from '../../Constant';
import bg from "../../assets/beach.jpg";
import { RiDoubleQuotesL } from 'react-icons/ri';

import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
    return (
        <div
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
                height: "auto"
            }}
        >
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper bg-teal-800 bg-opacity-[0.8] px-8 py-20 cursor-grab"
            >
                {
                    reviews.map((review, idx) => (
                        <SwiperSlide className='sm:px-52 px-0 py-28' key={idx}>
                            <div className='flex flex-col gap-7 items-center justify-center '>
                                <RiDoubleQuotesL className='w-20 h-20 text-amber-500' />
                                <div className='space-y-3'>
                                    <h1 className='sm:text-4xl text-2xl text-white font-bold'>{review.title}</h1>
                                    <p className='text-white italic text-center'>{review.detail.slice(0, 75)} <br />{review.detail.slice(76, 143)}</p>
                                </div>
                                <div className='space-y-3 flex flex-col items-center'>
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className='w-24 h-24 object-cover rounded-full'
                                    />
                                    <h3 className='text-white text-xl font-semibold'>{review.name}</h3>
                                    <p className='text-amber-500 text-lg'>{review.profession}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Reviews;