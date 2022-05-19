import React from 'react'
import { useHistory } from "react-router-dom"

import "./SideBar.scss"

import Logo from "../../../Assets/logo.png"

const SideBar = () => {
    let history = useHistory()

    return (
        <>
            <div className="sidebar_container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="options">
                    <div className="option" onClick={() => history.push("/dashboard/country")}>
                        Countries
                    </div>
                    <div className="option" onClick={() => history.push("/dashboard/booking")}>
                        Booking
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar