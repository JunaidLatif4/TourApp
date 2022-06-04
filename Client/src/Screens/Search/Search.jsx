import React from 'react'

import Header from '../../Components/Header/Header2'
import Card from './Components/Card'


import "./Search.scss"

const Search = () => {
    return (
        <>
            <Header />
            <div className="search_container">
                <Card />
            </div>
        </>
    )
}

export default Search