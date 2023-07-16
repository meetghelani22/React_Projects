// * Simple Example to fetch data from api and siplay it to page using map function.
// * here for every field, map funtion is used to display the data

import React, { useState } from "react";

const Userdata = () => {
  const [data, setData] = useState(null);
  const fetchApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">Fetch API</h1>
          <p>Simple example of Fetch Json Data</p>
        </div>
        <div className="col-lg-12">
          <div className="row justify-content-center">
            <div className="col-lg-1">
              <h4>ID</h4>
              <div>
                {data &&
                  data.length > 0 &&
                  data.map((userObj) => (
                    <div className="col-lg-2 mb-3" key={userObj.id}>
                      {userObj.id}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Name</h4>
              <div>
                {data &&
                  data.length > 0 &&
                  data.map((userObj) => (
                    <div className="col-lg-2 mb-3" key={userObj.id}>
                      {userObj.email}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-2">
              <h4>Username</h4>
              <div>
                {data &&
                  data.length > 0 &&
                  data.map((userObj) => (
                    <div className="col-lg-2 mb-3" key={userObj.id}>
                      {userObj.username}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Email</h4>
              <div>
                {data &&
                  data.length > 0 &&
                  data.map((userObj) => (
                    <div className="col-lg-2 mb-3" key={userObj.id}>
                      {userObj.email}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Website</h4>
              <div>
                {data &&
                  data.length > 0 &&
                  data.map((userObj) => (
                    <div className="col-lg-2 mb-3" key={userObj.id}>
                      {userObj.website}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="col-lg-12 my-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" onClick={fetchApi}>
            Fetch API
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userdata;
