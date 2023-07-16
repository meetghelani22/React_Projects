import React, { useState } from "react";
import "../css/dynamicform.css";
const DynamicForm = () => {
  const [fields, setFields] = useState([]);
  // ! For InputField Logic
  const handleInputField = () => {
    setFields([
      ...fields,
      {
        category: "inputfield",
        type: "text",
        data: "",
        label: "",
        placeholder: "",
        name: "textBox",
      },
    ]);
  };
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
  // ! To Delete Fields based on its Index
  const handleDeleteFields = (index, e) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };
  // ! For DropDown Logic
  const handleSelectField = () => {
    setFields([
      ...fields,
      {
        category: "dropdown",
        name: "dropdown",
        type: "dropdown",
        label: "",
        options: [],
      },
    ]);
  };
  const handleAddSelectOptionField = (index, option) => {
    const newFields = [...fields];
    newFields[index].options = [...newFields[index].options, option];
    // setFields(newFields);
  };
  const handleButtonAddSelectOption = () => {
    const newFields = [...fields];
    setFields(newFields);
  };
  const handleDeleteSelectOptionField = (index) => {
    const newFields = [...fields];
    const options = newFields[index].options;
    options.pop();
    newFields[index].options = options;
    setFields(newFields);
  };
  // ! For RadioButton Logic
  const handleRadioField = () => {
    setFields([
      ...fields,
      {
        category: "radio",
        type: "radio",
        label: "",
        name: "",
        options: [],
      },
    ]);
  };
  const handleAddRadioOptionField = (index, option) => {
    console.log("Blur");
    const newFields = [...fields];
    newFields[index].options = [...newFields[index].options, option];
  };
  const handleButtonAddRadioOption = () => {
    const newFields = [...fields];
    setFields(newFields);
    console.log("Add");
  };
  // ! Form Submit Logic
  const handleSubmit = (e) => {
    console.log("Original Fields are : ", fields);
    const jsonData = JSON.stringify(fields, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "form-data.json";
    link.click();
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
              onClick={handleSelectField}
            >
              Selection
            </button>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRadioField}
            >
              Radio
            </button>
          </div>
          <div className="col-md-3 col-6 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="container mt-3">
          {fields.map((items, index) => {
            if (items.category === "inputfield") {
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
                          name={`${items.name}-${index}`}
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
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
                        />
                      </div>
                      <div className="col-lg-3">
                        <label className="form-label">Placeholder:</label>
                        <input
                          className="form-control"
                          type="text"
                          name="placeholder"
                          value={items.placeholder}
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
                        />
                      </div>
                      <div className="col-lg-3">
                        <label className="form-label">Type:</label>
                        <select
                          className="form-select"
                          name="type"
                          value={items.type}
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
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
            } else if (items.category === "dropdown") {
              return (
                <div
                  className="row border mt-2 b-shadow align-items-center p-3"
                  key={index}
                >
                  <div className="col-lg-4">
                    <h5 className="text-center">DropDown Field</h5>
                    <div className="row">
                      <div className="col-lg-7">
                        <label htmlFor="" className="form-label fw-600">
                          {items.label}
                        </label>
                        <select
                          name={`${items.name}-${index}`}
                          id={`customdropdown-${index}`}
                          className="form-select"
                        >
                          <option>Select</option>
                          {items.options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
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
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
                        />
                      </div>
                      <div className="col-lg-5">
                        <label className="form-label">Enter Options:</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter an Option"
                          onBlur={(e) => {
                            if (e.target.value === "") {
                            } else {
                              handleAddSelectOptionField(index, e.target.value);
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                      <div className="col-lg-1 d-flex flex-column">
                        <label htmlFor="" className="form-label">
                          Add
                        </label>

                        <button
                          className="btn btn-outline-success"
                          onClick={handleButtonAddSelectOption}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-lg-1 d-flex flex-column">
                        <label className="form-label">Del</label>
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={(e) => handleDeleteSelectOptionField(index)}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-lg-1 d-flex flex-column align-items-center">
                        <label htmlFor="" className="form-label">
                          Delete
                        </label>
                        <div>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
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
            } else {
              return (
                <div
                  className="row border b-shadow mt-2 align-items-center p-3"
                  key={index}
                >
                  <div className="col-lg-4">
                    <h5 className="text-center">Radio Button</h5>
                    <label htmlFor="" className="form-label fw-600 w-100">
                      {items.label}
                    </label>
                    <div className="row g-2">
                      {items.options.map((option, index) => (
                        <div key={index} className="col-lg-4">
                          <input
                            className="form-check-input me-2"
                            type={items.type}
                            name={items.name}
                            value={option}
                          />
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h5>Options Here</h5>
                    <div className="row">
                      <div className="col-lg-2">
                        <label className="form-label">Label:</label>
                        <input
                          className="form-control"
                          type="text"
                          name="label"
                          value={items.label}
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
                        />
                      </div>
                      <div className="col-lg-3">
                        <label htmlFor="" className="form-label">
                          Enter Radio Name
                        </label>
                        <input
                          className="form-control"
                          name="name"
                          value={items.name}
                          type="text"
                          placeholder="Enter Name"
                          onChange={(event) =>
                            handleInputFieldsChange(index, event)
                          }
                        />
                      </div>
                      <div className="col-lg-4">
                        <label htmlFor="" className="form-label">
                          Enter Options
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Option"
                          onBlur={(e) => {
                            if (e.target.value === "") {
                            } else {
                              handleAddRadioOptionField(index, e.target.value);
                              e.target.value = "";
                            }
                          }}
                        />
                      </div>
                      <div className="col-auto d-flex flex-column">
                        <label htmlFor="" className="form-label">
                          Add
                        </label>
                        <button
                          className="btn btn-outline-success"
                          onClick={handleButtonAddRadioOption}
                        >
                          +
                        </button>
                      </div>
                      <div className="col-auto d-flex flex-column">
                        <label htmlFor="" className="form-label">
                          Del
                        </label>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={(e) => handleDeleteSelectOptionField(index)}
                        >
                          -
                        </button>
                      </div>
                      <div className="col-auto d-flex flex-column align-items-center">
                        <label htmlFor="" className="form-label">
                          Delete
                        </label>
                        <div className="">
                          <button
                            className="btn btn-outline-danger"
                            onClick={handleDeleteFields}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
