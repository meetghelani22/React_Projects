import React from "react";
import SideComp from "./Components/SideComp";
import IncomeDisclosure from "./Components/IncomeDisclosure";
const IncomeVerification = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="p-5">
            <IncomeDisclosure />
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <SideComp />
        </div>
      </div>
    </div>
  );
};

export default IncomeVerification;
