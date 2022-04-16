import React from 'react'

import Header from '../../Components/Header/Header'
import Book from './Components/BookForm/Book'
import Map from './Components/Map/Map'
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
                </div>
                <div className="right_section">
                    <Book />
                </div>
            </div>
        </>
    )
}

export default Home