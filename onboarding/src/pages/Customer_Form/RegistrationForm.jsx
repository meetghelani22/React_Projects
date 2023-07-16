import React, { useEffect, useState } from "react";
import SuccessfulMsg from "./SuccessfulMsg";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const initialValues = {
  first_name: "",
  last_name: "",
  address1: "",
  address2: "",
  postcode: "",
  city: "",
  state: "",
  country: "",
  nationality: "",
  dob: "",
  email: "",
  phone: "",
  phonecnf: "",
};

const RegistrationForm = () => {
  const navigateBack = useNavigate();
  const [submitted, setSubmitted] = useState(false);
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
    dob: "",
    email: "",
    phone: "",
    phonecnf: "",
  });
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    address1: Yup.string().required("Address is Required"),
    postcode: Yup.string().required("Postcode is Required"),
    city: Yup.string().required("City is Required"),
    country: Yup.string().required("Country is Required"),
    nationality: Yup.string().required("Nationality is Required"),
    dob: Yup.date().required("Date is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Phone number is required"),
    phonecnf: Yup.string()
      .oneOf([Yup.ref("phone"), null], "Phone numbers must match")
      .required("Please confirm your phone number"),
  });
  const onSubmit = (values) => {
    console.log(values);
    // setFormData(values);
    sessionStorage.setItem("customerRegisterForm", JSON.stringify(values));
    setSubmitted(true);
  };
  useEffect(() => {
    console.log("Form Data is : ", formData);
  }, [formData]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {submitted ? (
        <SuccessfulMsg />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleSubmit }) => (
            <div className="p-5">
              <Form>
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
                        <Field
                          type="text"
                          id="name"
                          name="first_name"
                          className="form-control"
                          placeholder="Enter First Name"
                        />
                        <label htmlFor="first_name" className="input-label">
                          <span>First Name</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <ErrorMessage
                          name="first_name"
                          className="text-danger"
                          component="span"
                        />
                        {/*    {errors.first_name && touched.first_name && (
                          <div className="text-danger">{errors.first_name}</div>
                        )} */}
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-data">
                        <Field
                          type="text"
                          id="last_name"
                          name="last_name"
                          className="form-control"
                          placeholder="Enter Last Name"
                        />
                        <label htmlFor="last_name" className="input-label">
                          <span>Last Name</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        {errors.last_name && touched.last_name && (
                          <div className="text-danger">{errors.last_name}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="input-data">
                    <Field
                      type="text"
                      id="address1"
                      name="address1"
                      className="form-control"
                      placeholder="Enter Street"
                    />
                    <label htmlFor="address1" className="input-label">
                      <span>Street and Number</span>
                      <span className="text-danger ms-1">*</span>
                    </label>
                    {errors.address1 && touched.address1 && (
                      <div className="text-danger">{errors.address1}</div>
                    )}
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="input-data">
                    <Field
                      type="text"
                      id="address2"
                      name="address2"
                      className="form-control"
                      placeholder="Enter Address"
                    />
                    <label htmlFor="address2" className="input-label">
                      <span>Address Addition</span>
                    </label>
                    {/* {errors.address2 && touched.address2 && (
                  <div className="text-danger">{errors.address2}</div>
                )} */}
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          type="text"
                          id="postcode"
                          name="postcode"
                          className="form-control"
                          placeholder="Enter Post Code"
                        />
                        <label htmlFor="postcode" className="input-label">
                          <span>Postcode</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        {errors.postcode && touched.postcode && (
                          <div className="text-danger">{errors.postcode}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          type="text"
                          id="city"
                          name="city"
                          className="form-control"
                          placeholder="Enter City"
                        />
                        <label htmlFor="city" className="input-label">
                          <span>City</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        {errors.city && touched.city && (
                          <div className="text-danger">{errors.city}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          type="text"
                          id="state"
                          name="state"
                          className="form-control"
                          placeholder="Enter Post Code"
                        />
                        <label htmlFor="state" className="input-label">
                          <span>State / Province / Region</span>
                          {/*  <span className="text-danger ms-1">*</span> */}
                        </label>
                        {/* {errors.state && touched.state && (
                      <div className="text-danger">{errors.state}</div>
                    )} */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          id="country"
                          name="country"
                          className="w-100"
                          as="select"
                        >
                          <option value="default">Select</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                        </Field>
                        <label htmlFor="state" className="input-label">
                          <span>Country</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          name="nationality"
                          id="nationality"
                          className="w-100"
                          as="select"
                        >
                          <option value="default">Select</option>
                          <option value="Indian">Indian</option>
                          <option value="Canadian">Canadian</option>
                          <option value="American">American</option>
                        </Field>
                        <label htmlFor="nationality" className="input-label">
                          <span>Nationality</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <ErrorMessage
                          name="nationality"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="input-data">
                        <Field
                          type="date"
                          id="dob"
                          name="dob"
                          className="form-control"
                        />
                        <label htmlFor="dob" className="input-label">
                          <span>Date of Birth</span>
                          <span className="text-danger ms-1">*</span>
                        </label>
                        {errors.dob && touched.dob && (
                          <div className="text-danger">{errors.dob}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="input-data">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <label htmlFor="email" className="input-label">
                      <span>Email Address</span>
                      <span className="text-danger ms-1">*</span>
                    </label>
                    {errors.email && touched.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="input-field mb-4">
                  <div className="input-data">
                    <Field
                      type="number"
                      id="phone"
                      name="phone"
                      className="form-control"
                    />
                    <label htmlFor="phone" className="input-label">
                      <span>Phone Number</span>
                      <span className="text-danger ms-1">*</span>
                    </label>
                    {errors.phone && touched.phone && (
                      <div className="text-danger">{errors.phone}</div>
                    )}
                  </div>
                </div>
                <div className="input-field mb-4">
                  <span>
                    Your mobile phone number will be required again later,
                    provided that a contract is concluded with OZL - Offenes
                    Zolllager in Liechtenstein AG is to be digitally signed.
                  </span>
                </div>
                <div className="input-field mb-4">
                  <div className="input-data">
                    <Field
                      type="number"
                      id="phonecnf"
                      name="phonecnf"
                      className="form-control"
                    />
                    <label htmlFor="phonecnf" className="input-label">
                      <span>Confirm Phone Number</span>
                      <span className="text-danger ms-1">*</span>
                    </label>
                    {errors.phonecnf && touched.phonecnf && (
                      <div className="text-danger">{errors.phonecnf}</div>
                    )}
                  </div>
                  <div className="mt-2">
                    <span>Please confirm your mobile number</span>
                  </div>
                </div>
                <div className="input-field">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="onb-btn btn-secondary p-3"
                        onClick={() => navigateBack("/")}
                      >
                        <span>Back</span>
                      </button>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="onb-btn btn-primary p-3"
                      >
                        <span>Continue</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

export default RegistrationForm;
