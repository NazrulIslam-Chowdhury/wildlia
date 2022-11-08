
import React from 'react';
import './Banner.css';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'


const Banner = () => {
    return (

        <div className=''>
            <CCarousel controls indicators>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>
                        <CImage className="d-block h-96  w-100  " src="https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg" alt="slide 1" />
                    </div>
                    <CCarouselCaption>
                        <div>
                            <h1 className='text-4xl font-bold text-green-400'> <span className='text-7xl'>W</span>ildlia</h1>
                            <p className='text-lg font-bold'>Run into the wild with <span>Wildlia.</span></p>
                            <p className='text-lg font-bold'>Run into the wild with <span className='font-bold text-5xl'>Nazrul.</span></p>
                            <p className='text-lg font-bold'>Your tour companion.</p>
                            <button type="button" className="px-8 py-3 font-semibold rounded bg-green-400 hover:bg-green-600">Contact Now</button>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>
                        <CImage className="carousel-img d-block h-96 w-100" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Bhawal_National_Park_02.jpg" alt="slide 2" />
                    </div>
                    <CCarouselCaption>
                        <div>
                            <h1 className='text-4xl font-bold text-green-600'> <span className='text-7xl'>W</span>ildlia</h1>
                            <p className='text-lg font-bold'>Run into the wild with <span>Wildlia.</span></p>
                            <p className='text-lg font-bold'>Run into the wild with <span className='font-bold text-5xl'>Nazrul.</span></p>
                            <p className='text-lg font-bold'>Your tour companion.</p>
                            <button type="button" className="px-8 py-3 font-semibold rounded bg-green-400 hover:bg-green-600">Contact Now</button>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>
                        <CImage className="carousel-img d-block h-96 w-100" src="https://www.lostwithpurpose.com/wp-content/uploads/2018/03/DSC04371.jpg" alt="slide 3" />
                    </div>
                    <CCarouselCaption>
                        <div>
                            <h1 className='text-4xl font-bold text-green-600'> <span className='text-7xl'>W</span>ildlia</h1>
                            <p className='text-lg font-bold'>Run into the wild with <span>Wildlia.</span></p>
                            <p className='text-lg font-bold'>Run into the wild with <span className='font-bold text-5xl'>Nazrul.</span></p>
                            <p className='text-lg font-bold'>Your tour companion.</p>
                            <button type="button" className="px-8 py-3 font-semibold rounded bg-green-400 hover:bg-green-600">Contact Now</button>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </div>

    );
};

export default Banner;