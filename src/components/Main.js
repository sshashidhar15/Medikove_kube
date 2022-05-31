import React from "react"
import ReactDOM from "react-dom"
import "../components/css/Main.css"

function Main(){
    return(

        <main>

         <div className="main-left">

            <h2 className="hero-text"> Relieve your Pain</h2>
            <h3 className="hero-sub-text"> Treatment at your home by an expert physiotherapist</h3>

         </div>

         <div className="main-right">

            <form>       
               <h2 className="form-text"> Book a consultation</h2>
               <input type="text" placeholder="Name" className="form-input"/> 
               <input type="text" placeholder="Mobile number" className="form-input" /> 
               <input name="Time Slot" type="datetime-local" className="form-input"/>
               <br></br> <br></br>
               <input type="Submit" className="form-button" />
            </form>
  
         </div>
        </main>
        

    )
}
export default Main