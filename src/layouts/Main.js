import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-5 mx-4'>
                <Outlet></Outlet>
            </div>
            <div className='mt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;