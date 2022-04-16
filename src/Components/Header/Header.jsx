import React from 'react'

import { BsFillTelephoneFill } from "react-icons/bs"
import { BiSearchAlt2 } from 'react-icons/bi'

import Logo from "../../Assets/logo.png"
import BackImg from "../../Assets/background.jpg"

import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className="header_container">
                <div className="back_img"> <img src={BackImg} alt="Error" /> </div>
                <div className="navbar_box">
                    <div className="logo">
                        <img src={Logo} alt="Error" />
                    </div>
                    <div className="links">
                        <p> Tour Scotland </p>
                        <p> Tour England </p>
                        <p> Tour Ireland </p>
                        <p> Tour Europe </p>
                    </div>
                    <div className="about">
                        <p>Private Tours</p>
                        <p>About Us</p>
                        <p className='icons'>
                            <span> <BiSearchAlt2 /> </span>
                            <span> <BsFillTelephoneFill /> </span>
                        </p>
                    </div>
                </div>

                <div className="title_box">
                    <div className="title">
                        The Isle of Skye
                    </div>
                    <div className="detail">
                        3 day tour
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header