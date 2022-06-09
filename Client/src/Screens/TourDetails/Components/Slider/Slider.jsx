import React from 'react'
import { Carousel } from "react-responsive-carousel"

import Slider1 from "../../../../Assets/slider1.jpg"
import Slider2 from "../../../../Assets/slider2.jpg"
import Slider3 from "../../../../Assets/slider3.jpg"

import "./Slider.scss"

const Slider = () => {
    return (
        <>
            <div className="slider_container">
                <div className="backcol"></div>
                <div className="backcol2"></div>
                <div className="detail">
                    The Greek Island : Mykonos , Santorinin & Crete
                </div>
                <Carousel autoPlay showThumbs={false}>
                    <div>
                        <img src={Slider1} />
                    </div>
                    <div>
                        <img src={Slider2} />
                    </div>
                    <div>
                        <img src={Slider3} />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Slider