import React from 'react'

import newsBack from '../../Assets/news_img.jpg'

import './Look.scss'



const Look = () => {
  return (
    <div className="newsletter_container">
      <div className="back_img">
        <img src={newsBack} alt="" />
      </div>

      <div className="newsletter_box">
        <div className="title">
          Stay up to date <br /> with our newsletter.
        </div>
        <div className="subscribe">
          <input type="text" placeholder='Enter Email' />
          <button>Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default Look