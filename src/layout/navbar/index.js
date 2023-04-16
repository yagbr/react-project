import React from 'react'
import "./navbar.scss"
import Logo from '../../assets/images/logo.png';
export default function Header() {
  return (
    <>
      <div className="headerSection">
         <div className="header">
           <div className="menu">
             <div className="logo">
              <img src={Logo} alt="logo"/>
             </div>

             <div className="navbarMenu">
               <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blocks</a></li>
                <li><a href="#">Contact </a></li>
                <li>
                  <button className="buyBtn">BUY NOW</button>
                </li>


               </ul>
             </div>

           </div>
         </div>
      </div>
    </>
  )
}

