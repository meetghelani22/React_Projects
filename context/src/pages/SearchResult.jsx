import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import { Button } from "antd";
const SearchResult = () => {
  const data = useContext(DataContext);
  const [searchName, setSearchName] = useState("");
  const [filteredResult, setFilterResult] = useState([]);
  const handleChange = (e) => {
    setSearchName(e.target.value);
  };
  const handleSearch = () => {
    if (searchName === "") {
      console.log("No Result Found");
    } else {
      setFilterResult(
        data.filter((item, index) => {
          let answer =
            item.name.toLowerCase().includes(searchName.toLowerCase()) ||
            item.email.toLowerCase().includes(searchName.toLowerCase());
          return answer;
        })
      );
      console.log("Filtered Result is : ", filteredResult);
    }
  };
  return (
    <div className="container-fluid">
      <h3 className="text-center my-3">Show Names from API</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div>
              <h4>Names</h4>
            </div>
            {data
              ? data.map((items, index) => {
                  return (
                    <div key={index}>
                      <p>{items.name}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="col-lg-6">
            <div className="container">
              <div className="row justify-content-between g-3">
                <div className="col-lg-10">
                  <input
                    value={searchName}
                    onChange={handleChange}
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="search"
                  />
                </div>
                <div className="col-lg-2 d-flex justify-content-center">
                  {/* <Button shape={"round"} size={"large"} onClick={handleSearch}>
                  Search
                </Button> */}
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div className="col-lg-12">
                  {filteredResult.length > 0 && searchName.length >= 1 ? (
                    filteredResult.map((items, index) => {
                      return (
                        <div className="card" key={index}>
                          <div className="card-body">
                            <h5 className="mb-3">Name : {items.name}</h5>
                            <p className="card-text">
                              UserName : {items.username}
                            </p>
                            <p className="card-text">Email : {items.email}</p>
                            <p className="card-text">Items : {items.phone}</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-text">
                            <h4 className="mb-0">No Data Found</h4>
                          </div>
                        </div>
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
  );
};

export default SearchResult;
