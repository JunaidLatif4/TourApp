import React from 'react'
import { useHistory } from 'react-router-dom'

import { BsTwitter, BsPinterest, BsDot } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { AiOutlineWechat } from 'react-icons/ai'
import { ImInstagram, ImYoutube2 } from 'react-icons/im'

import Logo from "../../Assets/logo.png"

import "./Footer.scss"

// const Footer = () => {
//     let history = useHistory()

//     return (
//         <>
//             <div className="footer_container">
//                 <div className="links">
//                     <div className="link">Conference Services</div>
//                     <div className="link">FAQs</div>
//                     <div className="link">Student Tours Scotland</div>
//                     <div className="link">Careers</div>
//                     <div className="link">Blog</div>
//                     <div className="link">Agents & Affiliates</div>
//                     <div className="link">Privacy & Cookies</div>
//                     <div className="link">Terms & Conditions</div>
//                     <div className="link">Accessibility</div>

//                 </div>
//                 <div className="follow">
//                     <div className="heading">
//                         Follow us
//                     </div>
//                     <div className="socials">
//                         <FaFacebookF />
//                         <ImInstagram />
//                         <BsTwitter />
//                         <BsPinterest />
//                         <ImYoutube2 />
//                     </div>
//                     <div style={{cursor:"pointer"}} className="logo" onClick={() => history.push("/")}>
//                         <img src={Logo} alt="Error" />
//                     </div>
//                 </div>
//                 <div className="about">
//                     <div className="title">Contact us</div>
//                     <div className="phone">
//                         +44 (0) 131 226 3133
//                     </div>
//                     <div className="find">
//                         Find us
//                         <p>Our Departure Points <MdLocationOn /> </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


const Footer = () => {
    return (
        <>
            <div className="footer_container2">
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