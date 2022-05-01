import React from 'react'
import './Stylistmenu.scss'
import { FiLogOut } from 'react-icons/fi';
import {Link} from 'react-router-dom'
const Stylistmenu = () => {
  return (
    <div className='main_stylist'>
          <div>

<aside className="main-sidebar sidebar-dark-primary elevation-4">
 {/* Brand Logo */}
 <a href="#" className="brand-link">
   <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
   <span className="brand-text font-weight-light menuTxt">Stylist Panel</span>
 </a>
 {/* Sidebar */}
 <div className="sidebar">
   {/* Sidebar user panel (optional) */}
   <div className="user-panel mt-3 pb-3 mb-3 d-flex">
     <div className="image">
       <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
     </div>
     <div className="info">
       <a href="#" className="d-block menuTxt">Fleming AA</a>
     </div>
   </div>
   {/* SidebarSearch Form */}

   {/* Sidebar Menu */}
   <nav className="mt-2">
     <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       {/* Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library */}
      
       <li className="nav-item">
         <a href="#" className="nav-link">
           <i className="far fa-comments" />
           <p className='menuTxt'>
             Chat
           </p><br/>

         </a>
       </li>
       <li className="nav-item logoutMenu">
         <a href="#" className="nav-link">
           <FiLogOut className='sidebarIcon'/>
           <p className='menuTxt'>
             Logout
           </p>
         </a>
       </li>
  
     </ul>
   </nav>
   {/* /.sidebar-menu */}
 </div>
 {/* /.sidebar */}
</aside>

   </div>
    </div>
  )
}

export default Stylistmenu