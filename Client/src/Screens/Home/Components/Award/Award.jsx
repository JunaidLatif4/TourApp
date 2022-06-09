import React from 'react'
import './Award.scss'
import van from '../../../../Assets/van.png'
import calender from '../../../../Assets/calendar.png'
import reward from '../../../../Assets/guaranteed.png'
import leaf from '../../../../Assets/ecology.png'

const Award = (props) => {
    return (

        <div className="main_award">
            <div className='main_award_1'>

                <div className="award_title">
                    {props.title ? props.title : "PREMIUM TRAVELS"}
                </div>

                <div className="award_icon">
                    <div className="van">

                        <div className="van_img">
                            <img src={van} />
                        </div>

                        <div className="van_para">
                            Travel in small groups or private tours
                        </div>
                    </div>
                    <div className="van">

                        <div className="van_img">
                            <img src={reward} />
                        </div>

                        <div className="van_para">
                            You'll have a guaranteed experience or your money back
                        </div>
                    </div>
                    <div className="van">

                        <div className="van_img">
                            <img src={calender} />
                        </div>

                        <div className="van_para">
                            Guaranteed departures: you book, you go
                        </div>
                    </div>
                    <div className="van">

                        <div className="van_img">
                            <img src={leaf} />
                        </div>

                        <div className="van_para">
                            Our eco-friendly tours support local communities
                        </div>
                    </div>



                </div>

                <div className="line">
                    <hr />
                </div>

















            </div>
            {
                props.details != false &&
                <div className="backcol">
                <div className="main_award_2">
                    <div className="para1">
                        Get your suitcases, cameras, and thermos flasks ready, because it’s time to combine little-known legends with classic destinations on our friendly mini-coach tours of the UK & Europe.
                    </div>
                    <div className="para1">
                        Each trip comes with a driver-guide who knows the stories, sights, and secrets of the areas you travel through; every itinerary is tested by travel-loving locals; and you get the chance to support the communities you visit.
                    </div>

                    <div className="para1">
                        So, what are you waiting for? Get planning, get packing, and go beyond the guidebooks.
                    </div>
                </div>
                </div>
            }

        </div>
    )
}

export default Award