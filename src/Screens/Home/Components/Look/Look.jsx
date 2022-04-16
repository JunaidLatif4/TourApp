import React from 'react'
import './Look.scss'
import look from '../../../../Assets/look_img.jpg'

const Look = () => {
  return (
    <div className='l_main'>
    
    <div className="look_img">

<img src={look} />


    </div>



    <div className="l_line">


    </div>



    <div className="l_text">


<div className="l_title">

Looking for inspiration?

</div>

<div className="l_para">
Subscribe to our emails for tips and updates about our <br/> friendly tours across the UK & Europe.
</div>


<div className="l_btn">
    <button> Yes, inspire me </button>
</div>



    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Look