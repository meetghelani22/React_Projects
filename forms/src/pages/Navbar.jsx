import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg bg-dark navbar-dark position-sticky w-100">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-500" to="/">
            HOME
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav justify-content-between w-50 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/signup">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/newsignup">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/datajson">
                  JsonData
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/effect">
                  UseEffect
                </NavLink>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
