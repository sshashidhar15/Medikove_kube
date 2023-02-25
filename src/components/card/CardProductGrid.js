import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header"
import "../../components/css/Gear.css"

function CardProductGrid(props) {

  const { product, onAdd } = props;

  return(
  <div className="card h-80 prod-height"> 
      <img src={product.img}  className="card-img-top prod-img" alt="..." / >
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={product.link} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">Rs {product.price}</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ms-2">{product.originPrice}</del>
          )}
      
        </div>
        
           <button
            type="button"
            className="btn btn-sm btn-secondary"  
            title="Add to cart"
            onClick={() => onAdd(product)}
            data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">      
            {/* <FontAwesomeIcon icon={faCartPlus} ms-3 /> */}
            Add to Cart
          </button>
        </div>
        
  
  
      </div>   
  );

} 
export default CardProductGrid