import React, { useContext } from "react";
import "../css/alldata.css";
import { DataContext } from "./DataContext";
const DisplayData = () => {
  const data = useContext(DataContext);
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center my-3">Display All Data from API</h2>
        <div className="container bs p-5 rounded-3">
          <div className="row mb-3">
            <div className="col-lg-2">
              <h5>Name</h5>
            </div>
            <div className="col-lg-2">
              <h5>Username</h5>
            </div>
            <div className="col-lg-2">
              <h5>Company</h5>
            </div>
            <div className="col-lg-2">
              <h5>Phone</h5>
            </div>
            <div className="col-lg-2">
              <h5>City</h5>
            </div>
            <div className="col-lg-2">
              <h5>Email</h5>
            </div>
          </div>
          {data &&
            data.map((items, index) => {
              return (
                <div className="row py-1 border border-2" key={index}>
                  <div className="col-lg-2 py-2">
                    <p className="mb-0">{items.name}</p>
                  </div>
                  <div className="col-lg-2 py-2">
                    <p className="mb-0">{items.username}</p>
                  </div>
                  <div className="col-lg-2 py-2">
                    <p className="mb-0">{items.company.name}</p>
                  </div>
                  <div className="col-lg-2 py-2">
                    <p className="mb-0">{items.phone}</p>
                  </div>
                  <div className="col-lg-2 py-2">
                    <p className="mb-0">{items.address.city}</p>
                  </div>
                  <div className="col-lg-2 py-2">
                    <p className="text-break mb-0">{items.email}</p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
