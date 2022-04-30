import React from 'react'

import bus from '../../../Assets/list1.jpeg'
import port from '../../../Assets/list2.jpeg'
import point from '../../../Assets/list3.jpeg'
import bridge from '../../../Assets/list4.jpeg'
import van from '../../../Assets/van.png'
import reward from '../../../Assets/reward.png'
import leaf from '../../../Assets/leaf.png'
import calnder from '../../../Assets/calnder.png'


import './Sky.scss'
const Sky = () => {
    return (
        <div className='main_sky'>


            <div className="bus_1">



                <div className="bus">

                    <div className="bus_img">
                        <img src={bus} />
                    </div>

                    <div className="bus_title">
                        The Winged Isle
                    </div>

                    <div className="bus_para1">

                        Skye’s unusual beauty attracts directors, poets, and geologists. Its unique rock types are carved into a landscape that’s as surreal as it is stunning.
                    </div>

                    <div className="bus_para2">


                        You’ll gaze at rocky outcrops, crescent shaped mountains, and physics-defying cliffs. And no matter why you visit, you’ll find this island mystical.


                    </div>

                </div>

                <div className="bus">

                    <div className="bus_img">
                        <img src={port} />
                    </div>





                    <div className="bus_title">

                        Neist Point
                    </div>

                    <div className="bus_para1">
                        The most epic lighthouse you could imagine. It clings to a jagged, winding headland, and shines bright in luminous white.
                    </div>

                    <div className="bus_para2">
                        The most epic lighthouse you could imagine. It clings to a jagged, winding headland, and shines bright in luminous white.

                    </div>

                </div>



            </div>





            <div className="bus_2">


                <div className="bus">

                    <div className="bus_img">
                        <img src={point} />
                    </div>

                    <div className="bus_title">
                        Portree
                    </div>

                    <div className="bus_para1">

                        he largest town in Skye has a population of 2,491 people. It’s famous for being a colourful, cultural centre for the people of Skye.
                    </div>

                    <div className="bus_para2">


                        You can find gifts for your family, you can splash out on fine dining, or you can spend your time watching the flows of the ocean.

                    </div>

                </div>

                <div className="bus">

                    <div className="bus_img">
                        <img src={bridge} />
                    </div>

                    <div className="bus_title">
                        Frolicking Fairies
                    </div>

                    <div className="bus_para1">
                        Skye is awash with folk tales of mischievous fairies. Dip your feet in the fairy pools and walk amongst the grassy knolls of the fairy glen.

                    </div>

                    <div className="bus_para2">

                        If you’re game, try visiting the little stream under Sligachan Bridge where the trickling water is rumoured to provide eternal beauty.

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