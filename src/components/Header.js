import React from "react"

import "../components/css/Header.css"
import {Link, Switch, Route} from "react-router-dom"
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import Basket from "./Basket"

function Header(props){
    const {onAdd,onRemove,countCartItems} = props; 


    const {cartItems} = props;
    

    // const cartItems =[{
    // id: 1,
    //     link: "/product/detail",
    //     name: "Ankle air splint",
    //     img: "../../images/products/ortho/ankle/Ankle air splint.png",
    //     price: 180,
    //     isNew: true,
    //     description:
    //       "Nulla sodales sit",
    // }];
    return(
        <header>
               
          <nav  className="navbar bg-dark navbar-expand-lg fixed-top">
  
            <a className="navbar-brand ms-5 fs-3 fw-semibold text-white" href="/">Medikove</a>
          
               <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarCollapse"> 
                <ul className="navbar-nav mx-auto fs-5">
                    <li className="navbar-item active"> 
                        <Link to ="/" className="nav-link">
                        Services
                        </Link>
                    </li>

                    <li className="navbar-item"> 
                        <Link to ="/gear" className="nav-link">
                        Products
                        </Link>
                    </li>

                    <li className="navbar-item"> 
                        <Link to ="/expertise" className="nav-link">
                         Help Center
                        </Link>
                    </li>

                    <li className="navbar-item"> 
                        <Link to ="/contactus" className="nav-link">
                         About Us
                        </Link>
                    </li>

                      {/* <div className="position-relative d-inline me-3">
                                <Link to="/cart" className="btn btn-primary">
                                <IconCart3 Link to ="/Cart" className="i-va" />
                                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                                    {props.number}
                                </div>
                                </Link>
                            
                    </div>  */}
                    
                </ul>

                <a href="#/cart">
                    Cart{' '}
                    {countCartItems ? (
                        <button className="badge" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                    </a>{' '}
                    
              <li> <Link to ="/doctorlogin" className="dr-login fs-5"> Client Login </Link></li>  
               </div>   
         </nav>
         
         <div class="offcanvas offcanvas-end offcanvas-size-xl" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
     <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   
   <stack>
   
   { cartItems && 
          <stack gap={3}> 
      
           <Basket  key={cartItems.id} 
                     cartItems = {props.cartItems} 
                      onAdd={onAdd} 
                      onRemove={onRemove} />
         </stack>
   }

   </stack>
  
   

    
 
    
    </div>
  </div>
    </header>   

    )
}

export default Header