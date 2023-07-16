import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
const Login = () => {
  const [formData, setFormData] = useState(null);
  const initialValue = {
    username: "",
    email: "",
    pass: "",
    cnfPass: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("First Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    pass: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    cnfPass: Yup.string()
      .required("Confirm Password is Required")
      .oneOf([Yup.ref("pass"), null], 'Must match "password" field value'),
  });
  // * Toggle Password Switch
  const [passToggle, setPasswordToggle] = useState({
    tPass: false,
    tCnfPass: false,
  });
  const togglePass = (toggles) => {
    setPasswordToggle({ ...passToggle, [toggles]: !passToggle[toggles] });
  };
  const onSubmit = (values) => {
    setFormData(values);
    console.log("State", formData);
    sessionStorage.setItem("user", JSON.stringify(formData));
    console.log("Form Values are : ", values);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 rounded-3">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values) => onSubmit(values)}
          >
            {({ handleSubmit }) => (
              <Form>
                <div className="container">
                  <h1 className="text-center d-inline-block head position-relative mb-4">
                    Registration
                  </h1>
                  <div className="row">
                    <div className="col-lg-12 mb-4">
                      <div className="form-floating">
                        <Field
                          type="text"
                          id="fname"
                          name="username"
                          className="form-control"
                          placeholder="Enter Name"
                        ></Field>
                        <label htmlFor="fname">Full Name</label>
                      </div>
                      <ErrorMessage
                        name="username"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-lg-12 mb-4">
                      <div className="form-floating">
                        <Field
                          type="email"
                          id="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter Email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-lg-12 mb-4">
                      <div className="form-floating position-relative">
                        <Field
                          type={passToggle.tPass ? "text" : "password"}
                          id="pass"
                          className="form-control"
                          name="pass"
                          placeholder="Enter Password"
                        />
                        <label htmlFor="pass">Password</label>
                        <div className="form-check form-switch position-absolute tg">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="tPass"
                            onClick={() => togglePass("tPass")}
                          />
                        </div>
                      </div>
                      <ErrorMessage
                        name="pass"
                        component="span"
                        className="text-danger"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="form-floating position-relative">
                        <Field
                          type={passToggle.tCnfPass ? "text" : "password"}
                          className="form-control"
                          name="cnfPass"
                          id="cnfpass"
                          placeholder="Enter Confirm Password"
                        />
                        <label htmlFor="cnfpass">Confirm Password</label>
                        <div className="form-check form-switch position-absolute tg">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="tcnfPass"
                            onClick={() => togglePass("tCnfPass")}
                          />
                        </div>
                        <ErrorMessage
                          name="cnfPass"
                          component="span"
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center mt-4">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
