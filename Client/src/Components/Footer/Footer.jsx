import React from 'react'
import { useHistory } from 'react-router-dom'

import { BsTwitter, BsPinterest, BsDot } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { AiOutlineWechat } from 'react-icons/ai'
import { ImInstagram, ImYoutube2 } from 'react-icons/im'

import Logo from "../../Assets/logo.png"

import "./Footer.scss"



const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_box">
                    <div className="links_box">
                        <div className="copy">
                            <img src={Logo} alt="ERROR" />
                            @2022 Craicin Tours LTV - Privacy Policy
                        </div>
                        <div className="links">
                            <p>FAQs</p>
                            <BsDot />
                            <p>Booking Terms</p>
                            <BsDot />
                            <p>Terms of Use</p>
                            <BsDot />
                            <p>About Craicin</p>
                            <BsDot />
                            <p>Media</p>
                            <BsDot />
                            <p>Carears</p>
                            <BsDot />
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="social_box">
                        <div className="title">
                            Follow Us
                        </div>
                        <div className="socials">
                            <FaFacebookF />
                            <ImInstagram />
                            <BsTwitter />
                            <BsPinterest />
                            <ImYoutube2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer