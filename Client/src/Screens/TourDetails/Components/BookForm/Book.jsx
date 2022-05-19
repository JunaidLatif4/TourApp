import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GiPerson } from "react-icons/gi"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiOutlineWechat } from 'react-icons/ai'

import "./Book.scss"

const Book = () => {
    let history = useHistory()

    const [enteredData, setEnteredData] = useState({
        adults: "0",
        children: "0",
        seniors: "0",
        students: "0",
        leavingOn: null

    })

    const enteringData = (event) => {
        let { name, value } = event.target

        setEnteredData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const checkOut = () => {
        history.push({ pathname: "/checkout", state: { formData: enteredData } })
    }
    return (
        <>
            <div className="book_container">
                <div className="title">
                    <span> Prices from </span>£179.00
                </div>
                <div className="form">
                    <div className="line">
                        <div className="select_container">
                            <p> Adults </p>
                            <div className="select_box">
                                <div className="select">
                                    <span className='icon'> <GiPerson /> </span>
                                    <select name="adults" id="adults" value={enteredData.adults} onChange={enteringData}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="select_container">
                            <p> Children </p>
                            <div className="select_box">
                                <div className="select">
                                    <span className='icon'> <GiPerson /> </span>
                                    <select name="children" id="adults" value={enteredData.children} onChange={enteringData}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="select_container">
                            <p> Seniors </p>
                            <div className="select_box">
                                <div className="select">
                                    <span className='icon'> <GiPerson /> </span>
                                    <select name="seniors" id="adults" value={enteredData.seniors} onChange={enteringData}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="select_container">
                            <p> Students </p>
                            <div className="select_box">
                                <div className="select">
                                    <span className='icon'> <GiPerson /> </span>
                                    <select name="students" id="adults" value={enteredData.students} onChange={enteringData}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="select_container">
                            <p> Leaving on </p>
                            <div className="select_box">
                                <div className="select">
                                    {/* <span className='icon'> <GiPerson /> </span> */}
                                    <input type="date" name='leavingOn' onChange={enteringData} />
                                    {/* <select style={{ padding: ".5rem .2rem" }} name="adults" id="adults">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={checkOut}> Book now </button>
                </div>
                <div className="break"></div>
                <div className="social">
                    <span> <BsTwitter /> </span>
                    <span> <FaFacebookF /> </span>
                    <span> <MdEmail /> </span>
                    <span> <AiOutlineWechat /> </span>
                </div>
                <div className="break"> </div>
            </div>
        </>
    )
}

export default Book