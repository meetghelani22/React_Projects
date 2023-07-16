import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import "../assets/css/main.css";
const Onboarding = () => {
  const [check, setChecked] = useState({
    checkBox1: false,
    checkBox2: false,
  });
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prevState) => ({ ...prevState, [name]: checked }));
  };
  /*   useEffect(() => {
    console.log("Checks :", check);
  }, [check]); */
  return (
    <div className="d-flex flex-column herobg primary-bg text-white">
      <div className="d-flex justify-content-end pe-2">En</div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="d-flex justify-content-center text-center flex-column">
              <h1 className="fw-bold mb-4 ff-inter">
                Digital <br />
                Onboarding
              </h1>
              <p>To Successfully carry out the identification, you need: </p>
              <div className="row justify-content-between my-4">
                <div className="col d-flex flex-column">
                  <img
                    src="https://onboarding.rheingold.li/static/media/internet.e3aeb17f7523e634cae1f89e27142b5e.svg"
                    alt="globe"
                    className="img-fluid max-h-60 mb-3"
                  />
                  <div>Internet</div>
                </div>
                <div className="col d-flex flex-column">
                  <img
                    src="https://onboarding.rheingold.li/static/media/passport.d615b0a4c179a16d18c75ce366b90cf6.svg"
                    alt="passport"
                    className="img-fluid max-h-60 mb-3"
                  />
                  <div>Passport/ID</div>
                </div>
                <div className="col d-flex flex-column">
                  <img
                    src="https://onboarding.rheingold.li/static/media/camera.577114b5e37cfb0d44382673246b6620.svg"
                    alt="camera"
                    className="img-fluid max-h-60 mb-3"
                  />
                  <div>Camera</div>
                </div>
              </div>
              <p>
                The Identification is carried out by Applie AG on behalf of
                Rheingold Edelmetall AG & OZL Offenes Zolllager in Liechtenstein
                AG.
              </p>
              <div className="d-flex flex-column">
                <div className="form-check text-start mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkBox1"
                    checked={check.checkBox1}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    <span>
                      Check here to indicate that you read and agree on the
                      terms of the
                    </span>
                    <b className="text-decoration-underline mx-2">
                      Onboarding Agreement
                    </b>
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkBox2"
                    checked={check.checkBox2}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    <span>By creating an Account, you agree to our</span>
                    <b className="text-decoration-underline mx-2">Terms</b>
                    <span>and have read and acknowledge it.</span>
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <NavLink to="customer-form">
                  <button
                    className="onb-btn p-3 w-100"
                    type="button"
                    disabled={check.checkBox1 && check.checkBox2 ? false : true}
                  >
                    <span>Individual</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-end justify-content-between mt-2 pb-3 px-5">
        <div className="col">© 2022 RHEINGOLD-EDELMETALL AG</div>
        <div className="col text-center">
          <h5>Need Support?</h5>
          <p className="mb-1">Onboarding Guide</p>
          <p className="mb-1">PHONE :+423 392 61 01</p>
          <p className="mb-1">EMAIL :info@ozl.li</p>
        </div>
        <div className="col text-end">
          OZL Offenes Zolllager in Liechtenstein AG © 2022
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
