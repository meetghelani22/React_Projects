// * Simple Example to fetch data using button and show data to the page
// * Here Using only one map function to get the selected user data and show it to the card

import React, { useState } from "react";
import "../css/json.css";
const Newjson = () => {
  // * for State Data
  const [userData, setUserData] = useState(null);
  // * for Session Data
  const [sessionData, setSessionData] = useState(null);
  // * for Details data
  const [selectedUser, setSelectedUser] = useState({});
  // * For Hide Button
  const [show, setShow] = useState(true);
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

  return (
    <div className="container-fluid px-0">
      <div className="bg">
        <div className="container">
          <h1 className="text-center my-4">
            Fetch API Example Without Details map
          </h1>
          <div className="container bg-light bs p-5">
            <div className="row">
              <div className="col-lg-3">
                <h4 className="text-center my-3">Name</h4>
                <div className="container">
                  {(userData || sessionData) &&
                    (userData || sessionData).map((items, index) => {
                      return (
                        <div
                          className="row mb-2 point align-items-center"
                          onClick={() => {
                            setSelectedUser(items);
                            setShow(true);
                          }}
                          key={index}
                        >
                          <div className="d-flex mb-1 fs-18">
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
                {show && selectedUser.name && (
                  <div>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          Company : {selectedUser.company.name}
                        </p>
                        <p className="card-title">
                          Email : {selectedUser.email}
                        </p>
                        <p className="card-text">
                          Website : {selectedUser.website}
                        </p>
                        <p className="card-text mb-0">
                          City : {selectedUser.address.city}
                        </p>
                      </div>
                      <div className="card-footer">
                        <p className="card-text mb-0">
                          Phone : {selectedUser.phone}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary mt-3"
                        onClick={() => setShow(false)}
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                )}
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
    </div>
  );
};

export default Newjson;
