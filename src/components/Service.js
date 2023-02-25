import React from "react"
import "../components/css/Service.css"
import process from "./images/process.png"

function Service(){
  return( 
<div className="service-one">
      <div className="row ">
         <div className="col-xs-12 col-md-6 feature-text">
              <h2 className="ortho-text">Orthopaedics Physiotherapy</h2>
                <p className="ortho-sub-text mt-3"> Cure and manage the disorders of the musculoskeletal system, which are composed of joints, muscles, bones, ligaments, and tendons.</p>
                
                
                <ul className=" ms-5 list-group  fs-4 mt-3">
                  <li className="service-one-pt"> Low Backache - Lumbar Spondylosis</li>
                  
                  <li className="service-one-pt">Cervical Spondylosis</li>
                  <li className="service-one-pt">Arthritis</li>
                  <li className="service-one-pt">Ligament Injuries</li> 
                  <li className="service-one-pt">Rotator cuff injury of shoulder</li>
                  <li className="service-one-pt">Physiotherapy for upper and lower limb amputees</li>
                     
                </ul>
         </div>
        
         <div className="col-xs-12 col-md-6">
              <div className="row">          
                <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card mt-3">
                    <div className="card-body">
                      <div className="d">
                      {/* <img src="..." class="card-img-top" alt="..."></img>             */}
                      <h5 className="card-title text-center mb-2 fw-bold">Back and Neck</h5>
                      </div>                    
                      <li className="list-item">Hot water fomentation</li>
                      <li className="list-item">Short wave diathermy</li>
                      <li className="list-item">Intermittent lumbar and cervical traction</li>
                      <li className="list-item">Core strengthening exercises</li>
                      <li className="list-item">Cervical range of motion and strengthening exercises</li>
                      <li className="list-item"> Spinal extension exercises</li>        
                    </div>
                  </div>
                </div>


                <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card  ms-3">            
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bold">Knee</h5>
                      <li className="list-item">Hot water fomentation</li>
                      
                      
                      <li className="list-item">Electrotherapy and Hydrotherapy</li>
                      <li className="list-item">Quadriceps strengthening exercises</li>
                      <li className="list-item">Taping</li>
                      
                      <li className="list-item"> Knee range of motion exercises</li>  
                      <li className="list-item"> Mobilization for post operative ligament injuries and post operative total knee replacement</li>       
                    </div>
                  </div>
                </div>
                




              <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card mt-4">            
                    <div className="card-body">
                      <h5 className="card-title text-center text-center fw-bold mb-2">Shoulder</h5>
                      
                      
                      <li className="list-item">Capsule stretching exercises for frozen shoulder</li>
                      <br></br>
                      <li className="list-item">Shoulder strengthening exercises for post operative Arthroscopic repair of rotator cuff injury and shoulder replacement</li>
      
                    </div>
                  </div>
                </div>

               
              <div className="col-xs-12 col-sm-6">
                  <div className="card ortho-card mt-3 ms-3">            
                    <div className="card-body">
                      <h5 className="card-title text-center text-center fw-bold">Sports Medicine</h5>
                      <li className="list-item">Physiotherapy for ACL and PCL injury</li>
                      <li className="list-item">Physiotherapy for ligament sprains - Runner and jumpers knee and injuries around ankle</li>
                      <li className="list-item">Plantar fasciitis and achilles tendinitis</li>
                      <li className="list-item">Hamstring and gluteal muscle injuries</li>
                      <li className="list-item">Tennis elbow and Golfer's elbow</li>
                          
                    </div>
                  </div>
                </div>
            </div>
            
            </div>
         
         </div>
  </div>
  )
}

export default Service