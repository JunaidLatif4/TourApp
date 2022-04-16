import React from 'react'

import { GiPerson } from "react-icons/gi"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {AiOutlineWechat} from 'react-icons/ai'

import "./Book.scss"

const Book = () => {
    return (
        <>
            <div className="book_container">
                <div className="title">
                    Prices from £179.00
                </div>
                <div className="form">
                    <div className="line">
                        <div className="select_container">
                            <p> Adults </p>
                            <div className="select_box">
                                <div className="select">
                                    <span className='icon'> <GiPerson /> </span>
                                    <select name="adults" id="adults">
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
                                    <select name="adults" id="adults">
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
                                    <select name="adults" id="adults">
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
                                    <select name="adults" id="adults">
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
                                    <select style={{ padding: ".5rem .2rem" }} name="adults" id="adults">
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
                    <button> Book now </button>
                </div>
                <div className="break"></div>
                <div className="social">
                    <span> <BsTwitter/> </span>
                    <span> <FaFacebookF/> </span>
                    <span> <MdEmail/> </span>
                    <span> <AiOutlineWechat/> </span>
                </div>
                <div style={{height:"2px"}} className="break"> </div>
            </div>
        </>
    )
}

export default Book