import React from "react"

// import { Button, Stack } from "react-bootstrap"


function Basket(props){
    const {cartItems,onAdd,onRemove} = props;
    
    // console.log(cartItems.length)

    return(
         
          <aside className="block">
            <h2>Cart Items</h2>
            
            {cartItems.length === 0  && <div>cart is empty</div>}:
               
                            
                {cartItems && cartItems.map((item)=> (

            <div className="d-flex align-items-center justify-content-evenly"> 

                     
             <div key={item.id}  className="row">
                    
                   <img className="col-3" src={item.img}/>
    
                    <div className="col-3">{item.name}</div>
                    <div className="col-3">
                            <button onClick={()=>onAdd(item)} className="add">+</button>{''}
                            <button onClick={()=>onRemove(item)} className="remove">-</button>
                            </div>
                 
                   <div className="col-3 text-right">
                    {item.qty}*${item.price.toFixed(2)}
                   </div>
                
            </div>
          </div>
      

))}

            
          </aside>
    );
}

export default Basket
