import React from "react"
import "../components/css/Products.css"
import product1 from "./images/product1.png"
import product2 from "./images/product2.jpg"
import product3 from "./images/product3.png"

import process from "./images/process.png"

function Products()
{
return(
<div className="equipment">
    <h2 className="equip-text"> Products </h2>
    <div className=" mt-4 equip-sub-text">
      <h4>Effective treatment needs better equipment.</h4>
      
    </div>
    <div class="d-flex justify-content-evenly">
        
         <div><img src={product1} class="card-img-top prod-one" alt="..."></img></div>
         <div><img src={product2} class="card-img-top prod-one" alt="..."></img></div>
         <div><img src={product3} class="card-img-top prod-one" alt="..."></img></div>    
         
</div>
<button className= " products-bk btn btn-primary btn-secondary process-bk"> Get Equipment </button>
</div>

)}

export default Products