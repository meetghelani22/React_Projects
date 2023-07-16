// * UseEffet Simple Example
// * Using UseEffect to get the data from api and set data to state and session  and show it to page from sessionDataState

import React, { useState, useEffect } from "react";
import "../css/json.css";

const Effect = () => {
  const [userData, setUserData] = useState();
  const [sessionData, setSessionData] = useState(null);
  const [selectedUser, setSelectedUser] = useState({});
  const [show, setShow] = useState(true);
  // * Function to Fetch API
  const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        sessionStorage.setItem("apiData", JSON.stringify(data));
      });
  };

  useEffect(() => {
    let getData = sessionStorage.getItem("apiData");
    let parseData;
    if (!userData && !getData) {
      fetchApi();
    } else {
      if (getData) {
        console.log("Data from Session...!!!");
        parseData = JSON.parse(getData);
        setSessionData(parseData);
        console.log(sessionData);
      }
    }
  }, []);

  const [searchName, setSearchName] = useState("");
  const [filteredResult, setFilterResult] = useState([]);

  const handleChange = (e) => {
    setSearchName(e.target.value);
    console.log(searchName);
    if (searchName === "") {
      console.log("No Result Found");
    } else {
      setFilterResult(
        userData ||
          sessionData.filter((item) => {
            let answer =
              item.name.toLowerCase().includes(searchName.toLowerCase()) ||
              item.email.toLowerCase().includes(searchName.toLowerCase());
            return answer;
          })
      );
      console.log("Filtered Result is : ", filteredResult);
    }
  };
  const handleSearch = () => {};

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
                <div className="row">
                  <h4 className="text-center">Search User</h4>
                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        value={searchName}
                        onChange={handleChange}
                      />
                      <div>
                        <button
                          className="mt-3 btn btn-primary"
                          onClick={handleSearch}
                        >
                          Search
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      {filteredResult.length > 0 && searchName.length >= 1 ? (
                        filteredResult.map((items, index) => {
                          return (
                            <div key={index} className="card">
                              <div className="card-body">
                                <p className="card-text">
                                  UserName : {items.username}
                                </p>
                                <p className="card-text">
                                  Email : {items.email}
                                </p>
                                <p className="card-text">
                                  Items : {items.phone}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-0">No Record Found</h5>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  {show && selectedUser.name && (
                    <div>
                      <h4 className="text-center my-3">Details</h4>
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
          </div>
        </div>
      </div>
    </div>
    // <div className="container-fluid">
    //   <div className="container">
    //     <h1 className="text-center">Example of Use Effect</h1>
    //     <div>
    //       {user &&
    //         user.map((items, index) => (
    //           <div key={index} className="d-flex w-50 justify-content-start">
    //             <div className="text-start me-5">{items.id} </div>
    //             <div className="text-start">{items.name}</div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Effect;
