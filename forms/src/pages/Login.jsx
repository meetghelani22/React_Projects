// * Simple Form to show and Hide some field and also show and hide password functionality

import React, { useState } from "react";
import "../css/Login.css";
const Login = () => {
  const [contactInfo, setContactInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    mnum: "",
    password: "",
    cnfpassword: "",
    gender: "",
    dob: "",
  });

  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Values of Forms are : ",
      "\n First Name : ",
      contactInfo.fname,
      "\n Last Name : ",
      contactInfo.lname,
      "\n Email : ",
      contactInfo.email,
      "\n Mobile Number : ",
      contactInfo.mnum,
      "\n Password : ",
      contactInfo.password,
      contactInfo.cnfpassword,
      "\n Gender : ",
      contactInfo.gender,
      "\n Date of Birth : ",
      contactInfo.dob
    );
    alert("Form Submitted Successfully...!!!");
  };
  // * Toggle Password button
  const [passShown, setPassShown] = useState();
  const togglePass = () => {
    setPassShown(!passShown);
  };
  // * Toggle Gender Checkbox
  const [show, setShow] = useState(true);
  const [text, showText] = useState();
  const toggleText = text ? "Hide" : "Show";
  const handleToggle = () => {
    setShow(!show);
    showText(!text);
    console.log(show);
  };
  return (
    <div className="container-fluid background-img p-0">
      <div className="forms">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-white bg-color p-5 rounded-3">
              <h1 className="text-center">SIGN UP</h1>
              <form action="" name="newform" onSubmit={handleSubmit}>
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <label className="form-label">First Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="Enter First Name"
                      value={contactInfo.fname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Last Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="lname"
                      placeholder="Enter Last Name"
                      value={contactInfo.lname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Email</label>
                    <input
                      required={true}
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email Address"
                      value={contactInfo.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      name="mnum"
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                      value={contactInfo.mnum}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      value={contactInfo.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Confirm Password</label>
                    <div className="position-relative">
                      <input
                        type={passShown ? "text" : "password"}
                        className="form-control"
                        name="cnfpassword"
                        placeholder="Confirm Password"
                        value={contactInfo.cnfpassword}
                        onChange={handleChange}
                      />
                      <div className="form-check form-switch position-absolute tg">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="tPass"
                          onClick={togglePass}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    {show && (
                      <div>
                        <label className="form-label">Gender</label>
                        <div className="">
                          <select
                            name="gender"
                            className="form-control"
                            onChange={handleChange}
                          >
                            <option value="default">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">D.O.B</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={contactInfo.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="" className="form-label">
                      TOGGLE Gender
                    </label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="toggle"
                        defaultChecked={show}
                        id="show"
                        value={true}
                        onClick={handleToggle}
                      />
                      <label className="form-check-label" htmlFor="show">
                        {toggleText} Gender
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary me-3 login-btn"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-primary me-3 login-btn"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
              <div className="row d-none my-3">
                <div className="col-lg-6">
                  <p>First Name : {contactInfo.fname}</p>
                  <p>Last Name : {contactInfo.lname}</p>
                  <p>Email Address : {contactInfo.email}</p>
                </div>
                <div className="col-lg-6">
                  <p>Mobile Number : {contactInfo.mnum}</p>
                  <p>Gender : {contactInfo.gender}</p>
                  <p>D.O.B : {contactInfo.dob}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
