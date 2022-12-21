import React from 'react';


const Banner = () => {
    return (
        <div style={{
            backgroundImage: "url(https://photographylife.com/wp-content/uploads/2019/04/B07.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'auto',
            height: '100vh',
            filter: "brightness(80%)"
        }}
            className='flex items-center justify-center'>
            <div>
                <h1 className='text-white font-serif text-5xl font-semibold tracking-wider'>Where will you go next ?</h1>
                <p className='text-gray-100 text-xl tracking-tight font-serif mt-3'>Welcome to Wildlia, a tour guidance website carefully crafted for travelers and adventurers. <br /> Pack your bags, hit the road and don't forget to write down all of your amazing stories!</p>
                <button className='font-serif px-5 py-3 text-gray-100 text-xl font-medium bg-teal-700 hover:bg-teal-600 rounded mt-3'>Contact Me</button>
            </div>
        </div>
    );
};

export default Banner;