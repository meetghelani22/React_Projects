import React, { useState, useEffect } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address1: "",
    address2: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
    nationality: "",
    birthdate: "",
    email: "",
    phone: "",
    cnfphone: "",
  });
  const [formError, setFormError] = useState({});
  // * Taking User Input and set the State
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validation();
  };
  // * Regular Expression
  const nameRegex = /^[a-z ,.'-]+$/i;
  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const phoneRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validation = () => {
    let errors = {};

    if (!nameRegex.test(formData.first_name) || formData.first_name === "") {
      errors.first_name = "Enter Valid First Name";
    } else {
      errors.first_name = "";
    }
    if (!nameRegex.test(formData.last_name) || formData.last_name === "") {
      errors.last_name = "Enter Valid Last Name";
    } else {
      errors.last_name = "";
    }
    setFormError(errors);
  };
  useEffect(() => {
    // console.log("Form Data : ", formData);
    console.log("Error : ", formError);
  }, [formData, formError]);
  return (
    <div className="p-5">
      <form action="" name="register-form">
        <div className="input-field mb-4">
          <div className="row">
            <div className="col-auto">
              <div className="position-relative">
                <input
                  type="file"
                  name="file"
                  className="w-100 upload-photo"
                  id="upload_img"
                />
                <div className="input-img">
                  <span>Upload Your image</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="input-data">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validation()}
                />
                <label htmlFor="First-name" className="input-label">
                  <span>First Name</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                {formError.first_name && (
                  <div className="text-danger mt-2">{formError.first_name}</div>
                )}
              </div>
            </div>
            <div className="col">
              <div className="input-data">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validation()}
                />
                <label htmlFor="Last-name" className="input-label">
                  <span>Last Name</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                {formError.last_name && (
                  <div className="text-danger mt-2">{formError.last_name}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="input-data">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Street"
              name="address1"
              value={formData.address1}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="address1" className="input-label">
              <span>Street and number</span>
              <span className="text-danger ms-1">*</span>
            </label>
            <div className="text-danger">Validate</div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="input-data">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              name="address2"
              value={formData.address2}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="address1" className="input-label">
              <span>Address Addition</span>
              <span className="text-danger ms-1">*</span>
            </label>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="row">
            <div className="col-6">
              <div className="input-data">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Post Code"
                  name="postcode"
                  value={formData.postcode}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="postcode" className="input-label">
                  <span>Postcode</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                <div className="text-danger">Validate</div>
              </div>
            </div>
            <div className="col-6">
              <div className="input-data">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  name="city"
                  value={formData.city}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="city" className="input-label">
                  <span>City</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                <div className="text-danger">Validate</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="row">
            <div className="col-6">
              <div className="input-data">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter State"
                  name="state"
                  value={formData.state}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="state" className="input-label">
                  <span>State / Province / Region</span>
                </label>
                <div className="text-danger">Validate</div>
              </div>
            </div>
            <div className="col-6">
              <div className="input-data">
                <select
                  id="country"
                  name="country"
                  className="w-100"
                  value={formData.country}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="default">Select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
                <label htmlFor="state" className="input-label">
                  <span>Country</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                <div className="text-danger">Validate</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="row">
            <div className="col-6">
              <div className="input-data">
                <select
                  name="nationality"
                  id="nationality"
                  className="w-100"
                  value={formData.nationality}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="default">Select</option>
                  <option value="Indian">Indian</option>
                  <option value="Canadian">Canadian</option>
                  <option value="American">American</option>
                </select>
                <label htmlFor="nationality" className="input-label">
                  <span>Nationality</span>
                  <span className="text-danger ms-1">*</span>
                </label>
                <div className="text-danger">Validate</div>
              </div>
            </div>
            <div className="col-6">
              <div className="input-data">
                <input
                  type="date"
                  className="form-control"
                  id="DOB"
                  placeholder="dob"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="DOB" className="input-label">
                  <span>Date of birth</span>
                  <span className="text-danger ms-1">*</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="input-data">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email Address"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email" className="input-label">
              <span>Email Address</span>
              <span className="text-danger ms-1">*</span>
            </label>
            <div className="text-danger">Validate</div>
          </div>
        </div>
        <div className="input-field mb-4">
          <div className="input-data">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Phone Number"
              required
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phone" className="input-label">
              <span>Phone Number</span>
              <span className="text-danger ms-1">*</span>
            </label>
            <div className="text-danger">Validate</div>
          </div>
        </div>
        <div className="input-field mb-4">
          <span>
            Your mobile phone number will be required again later, provided that
            a contract is concluded with OZL - Offenes Zolllager in
            Liechtenstein AG is to be digitally signed.
          </span>
        </div>
        <div className="input-field mb-4">
          <div className="input-data">
            <input
              type="tel"
              className="form-control"
              placeholder="Confirm Phone Number"
              required
              name="cnfphone"
              value={formData.cnfphone}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="cnfphone" className="input-label">
              <span>Phone Number</span>
              <span className="text-danger ms-1">*</span>
            </label>
            <div className="text-danger">Validate</div>
          </div>
          <div className="mt-2">
            <span>Please confirm your mobile number</span>
          </div>
        </div>
        <div className="input-field">
          <div className="row">
            <div className="col-6">
              <button type="button" className="onb-btn btn-secondary p-3">
                <span>Back</span>
              </button>
            </div>
            <div className="col-6 text-end">
              <button type="button" className="onb-btn btn-primary p-3">
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
