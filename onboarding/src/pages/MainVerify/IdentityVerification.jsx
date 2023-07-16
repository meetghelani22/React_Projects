import React from "react";
import Identity from "./Components/Identity";
import SideComp from "./Components/SideComp";

const IdentityVerification = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="p-5">
            <Identity />
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <SideComp />
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;
