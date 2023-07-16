import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import HeadAndTail from "./HeadAndTail";
import Login from "./Login";
import Protected from "./Protected";
const Layout = () => {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <>
      <Router>
        <Navbar />
        {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/head"
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <HeadAndTail />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default Layout;
