import React from 'react'
import Footer from '../../Components/Footer/Footer'

import Header from '../../Components/Header/Header'
import Book from './Components/BookForm/Book'
import High from './Components/High/High'
import Journey from './Components/Journey/Journey'
import Look from './Components/Look/Look'
import Map from './Components/Map/Map'
import Partner from './Components/Partner/Partner'
import Pay from './Components/Pay/Pay'
import Reasons from './Components/Reasons/Reasons'
import Slider from './Components/Slider/Slider'

import './Home.scss'

const Home = () => {
    return (
        <>
            <Header />
            <div className="home_container">
                <div className="left_section">
                    <Slider />
                    <Map />
                    <High/>
                    <Journey/>
                    <Reasons/>
                </div>
                <div className="right_section">
                    <Book />
                </div>
            </div>
            <Partner />
            <Look />
<Footer/>
            <Pay />
        </>
    )
}

export default Home