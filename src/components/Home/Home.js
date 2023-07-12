
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Banner from './banner/Banner';
import LimitedServices from './limitedServices/LimitedServices';
import MiddleSection from './middleSection/MiddleSection';
import MoreDestination from './MoreDestination';
import Reviews from './Reviews';

const Home = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Home');

    if (loading) {
        return <div className='flex justify-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-teal-700 font-bold"></div></div>
    }
    return (
        <div className='text-center'>
            <Banner></Banner>
            <div className='mt-10'>
                <LimitedServices></LimitedServices>
            </div>
            <button className='bg-teal-800 hover:bg-teal-700 rounded px-7 py-2 mt-10 shadow-lg shadow-black'>
                <Link to='/services' className='no-underline hover:text-gray-200 text-gray-200 text-lg font-semibold font'>See All</Link>
            </button>
            <div className='mt-10'>
                <MiddleSection></MiddleSection>
            </div>
            <div>
                <MoreDestination />
            </div>
            <div>
                <Reviews />
            </div>
        </div>
    );
};

export default Home;