import React from 'react'
import './Dragon.scss'
import dragon from '../../../../Assets/dragon.jpg'
import contact from '../../../../Assets/contact.png'
import mount from '../../../../Assets/logo.png'
const Dragon = () => {
  return (

    <div className="dragon_start">



      <div className='main_dragon'>


        <div className="dragon_left">




          <div className="dragon">
            <img src={dragon} />
          </div>








          <div className="dragon_paras">


            <div className="para1">
              The Dragon: Everything You Need to Know About the Welsh National Animal
            </div>


            <div className="para2">
              Do dragons exist? Why is the dragon the national animal of Wales? Where can I find dragons in real life? We tell you everything you need to know about the Welsh dragon.
            </div>



            <div className="contact">

              <img src={contact} />

              <div className="date_para">


                <div className="date">
                  17 Mar 2022, 16:15
                </div>

                <div className="by">
                  by Marishaw
                </div>

              </div>

            </div>

          </div>


        </div>

        <div className="dragon_right">

          <div className="d_title">
            What's Spring Like in the UK & Ireland?

          </div>

          <div className="d_p">


            From weather to wildlife: All your questions answered. Read on to learn what spring in the UK and Ireland has in store for you.

          </div>


          <div className="contact">

            <img src={mount} />

            <div className="date_para">


              <div className="date">
                15 Mar 2022, 16:23
              </div>

              <div className="by">
                by Rabbie
              </div>

            </div>

          </div>


        </div>










      </div>
    </div>
  )
}

export default Dragon