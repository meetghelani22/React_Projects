import React from "react";
import AddressForm from "./Components/AddressForm";
import SideComp from "./Components/SideComp";

const AddressVerification = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="p-5">
            <AddressForm />
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <SideComp />
        </div>
      </div>
    </div>
  );
};

export default AddressVerification;
