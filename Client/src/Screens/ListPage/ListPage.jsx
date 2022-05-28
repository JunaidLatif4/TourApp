import React from 'react'

import Slide from '@mui/material/Slide';

import Header from '../../Components/Header/Header2'
import Look from '../../Components/Look/Look'
import Partner from '../../Components/Partner/Partner'
import Pay from '../../Components/Pay/Pay'
import Footer from '../../Components/Footer/Footer'

import Logo from "../../Assets/logo.png"
import { useHistory } from 'react-router-dom';

import Land from "./Components/Land"
import Sky from "./Components/Sky"

import { useSelector } from "react-redux"

import "./ListPage.scss"



const Home2 = () => {
    let history = useHistory()

    // let countryData = useSelector((state) => state.countryData)
    let currentData = history.location.state.data


    return (
        <>
            <Header text={currentData.title} img={currentData.img.public} tour={true} />
            <div className="ListPage_container">
                <Land data={currentData} />
                <Sky data={currentData} />
            </div>
            {/* <Partner /> */}
            <Look />
            <Footer />
            <Pay />
        </>
    )
}

export default Home2