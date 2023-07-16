import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./OnBoarding/Onboarding";
import CustomerForm from "./Customer_Form/CustomerForm";
import IdentityVerification from "./MainVerify/IdentityVerification";
import AddressVerification from "./MainVerify/AddressVerification";
import IncomeVerification from "./MainVerify/IncomeVerification";
import Contract from "./MainVerify/Contract";
import SideComp from "./MainVerify/Components/SideComp";
const Layout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="customer-form" element={<CustomerForm />} />
        <Route
          path="/identity-verification"
          element={<IdentityVerification />}
        />
        <Route path="/address-verification" element={<AddressVerification />} />
        <Route path="/income-verification" element={<IncomeVerification />} />
        <Route path="/contract" element={<Contract />} />
        {/* <Route path="/side" element={<SideComp />}></Route> */}
      </Routes>
    </Router>
  );
};

export default Layout;
