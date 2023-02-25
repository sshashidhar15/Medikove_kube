import React from "react"
import Form from "./Form"
import "../components/css/Main.css"

function Main(){
    return (        
    <main>
          
    <div class="row" className="main-container">
        <div class="col-md-6" className="main-left">
                <h1 className="hero-text"> Recover from your injury</h1>
                <h3 className="hero-sub-text"> Best in your city Physiotherapy with expert guidance to rebuild your health at your doorstep.</h3>
                <button className= "btn btn-primary btn-secondary"> Book a Consultation </button>
                <div className="benefit">
                <ul class="list-group list-group-flush fs-4 ps-5 fw-semibold ms-5">
                    <li class="list-group-item">
                    <span class="badge bg-primary rounded-pill"></span>

                        Complete Treatment at your home</li>
                    <li class="list-group-item">Experienced doctors and nurses</li>
                    <li class="list-group-item">Quality Service with affordable prices</li>

                </ul>

                </div>
               

            </div>
            
           
            <div class="col-md-6">
            <Form />
            </div>  
        </div>
    </main>
        

    )
}
export default Main