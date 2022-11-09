
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Banner from './banner/Banner';
import LimitedServices from './limitedServices/LimitedServices';
import MiddleSection from './middleSection/MiddleSection';

const Home = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Home');

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600 font-bold ml-96"></div>
    }
    return (
        <div className='text-center'>
            <Banner></Banner>
            <div className='mt-5'>
                <LimitedServices></LimitedServices>
            </div>
            <button className='bg-green-400 hover:bg-green-600 rounded px-5 py-2 mt-5 shadow-lg shadow-black'>
                <Link to='/services' className='no-underline text-black text-lg font-bold'>See All</Link>
            </button>
            <div className='mt-5'>
                <MiddleSection></MiddleSection>
            </div>
        </div>
    );
};

export default Home;