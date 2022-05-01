import React from 'react'
import Sec1 from './Sec1/Sec1'
import './Stylistdashboard.scss'
import Stylistheader from './Stylistheader/Stylistheader'
import Stylistmenu from './Stylistmenu/Stylistmenu'
const Stylistdashboard = () => {
  return (
    <div>
      <Stylistheader />
      <Sec1 />
      <Stylistmenu />
    </div>
  )
}

export default Stylistdashboard