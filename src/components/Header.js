import React from "react"
import ReactDOM from "react-dom"
import "../components/css/Header.css"


function Header(){
    return(
        <header>
          <nav  className="nav">
            <h2 ClassName="logo">Medikove</h2>

                <ul className="nav-items">
                    <li className="menu-item">Services</li>
                    <li className="menu-item">Gear</li>
                    <li className="menu-item">Expertise</li>
                    <li className="menu-item">Contact</li>
                </ul>
                <button className="dr-login">Doctors Login</button>
           </nav>
        </header>
    )
}

export default Header