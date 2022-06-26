import React from "react"
import { lazy} from "react";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { isCompositeComponent } from "react-dom/test-utils";

const FilterCategory = lazy(() => import("../components/card/FilterCategory"));
const CardProductGrid = lazy(() =>import("../components/card/CardProductGrid"));
const CardProductList = lazy(() => import("../components/card/CardProductList"));


function Gear(){



    const[item,setItem] = React.useState({
        currentProducts: [],
        currentPage: null,
        totalPages: null,
        totalItems: 0,
        view: "grid",
      })
    
      function getProducts() {
        let products = data.products;
        products = products.concat(products);
        products = products.concat(products);
        products = products.concat(products);
        products = products.concat(products);
        products = products.concat(products);
        return products;
      };
    
      function onPageChanged(page) {
        let products = getProducts();
        const { currentPage, totalPages, pageLimit } = page;
        const offset = (currentPage - 1) * pageLimit;
        const currentProducts = products.slice(offset, offset + pageLimit);
         setItem({ currentPage, currentProducts, totalPages });
      };
    
      function onChangeView(view) {
         setItem({ view });
      };
    

    return (   
                <React.Fragment>
                  <div
                    className="p-5 bg-primary bs-cover"
                    style={{
                      backgroundImage: "url(../components/images/hero.png)",
                    }}
                  >
                    <div className="container text-center">
                      <span className="display-5 px-3 bg-white rounded shadow">
                        T-Shirts
                      </span>
                    </div>
                  </div>
                 {/* <Breadcrumb /> */}
                  <div className="container-fluid mb-3">
                    <div className="row">
                      <div className="col-md-3">
                        <FilterCategory />
                       {/* <FilterPrice />
                        <FilterSize />
                        <FilterStar />
                        <FilterColor />
                        <FilterClear />
                        <FilterTag />
                <CardServices /> */}
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-8">
                            <span className="align-middle fw-bold">
                             {item.totalItems} results for{" "}
                              <span className="text-warning">"t-shirts"</span>
                            </span>
                          </div>
                         {/* <div className="col-md-4">
                            <select
                              className="form-select mw-180 float-start"
                              aria-label="Default select"
                            >
                              <option value={1}>Most Popular</option>
                              <option value={2}>Latest items</option>
                              <option value={3}>Trending</option>
                              <option value={4}>Price low to high</option>
                              <option value={4}>Price high to low</option>
                             </select> 
                            <div className="btn-group ms-3" role="group">
                              <button
                                aria-label="Grid"
                                type="button"
                                onClick={onChangeView("grid")}
                                className={`btn ${
                                   item.view === "grid"
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                }`}
                              >
                                <FontAwesomeIcon icon={faTh} />
                              </button> 
                              <button
                                aria-label="List"
                                type="button"
                                onClick={onChangeView("list")}
                                className={`btn ${
                                   item.view === "list"
                                    ? "btn-primary"
                                    : "btn-outline-primary"
                                }`}
                              >
                                <FontAwesomeIcon icon={faBars} />
                              </button>
                            </div>
                          </div>
                        </div>
                              <hr />
                        <div className="row g-3">
                          {item.view === "grid" &&
                            item.currentProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-4">
                                  <CardProductGrid data={product} />
                                </div>
                              );
                            })}
                        {/*}  { item.view === "list" &&
                            item.currentProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-12">
                                  <CardProductList data={product} />
                                </div>
                              );
                            })}*/}
                        </div>
                        <hr />
                      {/* <Paging
                          totalRecords={item.totalItems}
                          pageLimit={9}
                          pageNeighbours={3}
                          onPageChanged={item.onPageChanged}
                          sizing=""
                          alignment="justify-content-center" 
                          /> */} 
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          
export default Gear