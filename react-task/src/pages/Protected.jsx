import React from "react";
import { Navigate } from "react-router";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/head" replace />;
  }
  return children;
};

export default Protected;
