import React from 'react'

import Slide from '@mui/material/Slide';

import Header from '../../Components/Header/Header2'
import Look from '../Home/Components/Look/Look'
import Partner from '../Home/Components/Partner/Partner'
import Pay from '../Home/Components/Pay/Pay'
import Footer from '../../Components/Footer/Footer'

import Logo from "../../Assets/logo.png"

import Land from "./Components/Land"
import Sky from "./Components/Sky"

import "./ListPage.scss"



const Home2 = () => {

    return (
        <>
            <Header text="Isle of Skye Tours" />
            <div className="ListPage_container">
                <Land />
                <Sky />
            </div>
            <Partner />
            <Look />
            <Footer />
            <Pay />
        </>
    )
}

export default Home2