import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ozl from "../../../assets/images/ozl_logo.png";
import rheingoldlogo from "../../../assets/images/rheingold.png";
const SideComp = () => {
  const [progressNum, setProgressNum] = useState(0);
  const [progress, setProgress] = useState(
    JSON.parse(sessionStorage.getItem("progress"))
  );
  useEffect(() => {
    // console.log("Inside Side Component");
    if (!sessionStorage.getItem("progress")) {
      sessionStorage.setItem("progress", JSON.stringify([]));
    }
    const handleNum = () => {
      if (progress && progress.length === 1) {
        setProgressNum(50);
      } else if (progress && progress.length === 2) {
        setProgressNum(100);
      } else {
        setProgressNum(0);
      }
      console.log("Number", progressNum);
    };
    handleNum();
  }, [progress, progressNum]);

  return (
    <div className="form-side overflow-auto primary-bg backimg">
      <div className="d-none d-lg-flex justify-content-end align-items-center">
        <div className="row mx-0 justify-content-center justify-content-md-end needsupport">
          <div className="col-auto">
            <ul className="list-inline list-unstyled mb-0 py-3">
              <li className="d-lg-none text-white d-xxl-inline-block list-inline-item cursor-pointer">
                <b>Need Support?</b>
              </li>
              <li className="list-inline-item text-white">
                <span>Phone</span>:{" "}
                <a
                  className="text-white text-decoration-none"
                  href="tel:+423 392 61 01"
                >
                  +423 392 61 01
                </a>
              </li>
              <li className="list-inline-item text-white">
                <span>Email</span>:{" "}
                <a
                  className="text-white text-decoration-none"
                  href="mailto:info@ozl.li"
                >
                  :info@ozl.li
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pe-3">EN</div>
      </div>
      <div className="px-5 my-auto">
        <div className="mb-4">
          <img src={ozl} alt="ozlLogo" className="img-fluid me-4" />
          <img src={rheingoldlogo} alt="rheingoldlogo" className="img-fluid" />
        </div>
        <h1 className="h1 fw-bold text-white mb-3">Digital Onboarding</h1>
        <ul className="pt-3 pt-lg-0 list-inline list-unstyled">
          <li className="align-middle h4 list-inline-item mb-0 me-lg-4 text-white">
            {progressNum}
            {/* {Math.ceil(progressNum)} */}
            {"%"}
          </li>
          <li className="list-inline-item align-middle mb-0">
            <span className="badge bg-black fw-normal rounded-0 py-2 px-3">
              Please complete Process
            </span>
          </li>
        </ul>
        <div className="processStepmain text-white">
          {/* <div className={`process-step ${progress >= 33 ? "active" : ""}`}>
            <span className="counter"></span>
            <div className="process-detail d-none d-lg-block">
              <NavLink
                className="text-decoration-none"
                to="/identity-verification"
              >
                <h6 className="h5 fw-semibold mb-2 text-white text-capitalize ">
                  Identity verification
                </h6>
              </NavLink>
              <p className="mb-1">
                We foster digital trust by applying various methods of identity
                verification to combat fraud and increase security - all with a
                single platform.
              </p>
              <div className="d-flex flex-wrap align-items-center identityList">
                <div className="me-3 mt-1 position-relative identitylistItem ">
                  <span>ID Scan</span>
                </div>
                <div className="me-3 mt-1 position-relative identitylistItem ">
                  <span>Hologram Detection</span>
                </div>
                <div className="mt-1 position-relative identitylistItem ">
                  <span>Face Detection</span>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className={`process-step ${
              progress && progress.includes("address") ? "active" : ""
            }`}
          >
            <span className="counter"></span>
            <div className="process-detail d-none d-lg-block">
              <NavLink
                className="text-decoration-none"
                to="/address-verification"
              >
                <h6 className="h5 fw-semibold mb-2 text-white text-capitalize">
                  Address Verification
                </h6>
              </NavLink>
              <p className="mb-1">
                To verify the address of your residence, you need to provide
                scan or photo of documents issued in your name
              </p>
            </div>
          </div>
          <div
            className={`process-step ${
              progress && progress.includes("income") ? "active" : ""
            }`}
          >
            <span className="counter"></span>
            <div className="process-detail d-none d-lg-block">
              <NavLink
                className="text-decoration-none"
                to="/income-verification"
              >
                <h6 className="h5 fw-semibold mb-2 text-white text-capitalize">
                  Income And Disclosure
                </h6>
              </NavLink>
              <p className="mb-1">
                You can upload bank statements for last six months or ITR
                acknowledgement or salary slips with sign and stamp as your
                income proof and disclosure.
              </p>
            </div>
          </div>
          <div
            className={`process-step ${
              progress && progress.includes("income") ? "active" : ""
            }`}
          >
            <span className="counter"></span>
            <div className="process-detail d-none d-lg-block">
              <NavLink className="text-decoration-none" to="/contract">
                <h6 className="h5 fw-semibold mb-2 text-white text-capitalize">
                  Contract
                </h6>
              </NavLink>
              <p className="mb-1">
                This is a legally agreement that creates, defines, and governs
                mutual rights and obligations among the applicant and company
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-lg-3 px-xl-5 pb-3 d-none d-lg-block text-white fs-12">
        <div className="row justify-content-between align-items-end">
          <div className="col-12 col-xl text-xl-start mt-2">
            © 2022 RHEINGOLD-EDELMETALL AG
          </div>
          <div className="col-12 col-xl text-xl-end order-md-2 mt-2">
            OZL Offenes Zolllager in Liechtenstein AG © 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComp;
