import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex">
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>{props.title}</h1>
                <h2 className="my-3">We are the team</h2>
                <div className="mt-3">
                  <NavLink to={props.href} className="btn btn-success rounded">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img">
                <img
                  className="animated img-fluid animated"
                  src={props.imgsrc}
                  alt={props.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
