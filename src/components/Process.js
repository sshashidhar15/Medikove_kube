import React from "react"
import "../components/css/Main.css"
import process from "./images/process.png"

function Process(){
    return(
        <div className="process">

            <h2 className="process-text"> How does it work </h2>

            <div class="row" className="process-container">
            <div class="col-md-6" className="process-left-text">
                <h3>Talk to your doctor and get a free consultation before the treatment itself </h3>
            </div>

            <div class="col-md-6" className="process-right-flow">

                <img className="process-img" width="100%" height="100%" src= {process} />

            </div>

        </div>
        </div>
    )
}

export default Process