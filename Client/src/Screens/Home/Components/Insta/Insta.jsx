import React from 'react'
import './Insta.scss'
import InstagramIcon from '@mui/icons-material/Instagram';


import insta1 from '../../../../Assets/insta1.jpeg'
import insta2 from '../../../../Assets/insta2.jpeg'
import insta3 from '../../../../Assets/insta3.jpeg'
import insta4 from '../../../../Assets/insta4.jpeg'
import insta5 from '../../../../Assets/insta5.jpeg'
import insta6 from '../../../../Assets/insta6.jpg'
import insta7 from '../../../../Assets/insta7.jpg'
import insta8 from '../../../../Assets/insta8.jpg'
import insta9 from '../../../../Assets/insta9.jpg'
import insta10 from '../../../../Assets/insta10.jpg'
import insta11 from '../../../../Assets/insta11.jpg'
import insta12 from '../../../../Assets/insta12.jpg'
const Insta = () => {
  return (
    <div className='main_insta'>


      <div className="insta_title">
        #craicintours
      </div>

      <div className="instagram">


        <div className="insta_line_1">

          <div className="insta1">
            <img src={insta1} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta2">
            <img src={insta2} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta3">
            <img src={insta3} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta4">
            <img src={insta4} />
            <InstagramIcon className='insta_icon' />
          </div>


        </div>




        <div className="insta_line_2">

          <div className="insta5">
            <img src={insta5} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta6">
            <img src={insta6} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta7">
            <img src={insta7} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta8">
            <img src={insta8} />
            <InstagramIcon className='insta_icon' />
          </div>


        </div>



        <div className="insta_line_3">

          <div className="insta9">
            <img src={insta9} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta10">
            <img src={insta10} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta11">
            <img src={insta11} />
            <InstagramIcon className='insta_icon' />
          </div>
          <div className="insta12">
            <img src={insta12} />
            <InstagramIcon className='insta_icon' />
          </div>


        </div>


      </div>






    </div>
  )
}

export default Insta