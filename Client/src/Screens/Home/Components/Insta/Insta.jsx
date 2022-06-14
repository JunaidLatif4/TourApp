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

  let imgs = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8, insta9, insta10, insta11, insta12]

  return (
    <div className="insta_container">
      <div className="title"> #craicintours </div>
      <div className="insta_box">
        {
          imgs.map((data , index) => {
            return (
              index <= 7 &&
              <>
                <div className="img_box">
                  <img src={data} alt="ERROR" />
                  <div className="insta_logo">
                    <InstagramIcon />
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Insta