// ! Diving all the Fields in Small Component inside one main compoenent

import React, { useState } from "react";

const MainForm = () => {
  const [fields, setFields] = useState([]);
  // ! To Delete Fields based on its Index
  const handleDeleteFields = (index, e) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };
  const handleInputField = () => {
    setFields([
      ...fields,
      {
        category: "inputfield",
        type: "text",
        data: "",
        label: "",
        placeholder: "",
      },
    ]);
  };
  const TextBox = ({ field, index, items, keys }) => {
    const handleInputFieldsChange = (index, event) => {
      const newFields = [...fields];
      newFields[index][event.target.name] = event.target.value;
      setFields(newFields);
    };
    const handleInputTextChange = (index, event) => {
      const values = [...fields];
      values[index].data = event.target.value;
      setFields(values);
    };
    return (
      <div
        className="row border mt-2 align-items-center b-shadow p-3"
        key={index}
      >
        <div className="col-lg-4">
          <h5 className="text-center">Input Field</h5>
          <label className="form-label fw-600" htmlFor="">
            {items.label}
          </label>
          <div className="row align-items-end">
            <div className="col-lg-6">
              <input
                className="form-control"
                type={items.type}
                value={items.data}
                placeholder={items.placeholder}
                onChange={(e) => handleInputTextChange(index, e)}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <h5>Options Here</h5>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3">
              <label className="form-label">Label:</label>
              <input
                className="form-control"
                type="text"
                name="label"
                value={items.label}
                onChange={(event) => handleInputFieldsChange(index, event)}
              />
            </div>
            <div className="col-lg-3">
              <label className="form-label">Placeholder:</label>
              <input
                className="form-control"
                type="text"
                name="placeholder"
                value={items.placeholder}
                onChange={(event) => handleInputFieldsChange(index, event)}
              />
            </div>
            <div className="col-lg-3">
              <label className="form-label">Type:</label>
              <select
                className="form-select"
                name="type"
                value={items.type}
                onChange={(event) => handleInputFieldsChange(index, event)}
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Pass</option>
                <option value="number">Number</option>
              </select>
            </div>
            <div className="col-lg-2 d-flex flex-column align-items-center">
              <label htmlFor="" className="form-label">
                Delete
              </label>
              <div>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={(e) => handleDeleteFields(index, e)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container-fluid p-4">
      <div className="container">
        <h1 className="text-center mb-3">Dynamic Form</h1>
        <div className="row align-items-center mt-3 g-3">
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleInputField}
            >
              TextField
            </button>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              //   onClick={handleSelectField}
            >
              Selection
            </button>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              //   onClick={handleRadioField}
            >
              Radio
            </button>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              //   onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="container mt-3">
          {fields.map((items, index) => {
            if (items.category === "inputfield") {
              return (
                <div>
                  <TextBox
                    field={fields}
                    index={index}
                    items={items}
                    key={index}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MainForm;
