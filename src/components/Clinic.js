import React from "react"
import ReactDOM from "react-dom"
import "../components/css/Main.css"
import ucchvas from "./images/ucchvas.png"


function Clinic(){
    return(

        <div className="clinics-container">

            <h2 className="clinic-text"> Clinics Associated</h2>
            <h3 className="clinic-sub-text"> The best in your city</h3>

        <div className="clinic-logos">
                <marquee behavior="alternate" direction="left">
                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>
                </marquee>

                <marquee behavior="sliding" direction="left">
                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>
                    </marquee>

                    <marquee behavior="sliding" direction="left">

                    <div className="ucchvas">
                        <img src={ucchvas} className="ucchvas" alt="test"/>
                        <p>--Banjara Hills</p>
                    </div>    

                    </marquee>
               
        </div>
    </div>
    
)}
export default Clinic
  