
import React from 'react';
import './Banner.css';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';


const Banner = () => {
    return (

        <div>
            <CCarousel controls indicators>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>

                        <CImage className="d-block h-96  w-100  " src="https://upload.wikimedia.org/wikipedia/commons/2/23/Sundarban_Tiger.jpg" alt="slide 1" />

                    </div>
                </CCarouselItem>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>

                        <CImage className="carousel-img d-block h-96 w-100" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Bhawal_National_Park_02.jpg" alt="slide 2" />

                    </div>
                </CCarouselItem>
                <CCarouselItem className='h-96'>
                    <div className='carousel-img'>

                        <CImage className="carousel-img d-block h-96 w-100" src="https://www.lostwithpurpose.com/wp-content/uploads/2018/03/DSC04371.jpg" alt="slide 3" />

                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>

    );
};

export default Banner;