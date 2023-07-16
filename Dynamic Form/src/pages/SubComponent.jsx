// ! Custom Input Fields Example, created by sahil with mulltilple fields
import React, { useState } from "react";
import "../css/subcomponent.css";
function New() {
  const [fields, setFields] = useState([]);
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({
    fname: "",
    email: "",
    number: "",
  });
  const handleAddField = () => {
    const values = [...fields];
    for (let i = 0; i < addNumber; i++) {
      values.push({ value: ["", "", ""] });
    }
    setFields(values);
  };
  const namePrefix = "input-field-";

  const [newData, setNewData] = useState([]);

  const handleAddMember = () => {
    const values = [...newData];
    values.push({ value: "" });
    setNewData(values);
  };
  const familyData = (index, event) => {
    const values = [...newData];
    values[index].value = event.target.value;
    setNewData(values);
  };

  const [addNumber, setAddNumber] = useState();

  const handleNumFieldsChange = (e) => {
    setAddNumber(e.target.value);
  };

  const handleAddFieldsSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(addNumber) && addNumber > 0) {
      handleAddField(parseInt(addNumber));
    }
    setAddNumber("");
  };

  const inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleChange = (index, event, subindex) => {
    const values = [...fields];
    values[index].value[subindex] = event.target.value;
    setFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...newData];
    values.splice(index, 1);
    setNewData(values);
  };

  const handleShowData = () => {
    console.log("Data is ", data);
    console.log("Family Members", newData);
    console.log("All 2 Input Fields Members", fields);
    setShowData(true);
  };

  return (
    <div className="container-fluid bg-22">
      <div className="d-flex justify-content-center align-items-center flex-column hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 bs py-5 px-4 rounded-3 bg-11">
              <h2 className="text-center pb-3">Registration form</h2>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className=" form-control"
                        id="floatingInput"
                        name="fname"
                        value={data.fname}
                        onChange={inputData}
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        value={data.email}
                        name="email"
                        id="floatingPassword"
                        onChange={inputData}
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Email</label>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-10 ">
                    <div className="form-floating">
                      <input
                        type="number"
                        id="num-fields"
                        className="form-control mb-1"
                        name="addNumber"
                        value={addNumber}
                        placeholder="number"
                        onChange={handleNumFieldsChange}
                      />
                      <label htmlFor="floatingPassword">Number</label>
                    </div>
                  </div>
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleAddFieldsSubmit}
                    >
                      Add
                    </button>
                  </div>
                </div>
                {fields.map((field, index) => (
                  <div className="row" key={index}>
                    <div className="col-4">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control my-3 "
                          value={field.value[0]}
                          name={`${namePrefix}${index}`}
                          onChange={(e) => handleChange(index, e, 0)}
                          placeholder="Email"
                        />
                        <label htmlFor="floatingPassword">Name</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control my-3 "
                          v
                          value={field.value[1]}
                          name={`${namePrefix}${index}`}
                          onChange={(e) => handleChange(index, e, 1)}
                          placeholder="age"
                        />
                        <label htmlFor="floatingPassword">Age</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control my-3 "
                          value={field.value[2]}
                          name={`${namePrefix}${index}`}
                          onChange={(e) => handleChange(index, e, 2)}
                          placeholder="date"
                        />
                        <label htmlFor="floatingPassword">D.O.B</label>
                      </div>
                    </div>
                  </div>
                ))}
                {newData.map((field, index) => (
                  <div className="row align-items-center" key={index}>
                    <div className="col-10">
                      <div>
                        <div className="form-floating">
                          <input
                            type="text"
                            name={`${namePrefix}${index}`}
                            value={newData.value}
                            className="form-control my-2"
                            onChange={(e) => familyData(index, e)}
                            placeholder="Family Member"
                          />
                          <label htmlFor="floatingInput">Family Member</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => handleRemoveField(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-12 ">
                    <button
                      type="button"
                      className="btn d-flex mt-2 btn-primary"
                      onClick={handleAddMember}
                    >
                      Add Family Members
                    </button>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-success my-3"
                      onClick={handleShowData}
                    >
                      Show Data
                    </button>
                  </div>
                </div>
                {showData ? (
                  <div className="row">
                    <h4>Name : {data.fname}</h4>
                    <h4>Email : {data.email}</h4>
                    <ul className="list-unstyled">
                      {fields.map((field, index) => (
                        <li key={index}>
                          Name : {field.value[0]} | Age : {field.value[1]} |
                          D-O-B :{field.value[2]}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <ul className="list-unstyled">
                        {newData.map((field, index) => (
                          <li key={index}>
                            <ul className="list-unstyled">
                              <li className="fw-bold">
                                Family Member: {field.value}
                              </li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;
