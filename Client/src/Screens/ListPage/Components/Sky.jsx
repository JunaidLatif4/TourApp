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

import Card from "../../Search/Components/Card"


import './Sky.scss'
import Award from '../../Home/Components/Award/Award';


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

                <Award title="The Craicin's experience" details={false} />

                <div className="our">
                    <span className='skye'>Our Skye Tours</span>

                    <div className="under_line">

                    </div>

                </div>



                <Card />
            </div>

















        </div>
    )
}

export default Sky