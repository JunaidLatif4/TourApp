import React from 'react'
import { useHistory } from "react-router-dom"

import pic1 from '../../../../Assets/scot.jpg'
import pic2 from '../../../../Assets/england.jpg'
import pic3 from '../../../../Assets/ireland.jpg'
import pic4 from '../../../../Assets/wales.jpg'
import pic5 from '../../../../Assets/spain.jpg'
import pic6 from '../../../../Assets/portugal.jpg'
import pic7 from '../../../../Assets/swit.jpg'
import pic8 from '../../../../Assets/italy.jpg'
import pic9 from '../../../../Assets/respons.jpg'
import pic10 from '../../../../Assets/covid.png'
import pic11 from '../../../../Assets/private.jpg'
import pic12 from '../../../../Assets/alltour.jpg'

import { AiOutlineRight } from "react-icons/ai"

import './Tour.scss'

import { useSelector } from "react-redux"

const Tour = () => {
    let history = useHistory()

    let countryData = useSelector((state) => state.countryData)

    const goToCountry = (value, view) => {
        history.push({ pathname: "/list", state: { data: value, view } })
    }

    return (
        countryData && countryData.length >= 1 &&
        <div className='main_tour'>


            <div className="tour_title">
                Where would you like to go?
            </div>

            {/* <div className="line1">

                {
                    countryData != null ?
                        <>
                            <div className="img1">
                                <img style={{ cursor: "pointer" }} onClick={() => goToCountry(countryData[0], "country")} src={countryData[0].img.public} />
                                <img style={{ cursor: "pointer" }} onClick={() => goToCountry(countryData[1], "country")} src={countryData[1].img.public} />
                            </div>
                        </>
                        :
                        <div className="img1">
                            <img src={pic1} />
                            <img src={pic2} />
                        </div>
                }


            </div> */}

            <div className="tour_box">
                {
                    countryData != null ?
                        countryData.map((data, index) => {
                            return (
                                index <= 6 &&
                                <>
                                    <div className="img_box" onClick={() => goToCountry(data, "country")}>
                                        <img src={data.img.public} alt="" />
                                        <div className="title">Tour {data.title}</div>
                                    </div>
                                </>
                            )
                        })
                        :
                        <div className="no">
                            No Tours Found
                        </div>
                }
            </div>

            <div className="btn_explore">
                Explore all our tours
            </div>




            <div className="div_line">
                <hr />
            </div>


            <div className="tour_title2">
                Explore more
            </div>
            <div className="more">
                <div className="more_box">
                    <img src={pic9} />
                    <div className="name"> Responsible Travel   <AiOutlineRight /> </div>
                </div>
                <div className="more_box">
                    <img src={pic10} />
                    <div className="name"> Covid-19 Information    <AiOutlineRight /> </div>
                </div>
                <div className="more_box">
                    <img src={pic11} />
                    <div className="name"> Private tours  <AiOutlineRight /> </div>
                </div>
                <div className="more_box">
                    <img src={pic12} />
                    <div className="name"> View All tours  <AiOutlineRight /> </div>
                </div>
            </div>


            <div style={{ marginTop: "4rem" }} className="tour_title2">
                The Latest in Travel
            </div>
            <div className="more2">
                <div className="more_box">
                    <img src={pic9} />
                    <div className="details">
                        <div className="name"> Social Network </div>
                        <div className="title"> Trip that you'll never ever forget </div>
                        <div className="detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et totam dignissimos architecto adipisci iusto fugit perspiciatis, maiores dolores voluptatem?</div>
                        <div className="break"></div>
                        <div className="author">Jhone Parker</div>
                    </div>
                </div>
                <div className="more_box">
                    <img src={pic10} />
                    <div className="details">
                        <div className="name"> Social Network </div>
                        <div className="title"> Trip that you'll never ever forget </div>
                        <div className="detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et totam dignissimos architecto adipisci iusto fugit perspiciatis, maiores dolores voluptatem?</div>
                        <div className="break"></div>
                        <div className="author">Jhone Parker</div>
                    </div>
                </div>
                <div className="more_box">
                    <img src={pic11} />
                    <div className="details">
                        <div className="name"> Social Network </div>
                        <div className="title"> Trip that you'll never ever forget </div>
                        <div className="detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et totam dignissimos architecto adipisci iusto fugit perspiciatis, maiores dolores voluptatem?</div>
                        <div className="break"></div>
                        <div className="author">Jhone Parker</div>
                    </div>
                </div>
            </div>


            <div className="div_line">
                <hr />
            </div>



        </div>
    )
}

export default Tour