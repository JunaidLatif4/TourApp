import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { BiFilm } from "react-icons/bi"

import './High.scss'

const High = (props) => {
    return (
        <div className='highlight_container'>
            <div className="title">
                Highlights
            </div>
            <div className="options">
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
                <div className="option">
                    <div className="icon"> <BiFilm /> </div>
                    <p> Nessie </p>
                </div>
            </div>
            <div className="places">
                Places you explore
            </div>
            <div className="places_list">
                {
                   ReactHtmlParser(props.data.explore)
                }
            </div>






        </div>
    )
}

export default High