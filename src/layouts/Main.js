import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

import Navbar from '../components/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-24'>
                <Outlet></Outlet>
            </div>
            <div className='mt-8'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;