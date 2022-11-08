
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './banner/Banner';
import LimitedServices from './limitedServices/LimitedServices';
import MiddleSection from './middleSection/MiddleSection';

const Home = () => {
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