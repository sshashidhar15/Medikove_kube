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

    /*{<nav class="navbar navbar-light bg-light navbar-expand-lg fixed-top">
        <a href="/" class="navbar-brand ml-5">Medikove</a> 
          
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
                <li class="navbar-item active"> <Link to ="/" class="nav-link">Services </Link></li>
                <li class="navbar-item"> <Link to ="/gear" class="nav-link">Gear</Link></li>
                <li class="navbar-item"> <Link to ="/expertise" class="nav-link">Expertise </Link></li>
                <li class="navbar-item"> <Link to ="/contactUs" class="nav-link">Contact </Link></li>
            </ul>
        </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"> </span>
            </button>
    </nav> }*/
    )
}

export default Header