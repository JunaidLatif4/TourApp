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

                <Carousel showThumbs={false}>
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
                <div className="detail">
                    Venture through breath-taking landscapes, quaint villages, and epic castles on this journey to the ‘Misty Isle’.
                </div>
            </div>
        </>
    )
}

export default Slider