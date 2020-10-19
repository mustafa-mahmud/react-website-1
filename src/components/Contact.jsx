import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    msg: "",
    check: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `${data.fullname} ${data.email} ${data.password} ${data.msg} ${data.check}`
    );
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact with us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={data.password}
                  onChange={inputEvent}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="check"
                  value={data.check}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
