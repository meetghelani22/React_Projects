// * Form with validation and if all fields success, then success msg will be shown

import React, { useState } from "react";
import "../css/registration.css";
const Register = () => {
  // * Taking User Input
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobilenum: "",
    password: "",
    cnfpassword: "",
    dob: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // * Regular Expressions
  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const nameRegex = /^[a-z ,.'-]+$/i;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const [modal, setShowModal] = useState(false);
  const [error, setError] = useState({
    nameE: "",
    emailE: "",
    numberE: "",
    passwordE: "",
    cnfpasswordE: "",
  });
  // * Function to Validate the Data
  const validateForm = () => {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    let passwordError = "";
    let confirmpasswordError = "";
    if (!emailRegex.test(userData.email)) {
      emailError = "Enter Email Address.";
    } else {
      emailError = "";
    }
    if (!phoneRegex.test(userData.mobilenum)) {
      numberError = "Enter Mobile Number.";
    } else {
      numberError = "";
    }
    if (!nameRegex.test(userData.name)) {
      nameError = "Enter Valid Name";
    } else {
      nameError = "";
    }
    if (!passRegex.test(userData.password)) {
      passwordError = "Enter Valid Password";
    } else {
      passwordError = "";
    }
    if (!userData.cnfpassword) {
      confirmpasswordError = "Confirm Password Required";
    } else {
      if (userData.password !== userData.cnfpassword) {
        confirmpasswordError = "Password Doesn't Match";
      } else {
        confirmpasswordError = "";
      }
    }
    if (
      nameError ||
      emailError ||
      numberError ||
      passwordError ||
      confirmpasswordError
    ) {
      setError({
        nameE: nameError,
        emailE: emailError,
        numberE: numberError,
        passwordE: passwordError,
        cnfpasswordE: confirmpasswordError,
      });
      return false;
    } else {
      setError({
        nameE: "",
        emailE: "",
        numberE: "",
        passwordE: "",
        cnfpasswordE: "",
      });
      setShowModal(true);
      return true;
    }
    // return true;
  };
  // * Function to send data to API
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    // console.log("Data in userData State", userData);
    // * Fetch API
    if (isValid) {
      setShowModal(true);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          postName: userData.name,
          postEmail: userData.email,
          postNumber: userData.mobilenum,
          postPassword: userData.password,
          postDob: userData.dob,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("JSON DATA IS : ", json));
    } else {
      setShowModal(false);
      console.log("Please validate the Data Again");
    }
  };

  // * Toggle Password Switch
  const [passToggle, setPasswordToggle] = useState({
    tPass: false,
    tCnfPass: false,
  });
  const togglePass = (toggles) => {
    setPasswordToggle({ ...passToggle, [toggles]: !passToggle[toggles] });
  };
  return (
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-center align-items-center main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 bs p-5 rounded-3">
              <form action="" className="container" name="registrationForm">
                <div>
                  <h1 className="head position-relative mb-4">Registration</h1>
                </div>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <label className="form-label"> Name</label>
                    <input
                      required
                      type="text"
                      className={
                        error.nameE ? "form-control line" : "form-control"
                      }
                      name="name"
                      placeholder="Enter Name"
                      value={userData.name}
                      onChange={handleChange}
                    />
                    {error.nameE && (
                      <div className="text-danger mt-2">{error.nameE}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Email</label>
                    <input
                      required
                      type="text"
                      className={
                        error.emailE ? "form-control line" : "form-control"
                      }
                      name="email"
                      placeholder="Enter Email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                    {error.emailE && (
                      <div className="text-danger mt-2">{error.emailE}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      required
                      type="number"
                      className={
                        error.numberE ? "form-control line" : "form-control"
                      }
                      name="mobilenum"
                      placeholder="Enter Number"
                      value={userData.mobilenum}
                      onChange={handleChange}
                    />
                    {error.numberE && (
                      <div className="text-danger mt-2">{error.numberE}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">D.O.B</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={userData.dob}
                      onChange={handleChange}
                    />
                    {/* {!error.dobValid && (
                      <div className="text-danger mt-2">{error.dobError}</div>
                    )} */}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Password</label>
                    <div className="position-relative">
                      <input
                        required
                        type={passToggle.tPass ? "text" : "password"}
                        className={
                          error.passwordE ? "form-control line" : "form-control"
                        }
                        name="password"
                        placeholder="Enter Password"
                        value={userData.password}
                        onChange={handleChange}
                      />
                      <div className="form-check form-switch position-absolute tg">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="tPass"
                          onClick={() => togglePass("tPass")}
                        />
                      </div>
                    </div>
                    {error.passwordE && (
                      <div className="text-danger mt-2">{error.passwordE}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Confirm Password</label>
                    <div className="position-relative">
                      <input
                        required
                        type={passToggle.tCnfPass ? "text" : "password"}
                        className={
                          error.cnfpasswordE
                            ? "form-control line"
                            : "form-control"
                        }
                        name="cnfpassword"
                        placeholder="Confirm Password"
                        value={userData.cnfpassword}
                        onChange={handleChange}
                      />
                      <div className="form-check form-switch position-absolute tg">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="tPass"
                          onClick={() => togglePass("tCnfPass")}
                        />
                      </div>
                    </div>
                    {error.cnfpasswordE && (
                      <div className="text-danger mt-2">
                        {error.cnfpasswordE}
                      </div>
                    )}
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-color"
                      // data-bs-toggle="modal"
                      // data-bs-target="#formModal"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  <div>
                    {modal && (
                      <h3 className="mt-3 text-danger text-center">
                        Form Submitted Successfully
                      </h3>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
