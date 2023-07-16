// ? Form to display error according to validation and show error msg and chage its css

// * With using CSS's Order Class to set the lines
import React, { useState } from "react";
import "../../css/errorform.css";
const ErrorForm = () => {
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState({
    eLength: false,
    eUpperCase: false,
    eLowerCase: false,
    eNumber: false,
    eSpecial: false,
  });
  const handleChange = (e) => {
    setPass(e.target.value);
    checkData(e.target.value);
  };
  const checkData = (pass) => {
    let len = pass.length > 8 ? true : false;
    let up = pass.match(/[A-Z]/) ? true : false;
    let low = pass.match(/[a-z]/) ? true : false;
    let num = pass.match(/[0-9]/) ? true : false;
    let spe = pass.match(/[^A-Za-z0-9]/) ? true : false;
    if (up || low || len || num || spe) {
      setErrors({
        eLength: len,
        eUpperCase: up,
        eLowerCase: low,
        eNumber: num,
        eSpecial: spe,
      });
    }
  };

  const handleSubmit = () => {
    let checkErrors = { ...errors };
    if (
      checkErrors.eLength &&
      checkErrors.eUpperCase &&
      checkErrors.eLowerCase &&
      checkErrors.eNumber &&
      checkErrors.eSpecial
    ) {
      alert("Login Successfully...!!!");
      setShow(false);
    } else {
      alert("Please Complete Form");
      setShow(true);
    }
    console.log(checkErrors);
  };
  return (
    <div className="container-fluid back px-0">
      <div className="drop pt-5 d-flex vh-100 justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="row bs1 g-2 p-5 rounded-3">
                <h2 className="text-center">Login Form</h2>
                <div className="col-lg-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name=""
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    name=""
                    id="pass"
                    className="form-control"
                    value={pass}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 my-3 d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-outline-success"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            {pass && show && (
              <div className="col d-flex justify-content-center align-items-center flex-column">
                <p
                  className={
                    errors.eUpperCase ? "text-success order-5" : "text-danger"
                  }
                >
                  Should contain UpperCase
                </p>
                <p
                  className={
                    errors.eLowerCase ? "text-success order-5" : "text-danger"
                  }
                >
                  Should contain lowercase
                </p>

                <p
                  className={
                    errors.eLength ? "text-success order-5" : "text-danger"
                  }
                >
                  Should contain atleast 8 characters
                </p>

                <p
                  className={
                    errors.eNumber ? "text-success order-5" : "text-danger"
                  }
                >
                  Should Contain atleast one Number
                </p>
                <p
                  className={
                    errors.eSpecial ? "text-success order-5" : "text-danger"
                  }
                >
                  Should Contain atleast one Special Character
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorForm;

// * With Array and Sorting Method to sort Data
/* import React, { useState } from "react";
import "../css/form.css";
const ErrorForm = () => {
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState([
    { eMsgLen: "Length Should be 8", eCondition: false },
    { eMsgUpper: "Should contain UpperCase", eCondition: false },
    { eMsgLower: "Should contain LowerCase", eCondition: false },
    { eMsgNumber: "Should contain Numbers", eCondition: false },
    { eMsgSpecial: "Should contain SpecialCharacter", eCondition: false },
  ]);
  const handleChange = (e) => {
    setPass(e.target.value);
    checkData(e.target.value);
  };
  const checkData = (pass) => {
    let lens = errors;
    // * For Length
    if (pass.length > 8) {
      lens[0].eCondition = false;
      setErrors(lens);
    } else {
      lens[0].eCondition = true;
      setErrors(lens);
    }
    // * For Upper Case
    if (pass.match(/[A-Z]/)) {
      lens[1].eCondition = false;
      setErrors(lens);
    } else {
      lens[1].eCondition = true;
      setErrors(lens);
    }
    // * For Lower Case
    if (pass.match(/[a-z]/)) {
      lens[2].eCondition = false;
      setErrors(lens);
    } else {
      lens[2].eCondition = true;
      setErrors(lens);
    }
    // * For Number
    if (pass.match(/[0-9]/)) {
      lens[3].eCondition = false;
      setErrors(lens);
    } else {
      lens[3].eCondition = true;
      setErrors(lens);
    }
    // * For Special Character
    if (pass.match(/[^A-Za-z0-9]/)) {
      lens[4].eCondition = false;
      setErrors(lens);
    } else {
      lens[4].eCondition = true;
      setErrors(lens);
    }
  };
  const sorted = [...errors].sort((a, b) => {
    if (a.eCondition && !b.eCondition) {
      return -1;
    }
  });
  return (
    <div className="container-fluid back px-0">
      <div className="drop pt-5 d-flex justify-content-center align-items-center">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="row bs1 p-5 rounded-3">
                <h2 className="text-center">Login Form</h2>
                <div className="col-lg-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name=""
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-12">
                  <label htmlFor="pass" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    name=""
                    id="pass"
                    className="form-control"
                    value={pass}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-12 my-3 d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-3">
            <div className="col-lg-5">
              {pass &&
                sorted.map((items, index) => (
                  <div key={index}>
                    <p
                      className={
                        items.eCondition ? "text-danger" : "text-success"
                      }
                    >
                      {items.eMsgLen}
                    </p>
                    <p
                      className={
                        items.eCondition ? "text-danger" : "text-success"
                      }
                    >
                      {items.eMsgUpper}
                    </p>
                    <p
                      className={
                        items.eCondition ? "text-danger" : "text-success"
                      }
                    >
                      {items.eMsgLower}
                    </p>
                    <p
                      className={
                        items.eCondition ? "text-danger" : "text-success"
                      }
                    >
                      {items.eMsgNumber}
                    </p>
                    <p
                      className={
                        items.eCondition ? "text-danger" : "text-success"
                      }
                    >
                      {items.eMsgSpecial}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorForm; */
