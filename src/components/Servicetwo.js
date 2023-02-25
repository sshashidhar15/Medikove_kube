import React from "react"
import "../components/css/Servicetwo.css"
import "../components/css/Service.css"
import process from "./images/process.png"

function Servicetwo(){
  return( 
<div className="service-two">
      <div className="row ">
         
        
         <div className="col-xs-12 col-md-6">
              <div className="row">          
                <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card">
                    <div className="card-body">
                      <div className="d">
                      {/* <img src="..." class="card-img-top" alt="..."></img>             */}
                      <h5 className="card-title text-center fw-bold">COPD</h5>
                                            
                      </div>                    
                      <li className="list-item">Postural drainage- Clapping, shaking</li>
                      <li className="list-item">Intermittent positive pressure breathing</li>
                      <li className="list-item">Diaphragmatic breathing</li>
                      <li className="list-item">Posture correction</li>
                      <li className="list-item">Thoracic mobility exercises</li>
                      <li className="list-item"> Education</li>   
                      <br></br>  
        
                    </div>
                  </div>
                </div>


                <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card mt-3 ms-3">            
                    <div className="card-body">
                      <h5 className="card-title text-center text-center fw-bold">Chronic Bronchitis</h5>
                      <li className="list-item">Postural drainage</li>
                      <li className="list-item">Chest compressions</li>
                      <li className="list-item">Controlled coughing</li>
                      <li className="list-item">Balloon breathing</li>
                      <li className="list-item">Bronchodilators</li>
                      <li className="list-item"> Education</li>        
                    </div>
                  </div>
                </div>
                




              <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card">            
                    <div className="card-body">
                      <h5 className="card-title text-center text-center fw-bold"> Rib Fracture</h5>
                      <li className="list-item">Dry needling</li>
                      <li className="list-item">Protective padding</li>
                      <li className="list-item">Improving posture, activity modification</li>
                      <li className="list-item">Taping techniquess</li>
                      <li className="list-item">Soft tissue massage and Joint</li>
                      <li className="list-item">Electrotherapy</li>
                      <br></br>
      
                    </div>
                  </div>
                </div>


           


        

                <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card mt-3 ms-3">            
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bold">Asthma</h5>
                      <li className="list-item">Breathing retraining techniques</li>
                      <li className="list-item">Physical training</li>
                      
                      <li className="list-item">Respiratory muscle training</li>
                      <li className="list-item">Removal of secretion</li>
                      <li className="list-item">Postural drainage</li>
                      <li className="list-item"> Range of motion exercises</li>        
                    </div>
                  </div>
                </div>
                
             
            </div>
            
            </div>

            <div className="col-xs-12 col-md-6 feature-text text-end">
              <h2 className="ortho-text">Cardio Respiratory Physiotherapy</h2>
                <p className="ortho-sub-text mt-3"> Cardio-respiratory physiotherapy aims to help clear lung secretions, prevent or improve areas of lung collapse and reduce the effort of breathing.</p>
                
                
                <ul className=" ms-5 list-group mt-2 fs-4">
                {/* <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li> */}

                  <li className="service-two-pt">COPD/Bronchitis</li>
                  
                  <li className="service-two-pt">Bronchiectasis</li>
                  <li className="service-two-pt">Pneumothorax</li>
                  <li className="service-two-pt">Rib Fractures</li>
                  {/* <li className="service-one-pt">Tendinitiss</li> */}
                  <li className="service-two-pt">Asthma</li>    
                </ul>
         </div>

         
         </div>
  </div>
  )
}

export default Servicetwo