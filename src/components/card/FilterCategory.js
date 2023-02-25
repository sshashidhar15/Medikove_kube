import React from "react";
import { Link } from "react-router-dom";
import "../../components/css/Gear.css"

const FilterCategory = (props) => {
  return (
  <div>    
    <div className="card mt-100">
      <div className="card-header fw-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/gear" className="text-decoration-none stretched-link">
            Orthopaedics Physiotherapy
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/gear" className="text-decoration-none stretched-link">
            Cardio Respiratory Equipment
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/gear" className="text-decoration-none stretched-link">
            All Products
          </Link>
        </li>
        
      </ul>
    </div>
</div>
  )
};

export default FilterCategory;
