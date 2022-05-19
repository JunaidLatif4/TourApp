import React from 'react'

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import bus from '../../../Assets/list1.jpeg'
import port from '../../../Assets/list2.jpeg'
import point from '../../../Assets/list3.jpeg'
import bridge from '../../../Assets/list4.jpeg'
import van from '../../../Assets/van.png'
import reward from '../../../Assets/reward.png'
import leaf from '../../../Assets/leaf.png'
import calnder from '../../../Assets/calnder.png'


import './Sky.scss'


const Sky = (props) => {
    return (
        <div className='main_sky'>


            <div className="bus_1">
                <div className="bus">
                    <div className="bus_img">
                        <img src={props.data.s3Box1Img.public} />
                    </div>

                    <div className="bus_title">
                        {props.data.s3Box1Heading}
                    </div>

                    <div className="bus_para">
                        {
                            ReactHtmlParser(props.data.s3Box1Detail)
                        }
                    </div>
                </div>

                <div className="bus">
                    <div className="bus_img">
                        <img src={props.data.s3Box2Img.public} />
                    </div>

                    <div className="bus_title">
                        {props.data.s3Box2Heading}
                    </div>

                    <div className="bus_para">
                        {
                            ReactHtmlParser(props.data.s3Box2Detail)
                        }
                    </div>
                </div>

            </div>


            <div className="bus_2">

            <div className="bus">
                    <div className="bus_img">
                        <img src={props.data.s3Box3Img.public} />
                    </div>

                    <div className="bus_title">
                        {props.data.s3Box3Heading}
                    </div>

                    <div className="bus_para">
                        {
                            ReactHtmlParser(props.data.s3Box3Detail)
                        }
                    </div>
                </div>

                <div className="bus">
                    <div className="bus_img">
                        <img src={props.data.s3Box4Img.public} />
                    </div>

                    <div className="bus_title">
                        {props.data.s3Box4Heading}
                    </div>

                    <div className="bus_para">
                        {
                            ReactHtmlParser(props.data.s3Box4Detail)
                        }
                    </div>
                </div>


            </div>




            <div className="line">
                <hr />
            </div>


            <div className="ex">


                <div className="ex_title">
                    The Craicin's experience
                </div>


                <div className="bus_line">

                    <div className="bus_line1">

                        <div className="van">
                            <img src={van} />
                        </div>



                        <div className="bus_para">
                            Travel the local way on small group tours of 16 people or less
                        </div>


                    </div>






                    <div className="bus_line1">

                        <div className="van">
                            <img src={reward} />
                        </div>



                        <div className="bus_para">
                            You'll have a guaranteed experience or your money back
                        </div>


                    </div>
                    <div className="bus_line1">

                        <div className="van">
                            <img src={calnder} />
                        </div>



                        <div className="bus_para">
                            Guaranteed departures: you book, you go
                        </div>


                    </div>
                    <div className="bus_line1">

                        <div className="van">
                            <img src={leaf} />
                        </div>



                        <div className="bus_para">
                            Our eco-friendly tours support local communities
                        </div>


                    </div>


                </div>




                <div className="our">
                    <span className='skye'>Our Skye Tours</span>

                    <div className="under_line">

                    </div>
                </div>







            </div>



















        </div>
    )
}

export default Sky