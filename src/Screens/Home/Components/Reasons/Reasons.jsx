import React from 'react'

import Car from "../../../../Assets/car.png"
import Badge from "../../../../Assets/badge.png"
import Calender from "../../../../Assets/calender.png"
import Wave from "../../../../Assets/wave.png"

import "./Reasons.scss"

const Reasons = () => {
    return (
        <>
            <div className="reasons_container">
                <div className="title">
                    <span> 4 </span>reasons to choose Rabbie's
                </div>
                <div className="card_box">
                    <div className="card">
                        <img src={Car} alt="Error" />
                        <p> Travel the local way on small group tours of 16 people or fewer </p>
                    </div>
                    <div className="card">
                        <img src={Badge} alt="Error" />
                        <p> You'll have a guaranteed experience, or your money back</p>
                    </div>
                    <div className="card">
                        <img src={Calender} alt="Error" />
                        <p> Guaranteed departures: you book, you go</p>
                    </div>
                    <div className="card">
                        <img src={Wave} alt="Error" />
                        <p> Our eco-friendly tours support local communities</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reasons