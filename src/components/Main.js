import React from "react"
import Form from "./Form"
import "../components/css/Main.css"


function Main(){
    return (
        
    <main>

        <div class="row" className="main-container">


            <div class="col-md-6" className="main-left">

                

                <h2 className="hero-text"> Relieve your Pain</h2>
                <h3 className="hero-sub-text">Treatment at your home by a specialist and build your health</h3>

            </div>
            <div class="col-md-6">
            <Form />
            </div>
        </div>

    </main>
        

    )
}
export default Main