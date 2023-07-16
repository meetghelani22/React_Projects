import React from "react";
import RegistrationForm from "./RegistrationForm";
import ozlLogo from "../../assets/images/ozl_logo.png";
import rheingoldlogo from "../../assets/images/rheingold.png";
const CustomerForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <RegistrationForm />
        </div>
        <div className="col-lg-6 d-flex px-0">
          <div className="form-side backimg primary-bg d-flex flex-column flex-fill text-white">
            <div className="d-none d-lg-flex justify-content-end align-items-center">
              <div className="row mx-0 justify-content-center justify-content-md-end needsupport">
                <div className="col-auto">
                  <ul className="list-inline list-unstyled mb-0 py-3">
                    <li className="d-lg-none d-xxl-inline-block list-inline-item cursor-pointer">
                      <b>Need Support?</b>
                    </li>
                    <li className="list-inline-item">
                      <span>Phone</span>:{" "}
                      <a
                        className="text-white text-decoration-none"
                        href="tel:+423 392 61 01"
                      >
                        +423 392 61 01
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <span>Email</span>:{" "}
                      <a
                        className="text-white text-decoration-none"
                        href="mailto:info@ozl.li"
                      >
                        info@ozl.li
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-5 my-auto">
              <div className="mb-4">
                <img src={ozlLogo} alt="ozlLogo" className="img-fluid me-4" />
                <img
                  src={rheingoldlogo}
                  alt="rheingoldlogo"
                  className="img-fluid"
                />
              </div>
              <h1 className="h1 fw-bold ">
                Digital <br /> Onboarding
              </h1>
            </div>
            <div className="px-lg-4 px-xl-5 pb-3 d-none d-lg-block fs-12">
              <div className="row justify-content-between">
                <div className="col-12 col-md text-center text-md-start mt-2">
                  © 2022 RHEINGOLD-EDELMETALL AG
                </div>
                <div className="col-12 col-md text-center text-md-end mt-2">
                  OZL Offenes Zolllager in Liechtenstein AG © 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
