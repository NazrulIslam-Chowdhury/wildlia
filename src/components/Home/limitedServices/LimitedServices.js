import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const LimitedServices = () => {
    const [limitedServices, setLimitedServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://wildlia-server.vercel.app/services-limit')
            .then(res => res.json())
            .then(data => {
                setLimitedServices(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-700 font-bold"></div></div>
    }
    return (
        <div className='space-y-10'>
            <div className='flex flex-col gap-6'>
                <h3 className='font1 text-white sm:text-6xl text-3xl font-bold'>Connect With</h3>
                <h1 className='text-white sm:text-7xl text-4xl font-extrabold'>Mother Nature</h1>
                <p className='text-center px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestias at porro excepturi neque deserunt.</p>
            </div>

            <div className='flex gap-10 flex-wrap justify-center'>
                {
                    limitedServices.map((service) =>
                        <div key={service._id}>
                            <div className='w-[350px] h-[400px] border-[1px] border-solid border-gray-500 overflow-hidden relative '>
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            loading='lazy'
                                            className='w-full h-full hover:scale-125 duration-[2s] cursor-pointer absolute object-cover'
                                        />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className='flex flex-col items-start absolute bottom-0 bg-teal-800 bg-opacity-[0.7] p-4'>
                                    <h1
                                        className='text-white text-3xl font-bold'>
                                        {service.title}</h1>

                                    <p className="leading-snug text-gray-300 font-semibold text-start">{service.location_details.slice(0, 100) + '...'} <span><Link to={`/detail/${service._id}`} className='no-underline text-gray-300'>See More</Link></span></p>
                                    <p className='text-white text-xl font-semibold'>price: ${service.price}</p>
                                </div>

                            </div>
                        </div>


                        // <div key={service._id} className="max-w-lg p-4 shadow-xl shadow-black bg-teal-700 text-gray-900 rounded">
                        //     <div className="flex justify-between pb-4 border-bottom">
                        //         <Link className='no-underline text-gray-300 font' to={`/detail/${service._id}`}>See Detail</Link>
                        //     </div>
                        //     <div className="space-y-4">
                        //         <div className="space-y-2 ">
                        //             <div className='w-[full] h-[288px] overflow-hidden'>
                        //                 <PhotoProvider>
                        //                     <PhotoView src={service.img}>
                        //                         <img src={service.img} alt="" className=" block object-cover w-full h-full transition-transform duration-[2s] hover:scale-125 rounded-md dark:bg-gray-500 cursor-pointer " />
                        //                     </PhotoView>
                        //                 </PhotoProvider>
                        //             </div>

                        //             <div className="flex items-center text-xs font text-gray-300">
                        //                 <span>6 min ago</span>
                        //             </div>
                        //         </div>
                        //         <div className="space-y-2">

                        //             <h3 className="text-2xl font-semibold text-gray-300 font">{service.title}

                        //             </h3>

                        //             <p className="leading-snug text-gray-300 font-semibold font">{service.location_details.slice(0, 100) + '...'} <span><Link to={`/detail/${service._id}`} className='no-underline text-green-900'>See More</Link></span></p>
                        //             <p className='font text-gray-300'>price: ${service.price}</p>
                        //         </div>
                        //     </div>
                        // </div>

                    )
                }
            </div>
        </div>
    );
};

export default LimitedServices;