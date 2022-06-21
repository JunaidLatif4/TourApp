import React from 'react'
import { Carousel } from "react-responsive-carousel"

import Slider1 from "../../../../Assets/slider1.jpg"
import Slider2 from "../../../../Assets/slider2.jpg"
import Slider3 from "../../../../Assets/slider3.jpg"

import "./Slider.scss"

const Slider = (props) => {
    return (
        <>
            <div className="slider_container">
                <div className="backcol"></div>
                <div className="backcol2"></div>
                <div className="detail">
                    The Greek Island : Mykonos , Santorinin & Crete
                </div>
                <div className="slider_box">
                    <Carousel autoPlay showThumbs={false}>
                        <div>
                            <img src={props.data.img3.public} />
                        </div>
                        <div>
                            <img src={props.data.img2.public} />
                        </div>
                        <div>
                            <img src={props.data.img1.public} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Slider