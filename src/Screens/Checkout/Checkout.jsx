import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { BsFillTelephoneFill } from "react-icons/bs"
import { HiLockClosed } from "react-icons/hi"

import Partner from "../Home/Components/Partner/Partner"
import Pay from '../Home/Components/Pay/Pay'

import Logo from "../../Assets/logo.png"
import Img1 from "../../Assets/background.jpg"

import "./Checkout.scss"

const Checkout = () => {

    const steps = [
        'Accommodation',
        'Your details',
        'Review & pay',
        'Confirmation'
    ];


    return (
        <>
            <div className="checkout_container">
                <div>
                    <div className="checkout_header">
                        <div className="secure"> <HiLockClosed /> Secure Checkout </div>
                        <img src={Logo} alt="Error" />
                        <div className="phone"> <BsFillTelephoneFill /> +44(0) 131 226 3133 </div>
                    </div>
                    <div className="brack"></div>
                </div>

                <div className="checkout_box">
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className="checkouts">
                        <div className="accommodation_box">
                            <div className="title">
                                your accommodation
                            </div>
                            <div className="accommodation">
                                <div className="content">
                                    <div className="options">
                                        <div className="option">
                                            <input type="radio" name='accommodation' value={"client"} />
                                            <span>
                                                I would like Rabbie's to book my accommodation.We'll reserve your room(s) with one of our preferred accommodation suppliers and you'll pay them directly when you check-in.
                                                <br />
                                                <br />
                                                If it's important for you to know where you're going to be staying in advance, or if you want to stay in a specific Hotel/B&B, we recommend that you select the option below to book your own accommodation.
                                            </span>
                                        </div>
                                        <div className="option">
                                            <input type="radio" name='accommodation' value={"own"} />
                                            <span>
                                                I have booked my own accommodation Check this box if you've arranged your own accommodation. Please ensure your accommodation is within 2km of the town centre, otherwise we may not be able to drop you off or pick you up there.
                                            </span>
                                        </div>

<div className="own_detail">
    <p className="detail">Please enter the name, address, and postcode of the accommodation you’re arranging for your tour. If you have questions, please get in touch with rooms@rabbies.com</p>
    <p className='doted'></p>
    <div className="info">
        <p> Accommodation information* </p>
        <textarea name="info" id="info" cols="30" rows="10"></textarea>
    <p className='doted'></p>
    </div>
</div>

                                    </div>
                                    <div className="break"></div>
                                    <div className="btn">
                                        <button> Continue </button>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="heading">
                                        Your Tour
                                    </div>
                                    <img src={Img1} alt="Error" />
                                    <div className="location">
                                        The Isle of Skye - 3 day tour
                                    </div>
                                    <div className="start">
                                        <span> Starts :  </span> Glasgow Buchanan Bus Station Pick Up | Wed 14th September 2022 09:00
                                    </div>
                                    <div className="passengers">
                                        <span> Passengers :  </span> 1 Adult, 1 Senior, 2 Students, 2 Childre
                                    </div>
                                    <div className="cost">
                                        <span> Total Cost :  </span>  £1444.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Partner />
                <Pay />
            </div>
        </>
    )
}

export default Checkout