import React from 'react'

import Header from '../../Components/Header/Header'
import Book from './Components/BookForm/Book'
import High from './Components/High/High'
import Journey from './Components/Journey/Journey'
import Look from './Components/Look/Look'
import Map from './Components/Map/Map'
import Partner from './Components/Partner/Partner'
import Pay from './Components/Pay/Pay'
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
                </div>
                <div className="right_section">
                    <Book />
                </div>
            </div>
            <Partner />
            <Look />

            <Pay />
        </>
    )
}

export default Home