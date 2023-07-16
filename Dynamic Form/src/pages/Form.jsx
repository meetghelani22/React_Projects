// ! Dynamic Input Field with dynamic fields

/* import React, { useState } from "react";
function DynamicForm() {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([
      ...fields,
      {
        label: "",
        placeholder: "",
        type: "text",
        data: "",
      },
    ]);
  };

  const handleInputChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };
  // const handleInputChangeOfMain = (index, event) => {
  //   const values = [...fields];
  //   values[index].data = event.target.value;
  //   setFields(values);
  // };

  const handleTypeChange = (index, event) => {
    const values = [...fields];
    values[index].type = event.target.value;
    setFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = () => {
    console.log(fields);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-3">
          <button className="btn btn-primary" onClick={handleAddField}>
            Add Field
          </button>
        </div>
        <div className="col-lg-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <form>
        {fields.map((field, index) => (
          <div key={index} className="row mt-4">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4">
                  <label>
                    Label:
                    <input
                      type="text"
                      name="label"
                      value={field.label}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label>
                    Placeholder:
                    <input
                      type="text"
                      name="placeholder"
                      value={field.placeholder}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </label>
                </div>
                <div className="col-lg-4">
                  <label className="me-3">
                    Type:
                    <select
                      value={field.type}
                      onChange={(event) => handleTypeChange(index, event)}
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="password">Password</option>
                      <option value="number">Number</option>
                    </select>
                  </label>
                  <button onClick={() => handleRemoveField(index)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mt-3">
                <div className="col-lg-12">
                  <label htmlFor="">Label : {field.label}</label>
                </div>
                <div className="col-lg-12">
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.data}
                    // onChange={(event) => handleInputChangeOfMain(index, event)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
export default DynamicForm; */

// ! Dynamic Input Field with Static Input Field Created
/* import React, { useState } from "react";

function DynamicForm() {
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    type: "text",
    label: "",
    placeholder: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAddInput = () => {
    setShow(true);
    setInputs((prevInputs) => [...prevInputs, formData]);
    setFormData({
      type: "text",
      label: "",
      placeholder: "",
    });
  };

  return (
    <div>
      <div>
        {show && (
          <div>
            <div>
              <label htmlFor="type">Type:</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                <option value="text">Text</option>
                <option value="select">Select</option>
              </select>
            </div>
            <div>
              <label htmlFor="label">Label:</label>
              <input
                type="text"
                name="label"
                value={formData.label}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="placeholder">Placeholder:</label>
              <input
                type="text"
                name="placeholder"
                value={formData.placeholder}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>
      <button onClick={handleAddInput}>Add Input</button>

      {show &&
        inputs.map((input, index) => {
          if (input.type === "text") {
            return (
              <div key={index}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            );
          } else if (input.type === "select") {
            return (
              <div key={index}>
                <label>{input.label}</label>
                <select>
                  {input.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

export default DynamicForm; */

// ! Dynamic Inputfield and dropdown field with dynamic options
/* import React, { useState } from "react";

function Form() {
  const [inputFields, setInputFields] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [type, setType] = useState("");
  const [option, setOption] = useState("");

  const handleAddInputField = () => {
    const newInputFields = inputFields.concat({
      label,
      placeholder,
      type,
      value: "",
    });
    setInputFields(newInputFields);
    setLabel("");
    setPlaceholder("");
    setType("");
  };

  const handleAddOption = () => {
    const newOptions = dropdownOptions.concat(option);
    setDropdownOptions(newOptions);
    setOption("");
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <div>
        <button onClick={handleAddInputField}>Input Field</button>
        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label>
          Placeholder:
          <input
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
      </div>
      <div>
        {inputFields.map((field, index) => (
          <div key={index}>
            <label>
              {field.label}:
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => handleInputChange(index, e)}
              />
            </label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleAddOption}>Selection</button>
        <label>
          Option:
          <input
            type="text"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
        </label>
        <select>
          {dropdownOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Form; */

// ! Dynamic Drop Down With Options
/* import React, { useState } from "react";

function Form() {
  const [dropdowns, setDropdowns] = useState([]);

  const handleAddDropdown = () => {
    const newDropdown = {
      options: [],
    };
    setDropdowns([...dropdowns, newDropdown]);
  };

  const handleAddOption = (index, option) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].options = [...newDropdowns[index].options, option];
    setDropdowns(newDropdowns);
  };

  return (
    <div>
      <h1>Dynamic Dropdowns</h1>
      <button onClick={handleAddDropdown}>Selections</button>
      {dropdowns.map((dropdown, index) => (
        <div key={index}>
          <select>
            <option value="">Select</option>
            {dropdown.options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter an option"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddOption(index, e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Form; */

