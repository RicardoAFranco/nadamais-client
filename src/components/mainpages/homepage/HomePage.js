import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Products from '../products/Products';

import "./HomePage.css"

import img1 from "./images/img4.jpg.jpg"
import img2 from "./images/j.jpg"
import img4 from "./images/ab3.jpeg"

function HomePage() {
    return (
        <div className='imgCar'>
                <Carousel
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={true}
                showArrows={false}
                showStatus={false}
                
                >
                <div>
                    <img src={img1} height="700px" width="500px" />
                </div>
                <div>
                    <img src={img2} height="700px" width="500px" />
                    
                </div>
                <div>
                    <img src={img4} height="700px" width="500px" />
                </div>
            </Carousel>
            <Products/>
        </div>
    )
}

export default HomePage
