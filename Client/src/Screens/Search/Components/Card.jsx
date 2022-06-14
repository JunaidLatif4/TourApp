import React from 'react'

import {TiTick} from "react-icons/ti"
import CardImg from "../../../Assets/card1.jpg"

import "./Card.scss"

const Card = () => {
    return (
        <>
            <div className="cards_container">
                <div className="options">
                    <div className="search_input">
                        <input type="text" name="" id="" placeholder='I want to experience ....' />
                        <button>Search</button>
                    </div>
                    <div className="departure">
                        <p> Departure between </p>
                        <div className="brack"></div>
                        <input type="text" placeholder='From' />
                        <input type="text" placeholder='To' />
                    </div>

                    <div className="destination">
                        <p> Destination </p>
                        <div className="brack"></div>
                        <div className="locations">
                            <div className="location">
                                <input type="checkbox" />
                                <div>Any destination</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>Itly</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>Portugal</div>
                            </div>
                        </div>
                    </div>

                    <div className="destination">
                        <p> Departure point </p>
                        <div className="brack"></div>
                        <div className="locations">
                            <div className="location">
                                <input type="checkbox" />
                                <div>Any destination</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>Itly</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>Portugal</div>
                            </div>
                        </div>
                    </div>

                    <div className="destination">
                        <p> No. of days </p>
                        <div className="brack"></div>
                        <div className="locations">
                            <div className="location">
                                <input type="checkbox" />
                                <div>Any</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>1</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>2 - 4</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>5 - 6</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>7 - 19</div>
                            </div>
                            <div className="location">
                                <input type="checkbox" />
                                <div>20+ </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards_box">
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img_box">
                            <img src={CardImg} alt="" />
                            <div className="price"> Prices from  <span>  $ 179.00 </span> </div>
                        </div>
                        <div className="details">
                            <div className="title"> The Isle of Skye - 3 day tour </div>
                            <div> Roam the breathtaking Isle of Skye and its beautifully unique landscape on this tour from Edinburgh </div>
                            <div> Departing from: <span> EDINBURGH </span> </div>
                        </div>
                        <div className="find">
                            {/* <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div>
                            <div> <span> <TiTick/> </span> 16 seat mini-coaches </div> */}
                            <button> find out more </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card