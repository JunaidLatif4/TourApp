import React from 'react'
import './Tour.scss'
import pic1 from '../../../../Assets/scot.jpg'
import pic2 from '../../../../Assets/england.jpg'
import pic3 from '../../../../Assets/ireland.jpg'
import pic4 from '../../../../Assets/wales.jpg'
import pic5 from '../../../../Assets/spain.jpg'
import pic6 from '../../../../Assets/portugal.jpg'
import pic7 from '../../../../Assets/swit.jpg'
import pic8 from '../../../../Assets/italy.jpg'
import pic9 from '../../../../Assets/respons.jpg'
import pic10 from '../../../../Assets/covid.png'
import pic11 from '../../../../Assets/private.jpg'
const Tour = () => {
  return (
    <div className='main_tour'>
    

<div className="tour_title">
Where would you like to go?
</div>

    <div className="line1">

<div className="img1">
    <img src={pic1} />
    <img src={pic2} />
</div>

    </div>


    <div className="line2">
        <div className="img2">
        <img src={pic3} />
        <img src={pic4} />
        <img src={pic5} />
        </div>
    </div>


    <div className="line3">
        <div className="img3">
        <img src={pic6} />
        <img src={pic7} />
        <img src={pic8} />
        </div>
    </div>
    
    
    

    <div className="btn_explore">
        Explore all our tours
    </div>
    
    
    
    
    <div className="div_line">
        <hr/>
    </div>
    
    
    <div className="tour_title2">
    Explore more
    </div>
    
 
    <div className="more">
    <img src={pic9} />
    <img src={pic10} />
    <img src={pic11} />
    </div>   


    <div className="div_line">
        <hr/>
    </div> 


    
    </div>
  )
}

export default Tour