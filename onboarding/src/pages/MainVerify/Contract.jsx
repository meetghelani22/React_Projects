import React from "react";
import SideComp from "./Components/SideComp";

const Contract = () => {
  const customerForm = JSON.parse(
    sessionStorage.getItem("customerRegisterForm")
  );
  const addressForm = JSON.parse(sessionStorage.getItem("addressForm"));
  const incomeForm = JSON.parse(sessionStorage.getItem("incomeform"));
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 ">
          <div className="p-5">
            <div className="d-flex">
              <div>
                <h2 className="fw-semibold">Contract</h2>
                <p>
                  This is a legally agreement that creates, defines, and governs
                  mutual rights and obligations among the applicant and company
                </p>
              </div>
              <div className="mt-3">Skip</div>
            </div>
            <div className="bg-light bs1 p-5 rounded-3 mt-2">
              {customerForm && (
                <div className="row align-items-center justify-content-between contract">
                  <h2 className="text-center mb-4">Customer Details</h2>
                  <div className="col-lg-9">
                    <>
                      <p className="mb-2">
                        Name : {customerForm.first_name}{" "}
                        {customerForm.last_name}
                      </p>
                      <p className="mb-2">Email : {customerForm.email}</p>
                      <p className="mb-2">Phone : {customerForm.phone}</p>
                      <p className="mb-2">DOB : {customerForm.dob}</p>
                      <p className="mb-2">Address : {customerForm.address1}</p>
                      <p className="mb-2">City : {customerForm.city}</p>
                      <p className="mb-2">State : {customerForm.state}</p>
                      <p className="mb-2">Country : {customerForm.country}</p>
                    </>
                  </div>
                  <div className="col-lg-3">
                    {addressForm && (
                      <img
                        src={addressForm.addressFile1}
                        alt="addressimg"
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              )}
              {incomeForm && (
                <div className="row align-items-center justify-content-between mt-4 contract">
                  <h2 className="text-center mb-4">Income Details</h2>
                  <div className="col-lg-9">
                    <>
                      <p className="mb-2">Education : {incomeForm.education}</p>
                      <p className="mb-2">Industry : {incomeForm.industry}</p>
                      <p className="mb-2">Level : {incomeForm.level}</p>
                      <p className="mb-2">Reason : {incomeForm.reason}</p>
                      <p className="mb-2">
                        Annual Income : {incomeForm.annual}
                      </p>
                      <p className="mb-2">
                        Investment : {incomeForm.investment}
                      </p>
                    </>
                  </div>
                  <div className="col-lg-3">
                    {incomeForm && (
                      <img
                        src={incomeForm.incomeFile1}
                        alt="incomeimg"
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4 px-0">
          <SideComp />
        </div>
      </div>
    </div>
  );
};

export default Contract;
