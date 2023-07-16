import React, { useState } from "react";

const HeadAndTail = () => {
  // * State to take dropdown value
  const [coinValue, setCoinValue] = useState("");
  // * State to take all the selected dropdown value
  const [coinArray, setCoinArray] = useState([]);
  // * Funtion to take dropdown value and set its value in state
  const handleChange = (e) => {
    setCoinValue(e.target.value);
  };
  // * Function to display all the content in the page
  const handleSubmit = () => {
    const newCoinArray = [...coinArray];
    if (coinValue === "") {
      alert("Please Select Value from DropDown");
    } else {
      if (newCoinArray.length === 0) {
        newCoinArray.push([coinValue]);
      } else {
        let lastArrayIndex = newCoinArray[newCoinArray.length - 1];
        let lastArrayItem = lastArrayIndex[lastArrayIndex.length - 1];
        if (lastArrayItem === coinValue) {
          lastArrayIndex.push(coinValue);
        } else {
          newCoinArray.push([coinValue]);
        }
        console.log("LastArray : ", lastArrayIndex);
        console.log("LastArrayItem : ", lastArrayItem);
      }
    }
    setCoinValue("");
    setCoinArray(newCoinArray);
    console.log("New Dummy Array : ", newCoinArray);
  };
  return (
    <div className="bg-light vh-100">
      <div className="container">
        <h3 className="text-center py-3">Inside Head and Tail Page</h3>
        <div className="row gy-3">
          <div className="col-lg-4 mx-auto">
            <div>
              <label htmlFor="headtail" className="form-label">
                Select Head or Tail
              </label>
              <select
                name="coinDropdown"
                id="headtail"
                className="form-select"
                value={coinValue}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select</option>
                <option value="H">H</option>
                <option value="T">T</option>
              </select>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-lg-12">
            <h4 className="text-center">Head and Tails</h4>
            <div className="row">
              {coinArray &&
                coinArray.length !== 0 &&
                coinArray.map((items, index) => {
                  return (
                    <div key={index} className="col-1">
                      {items.map((items, index) => (
                        <h3 key={index}>{items}</h3>
                      ))}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadAndTail;
