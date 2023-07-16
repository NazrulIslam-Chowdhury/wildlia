import React from 'react';
import bg from "../../assets/hawaii.jpg";
import { Parallax } from 'react-parallax';

const Video = () => {
    return (
        <div className='py-20 space-y-16'>
            <div className='grid sm:grid-cols-2 items-center grid-rows-1 gap-10'>
                <div className='grid-cols-1'>
                    <h1 className='font1 text-white sm:text-6xl text-3xl font-bold'>Video Tour</h1>
                    <p className=' text-white'>Adventure is out there</p>
                </div>
                <p className='text-start grid-cols-1 px-[15%] text-lg'>We offer our clients the most complete and unique open air adventure thrills they have ever experienced complete with unforgettable moments. Your safety is our most important mission and for this reason.</p>
            </div>
            <Parallax
                bgImage={bg}
                strength={600}
                className='flex items-center justify-center py-36'
            >
                <iframe width="1200" height="600" src="https://www.youtube.com/embed/cYOP2qzv8FA?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowFullScreen
                ></iframe>
            </Parallax>
        </div>
    );
};

export default Video;