import React from "react"

import "../components/css/Header.css"
import {Link, Switch, Route} from "react-router-dom"


function Header(){
    return(
        <header>
          <nav  className="nav">
            <h2 ClassName="logo">Medikove</h2>

                <ul className="nav-items">
                
                 <li> <Link to ="/" className="current-page">Services </Link></li>
                    <li> <Link to ="/gear" className="current-page">Gear </Link></li> 
                    <li> <Link to ="/expertise" className="current-page">Expertise </Link></li> 
                    <li> <Link to ="/contactus" className="current-page">Contact</Link></li> 

                    <li> <Link to ="/doctorlogin" className="dr-login">  Doctors Login </Link></li>
                
                </ul>
                
           </nav>
        </header>
    )
}

export default Header