import React from "react"
import "../components/css/Main.css"
import process from "./images/process.png"

function Process(){
   
  return(

    <div className="process">
        <h2 className="process-text"> How does it work </h2>
        <div className=" mt-4 process-left-text">
          <h4>A well defined Procedure and schedule for and effective treatment and quick recovery.</h4>
        </div>
        <div className="row ">    
               <div className="col-md-10 mx-auto process-container">
                  <div className="row">
                    <div className ="col-md-4 treatment">      
                    <button className= "btn btn-secondary process-btn">Treatment</button>
                    <h5 className="ms-3 mt-3 fw-bold fs-4">Consultation</h5>
                    <ul className =" treatment-grp list-group list-group-flush">
                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">1</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Book an appointment</div>
                        </div>
                       </li>
                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">2</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Detailed Assessment by an Orthopaedician</div>
                        </div>
                      </li>

                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">3</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Prepare a treatment plan</div>
                        </div>
                      </li>
                    </ul>
                 </div> 

                <div className="col-md-4 treatment">
                    <br ></br>
                    <h4 className="schedule fw-bold fs-4">Schedule</h4>
                    <ul className =" treatment-grp list-group list-group-flush">
                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">1</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Physio supervises treatment at your home</div>
                        </div>
                       </li>
                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">2</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Validate your progress regularly</div>
                        </div>
                      </li> 

                      <li class="list-group-item d-flex  align-items-start mt-2">
                        <span class="badge bg-secondary rounded-pill">2</span>
                        <div class="ms-2" >
                          <div class="fw-semibold fs-5">Update plan according to the progress</div>
                        </div>
                      </li> 

                  </ul>
                </div> 
                
                <div className="col-md-4 treatment">
                    <button className= "btn btn-outline-secondary outcome-btn fw-bold">Outcomes</button>
                    <h4 className="ms-3 mt-3 fw-bold fs-4">Recovery</h4>
                    <ul className ="treatment-grp">
                      <li className="recovery-item fw-semibold fs-5">Complete recovery</li>
                      <li className="recovery-item fw-semibold fs-5">Pain relief</li>
                  </ul>

                  <h4 className="ms-3 mt-3 fw-bold fs-4">Care</h4>
                    <ul className ="treatment-grp">
                      <li className="recovery-item fw-semibold fs-5">Track Progress and health</li>
                      <li className="recovery-item fw-semibold fs-5">Reminders</li>
                  </ul>

                </div> 

                
              </div> 
              <button className= "btn btn-primary btn-secondary process-bk"> Book a Consultation </button>
            </div>            
       </div>
      </div>
    
  )
}
  export default Process

    
    


           /*<div class="col-md-6 col-md-6" className="process-right-flow">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="title center">
                        <span>
                            <b>Medikove</b>
                        </span>
                          Recovery Process
                    </div>
                  </div>
                  <div class=" row mt30">
                    <div class="col-xs-12 col-md-6"> 
                      <div class="button left grey">
                        <span class="icon setup"></span>
                          

                      </div>
                    </div>
                  </div>
                      
                </div>

                <img className="process-img" width="100%" height="100%" src= {process} /> 

    </div>
    )
        </div> 
        </div>
} */

