import React from "react";
import Tick from "../../assets/images/tick-mark.png";
import { useNavigate } from "react-router-dom";
const SuccessfulMsg = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/address-verification");
  }, 5000);
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center">
      <div className="row align-items-center">
        <div className="col-8 rounded-3 text-center mx-auto p-5">
          <img
            src={Tick}
            height={90}
            width={90}
            className="img-fluid"
            alt="success"
          />
          <h1 className="pt-3 pb-1 text-center">Thankyou</h1>
          <h6 className="text-center">
            Your application was successfully submitted
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulMsg;
