import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Newjson from "./pages/Newjson";
import Login from "./pages/Login";
import Datajson from "./pages/Datajson";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import Effect from "./pages/Effect";
// import "./css/registration.css";
// import "./css/Login.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/signup" element={<Login />} />
          <Route path="/newsignup" element={<Register />} />
          <Route path="/datajson" element={<Datajson />} />
          <Route path="/effect" element={<Effect />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar></Navbar> */}
      {/* <Effect></Effect> */}
      {/* <Form></Form> */}
      {/* <NewSignUp></NewSignUp> */}
      {/* <Signup></Signup> */}
      {/* <Datajson></Datajson> */}
      {/* <Newjson></Newjson> */}
    </div>
  );
};

export default App;
