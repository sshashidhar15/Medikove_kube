import React from "react";
import { Link } from "react-router-dom";

const FilterCategory = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Activities of Daily Living
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Exercise Equipment
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Physical Therapy Products
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
           Hand Therapy
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Ambulation Training Equipment
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Cardio Respiratory Exercise
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
          Flexibility & Stretching Equipment
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
          Treatment Tables
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/" className="text-decoration-none stretched-link">
            Medical Diagnostics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
