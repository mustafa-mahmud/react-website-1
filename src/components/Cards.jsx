import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div className="card" style={{ width: "30rem", marginBottom: "2rem" }}>
        <img src={props.imgsrc} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.para} Some quick example text to build on the card title and
            make up the bulk of the card's content.
          </p>
          <NavLink to="/" className="btn btn-primary">
            Go Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Cards;