// ! Dynamic Radio Button with Options
/* import React, { useState } from "react";

function Form() {
  const [radioButtons, setRadioButtons] = useState([]);

  function addRadioButton() {
    const newRadioButton = {
      label: "",
      options: [],
    };
    setRadioButtons([...radioButtons, newRadioButton]);
  }

  function handleLabelChange(index, event) {
    const newRadioButtons = [...radioButtons];
    newRadioButtons[index].label = event.target.value;
    setRadioButtons(newRadioButtons);
  }

  function handleOptionChange(index, optionIndex, event) {
    const newRadioButtons = [...radioButtons];
    newRadioButtons[index].options[optionIndex] = event.target.value;
    setRadioButtons(newRadioButtons);
  }

  function handleAddOption(index) {
    const newRadioButtons = [...radioButtons];
    newRadioButtons[index].options.push("");
    setRadioButtons(newRadioButtons);
  }

  function handleRemoveOption(index, optionIndex) {
    const newRadioButtons = [...radioButtons];
    newRadioButtons[index].options.splice(optionIndex, 1);
    setRadioButtons(newRadioButtons);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(radioButtons);
  }

  return (
    <form onSubmit={handleSubmit}>
      {radioButtons.map((radioButton, index) => (
        <div key={index}>
          <label>
            Radio Button Label:
            <input
              type="text"
              value={radioButton.label}
              onChange={(event) => handleLabelChange(index, event)}
            />
          </label>
          {radioButton.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                Option:
                <input
                  type="text"
                  value={option}
                  onChange={(event) =>
                    handleOptionChange(index, optionIndex, event)
                  }
                />
              </label>
              <button
                type="button"
                onClick={() => handleRemoveOption(index, optionIndex)}
              >
                Remove Option
              </button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddOption(index)}>
            Add Option
          </button>
        </div>
      ))}
      <button type="button" onClick={addRadioButton}>
        Add Radio Button
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form; */

// ! Dynamic form With all 3 Fields, Input, Radiobutton and Dropdrown with dynamic example
/* import React, { useState } from "react";

function FullForm() {
  const [fields, setFields] = useState([]);

  const handleAddTextField = () => {
    setFields([
      ...fields,
      {
        type: "text",
        label: "",
        placeholder: "",
      },
    ]);
  };

  const handleAddRadioButton = () => {
    setFields([
      ...fields,
      {
        type: "radio",
        label: "",
        options: [{ value: "", label: "" }],
      },
    ]);
  };

  const handleAddDropdown = () => {
    setFields([
      ...fields,
      {
        type: "select",
        label: "",
        options: [{ value: "", label: "" }],
      },
    ]);
  };

  const handleInputChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleOptionChange = (index, optionIndex, event) => {
    const values = [...fields];
    values[index].options[optionIndex][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddOption = (index) => {
    const values = [...fields];
    values[index].options.push({ value: "", label: "" });
    setFields(values);
  };

  const handleRemoveOption = (index, optionIndex) => {
    const values = [...fields];
    values[index].options.splice(optionIndex, 1);
    setFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  return (
    <div>
      <button type="button" onClick={handleAddTextField}>
        Text Field
      </button>
      <button type="button" onClick={handleAddRadioButton}>
        Radio Button
      </button>
      <button type="button" onClick={handleAddDropdown}>
        Dropdown
      </button>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              Label: {fields.type}
              <input
                type="text"
                name="label"
                value={field.label}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            {field.type === "text" && (
              <div>
                <label>
                  Placeholder:
                  <input
                    type="text"
                    name="placeholder"
                    value={field.placeholder}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>
                <label>
                  Type:
                  <select
                    name="type"
                    value={field.type}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="password">Password</option>
                  </select>
                </label>
              </div>
            )}
            {field.type === "radio" && (
              <div>
                {field.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label>
                      Option Value:
                      <input
                        type="text"
                        name="value"
                        value={option.value}
                        onChange={(event) =>
                          handleOptionChange(index, optionIndex, event)
                        }
                      />
                    </label>
                    <label>
                      Option Label:
                      <input
                        type="text"
                        name="label"
                        value={option.label}
                        onChange={(event) =>
                          handleOptionChange(index, optionIndex, event)
                        }
                      />
                    </label>
                    <button
                      onClick={() => handleRemoveOption(index, optionIndex)}
                    >
                      Remove Option
                    </button>
                  </div>
                ))}
                <button onClick={() => handleAddOption(index)}>
                  Add Option
                </button>
              </div>
            )}
            {field.type === "select" && (
              <div>
                {field.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <label>
                      Option Value:
                      <input
                        type="text"
                        name="value"
                        value={option.value}
                        onChange={(event) =>
                          handleOptionChange(index, optionIndex, event)
                        }
                      />
                    </label>
                    <label>
                      Option Label:
                      <input
                        type="text"
                        name="label"
                        value={option.label}
                        onChange={(event) =>
                          handleOptionChange(index, optionIndex, event)
                        }
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index, optionIndex)}
                    >
                      Remove Option
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => handleAddOption(index)}>
                  Add Option
                </button>
              </div>
            )}
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove Field
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default FullForm; */

import React, { useState } from "react";

function Form() {
  // create state object with name, email, and familyMembers properties
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    familyMembers: [],
  });

  // state variable to store the current number of input fields
  const [numInputFields, setNumInputFields] = useState(0);

  // handler function to add a new family member to state
  const handleAddFamilyMember = (event) => {
    event.preventDefault();
    const newFamilyMember = event.target.newMember.value;
    const newFamilyMembers = [...userData.familyMembers, newFamilyMember];
    setUserData({ ...userData, familyMembers: newFamilyMembers });
    event.target.newMember.value = "";
  };

  // handler function to add a new input field to the UI
  const handleAddInputField = (event) => {
    event.preventDefault();
    setNumInputFields(numInputFields + 1);
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </label>
      <br />
      <form onSubmit={handleAddFamilyMember}>
        {Array.from({ length: numInputFields }).map((_, index) => (
          <div key={index}>
            <label>
              Family Member {index + 1}:
              <input type="text" name="newMember" />
            </label>
          </div>
        ))}
        <button type="submit">Add Family Member</button>
      </form>
      <button onClick={handleAddInputField}>Add Another Family Member</button>
      <br />
      <div>
        <h3>Family Members:</h3>
        {userData.familyMembers.map((member, index) => (
          <div key={index}>{member}</div>
        ))}
      </div>
    </div>
  );
}

export default Form;
