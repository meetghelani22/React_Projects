import React from "react";
import Calculator from "./Calculator";
import Newcalc from "./Newcalc";
import "./App.css";

const App = () => {
  return (
    <div className="container vh">
      <h1 className="text-center mb-3">Calculator</h1>
      {/* <Calculator></Calculator> */}
      <Newcalc></Newcalc>
    </div>
  );
};

export default App;
