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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-4'>
            {
                limitedServices.map(service =>
                    <div key={service._id} className="max-w-lg p-4 shadow-xl shadow-black bg-teal-700 text-gray-900 rounded">
                        <div className="flex justify-between pb-4 border-bottom">
                            <Link className='no-underline text-gray-300 font' to={`/detail/${service._id}`}>See Detail</Link>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img src={service.img} alt="" className=" block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    </PhotoView>
                                </PhotoProvider>

                                <div className="flex items-center text-xs font text-gray-300">
                                    <span>6 min ago</span>
                                </div>
                            </div>
                            <div className="space-y-2">

                                <h3 className="text-2xl font-semibold text-gray-300 font">{service.title}

                                </h3>

                                <p className="leading-snug text-gray-300 font-semibold font">{service.location_details.slice(0, 100) + '...'} <span><Link to={`/detail/${service._id}`} className='no-underline text-green-900'>See More</Link></span></p>
                                <p className='font text-gray-300'>price: ${service.price}</p>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default LimitedServices;