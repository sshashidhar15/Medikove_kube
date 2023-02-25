import React from "react"
import { lazy} from "react";
// import { data } from "../data";

import CardProductGrid from "./card/CardProductGrid"
import FilterCategory from "./card/FilterCategory"
import "../components/css/Gear.css"


function Gear(props)
{



  const {products,onAdd,onRemove} = props;
  let orthoProduct = products.prod.ortho
  let cardioProduct = products.prod.cardio

  let count = 0
  
    const[item,setItem] = React.useState({
        orthoProducts: orthoProduct,
        cardioProducts: cardioProduct,
        currentPage: null,
        totalPages: null,
        totalItems: 0,
        view: "grid",
        cart:0
      })


     function addCart(id)
     {
      let globalCart = [{id:1}]
      let kid =[]
      let localCart = {}
      let t = 0
      item.currentProducts.map((prd) => {
          if (prd.id===id){
            localCart = prd
            count = count + 1
            t = count
            localCart['count'] = t 
            kid.push(id)
          }
          
          globalCart.map(chkPrd => {
            //console.log(prd.id)
            if(prd.id === chkPrd.id){
              console.log("do nothing")
            }
            else{
              globalCart.push(localCart)
              count = 0
              t = 0
            }
          })
         
         
    })
    
    console.log(globalCart)
  }
    
    return (   
                  
                  <div >
                    <div className="row">
                      <div className="col-md-3 category">
                        <FilterCategory />   
                      </div>
                    
                    
                      <div className="col-md-9 mt-5">    
                        <div className="row">
                          {item.view === "grid" &&
                            item.orthoProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-3">
                                  <CardProductGrid product={product} onAdd={onAdd}/>
                                 </div>
                              );
                            
                            })}

                            {item.view === "grid" &&
                            item.cardioProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-3">
                                  <CardProductGrid key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}/>
                                 </div>
                              );
                            
                            })}
                           
                        </div>
                     
                      </div>
                    </div> 
                  </div>
                
              )
}     

export default Gear