import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    // const { loading } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [allService, setAllService] = useState([]);
    useTitle('Services');
    useEffect(() => {
        fetch('https://wildlia-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setAllService(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-700 font-bold"></div></div>
    }
    return (
        <div className='flex gap-10 flex-wrap justify-center py-20'>
            {
                allService.map(srv =>
                    <div key={srv._id}>
                        <div className='w-[350px] h-[400px] border-[1px] border-solid border-gray-500 overflow-hidden relative '>
                            <PhotoProvider>
                                <PhotoView src={srv.img}>
                                    <img
                                        src={srv.img}
                                        alt={srv.title}
                                        loading='lazy'
                                        className='w-full h-full hover:scale-125 duration-[2s] cursor-pointer absolute object-cover'
                                    />
                                </PhotoView>
                            </PhotoProvider>

                            <div className='flex flex-col items-start absolute bottom-0 bg-teal-800 bg-opacity-[0.7] w-full p-4'>
                                <h1
                                    className='text-white text-3xl font-bold'>
                                    {srv.title}</h1>

                                <p className="leading-snug text-gray-300 font-semibold text-start">{srv.location_details.slice(0, 100) + '...'} <span><Link to={`/detail/${srv._id}`} className='no-underline text-gray-300'>See More</Link></span></p>
                                <p className='text-white text-xl font-semibold'>price: ${srv.price}</p>
                            </div>

                        </div>
                    </div>



                    // <div key={srv._id} className="max-w-lg p-4 shadow-xl shadow-black bg-teal-700 rounded">
                    //     <div className="flex justify-between pb-4 border-bottom">
                    //         <Link className='no-underline text-gray-300 font font-semibold' to={`/detail/${srv._id}`}>See Detail</Link>
                    //     </div>
                    //     <div className="space-y-4">
                    //         <div className="space-y-2">
                    //             <PhotoProvider>
                    //                 <PhotoView src={srv.img}>
                    //                     <img src={srv.img} alt="" className=" block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    //                 </PhotoView>
                    //             </PhotoProvider>
                    //             <div className="flex items-center text-xs font text-gray-300">
                    //                 <span>6 min ago</span>
                    //             </div>
                    //         </div>
                    //         <div className="space-y-2">

                    //             <h3 className="text-2xl font-semibold text-gray-300 font">{srv.title}

                    //             </h3>

                    //             <p className="leading-snug text-gray-300 font font-semibold">{srv.location_details.slice(0, 100) + '..'}<span><Link to={`/detail/${srv._id}`} className='no-underline text-green-900'>See More</Link></span></p>
                    //             <p className='font text-gray-300'>price: ${srv.price}</p>
                    //         </div>
                    //     </div>
                    // </div>
                )
            }
        </div>
    );
};

export default Services;