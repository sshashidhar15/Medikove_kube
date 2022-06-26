import React from "react"
import { lazy} from "react";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { isCompositeComponent } from "react-dom/test-utils";

const FilterCategory = lazy(() => import("./card/FilterCategory"));
const CardProductGrid = lazy(() =>import("./card/CardProductGrid"));
const CardProductList = lazy(() => import("../components/card/CardProductList"));



function Gear()
{

  let products = data.products;

    const[item,setItem] = React.useState({
        currentProducts: products.slice(0,4),
        currentPage: null,
        totalPages: null,
        totalItems: 0,
        view: "grid",
      })
 
  console.log(item.currentProducts)

    return (   
                <React.Fragment>
                  <div
                    className="p-5 bg-primary bs-cover"
                    style={{
                      backgroundImage: "url(../components/images/hero.png)",
                    }}>
                    
                  
                  </div>
  
                  <div className="container-fluid md-3">
                    <div className="row">
                      <div className="col-md-3">
                        <FilterCategory />   
                      </div>
                    
                    
                      <div className="col-md-9">
                        
                        <div className="row g-3 mt-0">
                          {item.view === "grid" &&
                            item.currentProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-4">
                                  <CardProductGrid data={product} />
                                 </div>
                              );
                            })}  
                        </div>
                  
                      </div>
                    </div>
                    
                  </div>
                </React.Fragment>
              )
}
          
export default Gear