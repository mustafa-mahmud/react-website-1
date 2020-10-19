import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Services = () => {
  console.log(Sdata);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                {Sdata.map((val, index) => {
                  return (
                    <Cards
                      para={val.para}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      alt={index + "img"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
