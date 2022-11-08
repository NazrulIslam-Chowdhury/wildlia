
import React from 'react';
import Banner from './banner/Banner';
import LimitedServices from './limitedServices/LimitedServices';

const Home = () => {
    return (
        <div className='text-center'>
            <Banner></Banner>
            <div className='mt-5'>
                <LimitedServices></LimitedServices>
            </div>
            <button className='bg-green-400 hover:bg-green-600 px-5 py-2 text-lg font-bold mt-5 rounded shadow-xl shadow-black'>See All</button>
        </div>
    );
};

export default Home;