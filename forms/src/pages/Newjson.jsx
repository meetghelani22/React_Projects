// * Simple Example to fetch data using button and show data to the page
// * Using Two Map Function and geting user data from selected index

import React, { useState } from "react";
import "../css/json.css";
const Newjson = () => {
  // * for State Data
  const [userData, setUserData] = useState(null);
  // * for Session Data
  const [sessionData, setSessionData] = useState(null);

  const fetchApi = () => {
    let getData = sessionStorage.getItem("apiData");
    let parseData;
    if (!getData && !userData) {
      console.log("API is Fetched...!!!");
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          sessionStorage.setItem("apiData", JSON.stringify(data));
        });
    } else {
      if (getData) {
        console.log("Data from Session...!!!");
        parseData = JSON.parse(getData);
        setSessionData(parseData);
        console.log(sessionData);
      }
    }
  };
  // * For Hide Button
  const [show, setShow] = useState(true);
  const [DetailsUserIndex, setDetailsUserIndex] = useState();
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center my-4">Fetch API Example NewJson</h1>
        <div className="container bg-light bs p-5">
          <div className="row">
            <div className="col-lg-3">
              <h4 className="text-center my-3">Name</h4>
              <div className="">
                {(userData || sessionData) &&
                  (userData || sessionData).map((items, index) => {
                    return (
                      <div
                        className="row mb-2 point align-items-center"
                        onClick={() => {
                          setDetailsUserIndex(index);
                        }}
                        key={index}
                      >
                        <div className="d-flex mb-1">
                          <div className="me-3">{items.id}</div>
                          <div>{items.name}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-lg-9">
              <h4 className="text-center my-3">Details</h4>
              {(userData || sessionData) &&
                (userData || sessionData).map((values, index) => {
                  if (DetailsUserIndex === index) {
                    console.log("Selected Index is : ", DetailsUserIndex);
                    return (
                      show && (
                        <div key={index}>
                          <div className="card">
                            <div className="card-body">
                              <p className="card-text">
                                Company : {values.company.name}
                              </p>
                              <p className="card-title">
                                Email : {values.email}
                              </p>
                              <p className="card-text">
                                Website : {values.website}
                              </p>
                              <p className="card-text mb-0">
                                City : {values.address.city}
                              </p>
                            </div>
                            <div className="card-footer">
                              <p className="card-text mb-0">
                                Phone : {values.phone}
                              </p>
                            </div>
                          </div>
                          <div>
                            <button
                              className="btn btn-primary mt-3"
                              onClick={() => setDetailsUserIndex()}
                            >
                              Hide
                            </button>
                          </div>
                        </div>
                      )
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={fetchApi}>
              Fetch Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newjson;
