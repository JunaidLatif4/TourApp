import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { BsFillTelephoneFill } from "react-icons/bs"
import { HiLockClosed } from "react-icons/hi"

import Partner from "../../Components/Partner/Partner"
import Pay from '../../Components/Pay/Pay'

import Logo from "../../Assets/logo.png"
import Img1 from "../../Assets/background.jpg"

import { AddBookingAPI } from '../../API/Booking';
import { ToastContainer, toast } from 'react-toastify';

import "./Checkout.scss"


const steps = [
    'Accommodation',
    'Your details',
    'Review & pay',
    'Confirmation'
];

const Accommodation = (props) => {
    return (
        <>
            <div className="accommodation">
                <div className="options">
                    <div className="option" onClick={() => props.enteringAccommodation(true)}>
                        <input type="radio" checked={props.enteredData.accommodation == true ? true : false} name='accommodation' />
                        <span>
                            I would like Craicin's to book my accommodation.We'll reserve your room(s) with one of our preferred accommodation suppliers and you'll pay them directly when you check-in.
                            <br />
                            <br />
                            If it's important for you to know where you're going to be staying in advance, or if you want to stay in a specific Hotel/B&B, we recommend that you select the option below to book your own accommodation.
                        </span>
                    </div>
                    <div className="option" onClick={() => props.enteringAccommodation(false)}>
                        <input type="radio" name='accommodation' checked={props.enteredData.accommodation == false ? true : false} />
                        <span>
                            I have booked my own accommodation Check this box if you've arranged your own accommodation. Please ensure your accommodation is within 2km of the town centre, otherwise we may not be able to drop you off or pick you up there.
                        </span>
                    </div>

                    <div className="own_detail">
                        <p className="detail">Please enter the name, address, and postcode of the accommodation you’re arranging for your tour. If you have questions, please get in touch with rooms@craicin.com</p>
                        <p className='doted'></p>
                        <div className="info">
                            <p> Accommodation information* </p>
                            <textarea name="accommodationInfo" value={props.enteredData.accommodationInfo} id="info" cols="30" rows="10" onChange={props.enteringData}></textarea>
                            <p className='doted'></p>
                        </div>
                    </div>

                </div>
                <div className="break"></div>
                <div className="btn">
                    <button onClick={() => props.changeStep(steps[1])}> Continue </button>
                </div>
            </div>
        </>
    )
}

const YourDetails = (props) => {
    return (
        <>
            <div className="your_details">
                <div className="user_form">
                    <div className="line">
                        <div className="input_box">
                            <p> First name <span>*</span> </p>
                            <input type="text" name="firstName" value={props.enteredData.firstName} onChange={props.enteringData} id="" />
                        </div>
                        <div className="input_box">
                            <p> Last name <span>*</span> </p>
                            <input type="text" name="lastName" value={props.enteredData.lastName} onChange={props.enteringData} id="" />
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Email <span>*</span> </p>
                            <input type="text" name="email" value={props.enteredData.email} onChange={props.enteringData} id="" />
                        </div>
                        <div className="input_box">
                            <p> Confirm email <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Country <span>*</span> </p>
                            <div className="select_box">
                                <div className="select">
                                    <select name="country" value={props.enteredData.country} onChange={props.enteringData} id="country">
                                        <option value="pakistan">Pakistan</option>
                                        <option value="india">India</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> Mobile / Telephone* <span>*</span> </p>
                            <input type="text" name="phone" value={props.enteredData.phone} onChange={props.enteringData} id="" />
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="user_form">
                    <div className="heading">
                        Passenger details
                    </div>
                    <div className="check">
                        <input type="checkbox" /> Check this box if you’re travelling on this tour.
                    </div>
                    <div className="adult">
                        Adults
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> First name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Last name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="heading">
                        Children
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> First name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Last name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Age <span>*</span>  </p>
                            <div className="select_box">
                                <div className="select">
                                    <select name="country" id="country">
                                        <option value="0">--</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> First name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Last name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Age <span>*</span>  </p>
                            <div className="select_box">
                                <div className="select">
                                    <select name="country" id="country">
                                        <option value="0">--</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="input_box">
                            <p> First name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Last name <span>*</span> </p>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="input_box">
                            <p> Age <span>*</span>  </p>
                            <div className="select_box">
                                <div className="select">
                                    <select name="country" id="country">
                                        <option value="0">--</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="break"></div>
                <div className="user_form">
                    <div className="line">
                        <div className="input_box">
                            <p> Please let us know if you have a wheelchair, mobility requirements, dietary needs, or whether your friend booked a tour separately from you. </p>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="policy">
                        <input type="checkbox" /> Yes, I'd like to receive marketing communications and emails with <span> travel tips </span> and <span> updates. </span> I know I can unsubscribe easily at any time. <a href="#"> Privacy Policy. </a>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={props.pay}> Continue to review & pay </button>
                </div>
            </div>
        </>
    )
}



const Checkout = () => {
    let history = useHistory()

    let formData = history.location.state.formData

    const [current, setCurrent] = useState("Accommodation")
    const [enteredData, setEnteredData] = useState({
        accommodation: null,
        accommodationInfo: "",
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        phone: "",


    })

    const changeStep = (step) => {
        setCurrent(step)
    }

    const enteringData = (event) => {
        let { name, value } = event.target
        setEnteredData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const enteringAccommodation = (value) => {
        setEnteredData((preValue) => {
            return {
                ...preValue,
                accommodation: value
            }
        })
    }


    const stepperComponents = (currentStep) => {
        switch (currentStep) {
            case "Accommodation":
                return <Accommodation enteredData={enteredData} enteringData={enteringData} enteringAccommodation={enteringAccommodation} changeStep={changeStep} />
                break;
            case "Your details":
                return <YourDetails enteredData={enteredData} enteringData={enteringData} changeStep={changeStep} pay={pay} />
                break;
            default:
                return <Accommodation />
                break;
        }
    }

    const pay = async () => {
        let data = {
            ...formData,
            ...enteredData,
            tour: "627abfb017bcdca0b3651281"
        }
        let res = await AddBookingAPI(data)
        if (res.error != null) {
            toast.error(res.error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } else {
            toast.success("Booking Success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }
        return (
            <>
                <div className="checkout_container">
                    <div>
                        <div className="checkout_header">
                            <div className="secure"> <HiLockClosed /> Secure Checkout </div>
                            <img onClick={() => history.push("/")} src={Logo} alt="Error" />
                            <div className="phone"> <BsFillTelephoneFill /> +44(0) 131 226 3133 </div>
                        </div>
                        <div className="brack"></div>
                    </div>

                    <div className="checkout_box">
                        <Stepper activeStep={current == steps[0] ? "0" : current == steps[1] ? "1" : null} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div className="checkouts">
                            <div className="checkout_box">
                                <div className="title">
                                    {current}
                                </div>
                                <div className="step">
                                    {
                                        stepperComponents(current)
                                    }


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