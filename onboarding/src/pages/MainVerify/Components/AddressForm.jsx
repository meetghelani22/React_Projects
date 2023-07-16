import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const AddressForm = () => {
  const navigate = useNavigate();
  const addressSchema = Yup.object().shape({
    doctype: Yup.string().required("Please select an option"),
    addressFile1: Yup.mixed().required("A file is required"),
    /* .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 1000000; // 1MB
      })
      .test("fileType", "Only JPG, PNG and PDF files are allowed", (value) => {
        return (
          value &&
          ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
        );
      }), */
  });
  const handleUpload = (values) => {
    const store = JSON.parse(sessionStorage.getItem("progress"));
    if (!store.includes("address")) {
      store.push("address");
    }
    sessionStorage.setItem("progress", JSON.stringify(store));
    console.log("File Input Values is ", values);
    sessionStorage.setItem("addressForm", JSON.stringify(values));
    navigate("/income-verification");
  };
  return (
    <Formik
      initialValues={{ doctype: "", addressFile1: "" }}
      validationSchema={addressSchema}
      onSubmit={(values) => {
        handleUpload(values);
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <Form>
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              <h2 className="fw-semibold">Address Verification</h2>
              <p>
                To verify the address of your residence, you need to provide
                scan or photo of documents issued in your name
              </p>
            </div>
            <div className="mt-3">Skip</div>
          </div>
          <div>
            <div className="row">
              <div className="col">
                <div className="my-3">
                  <div className="fw-bold fs-16">1. Select Document Type</div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="input-data">
                      <Field
                        as="select"
                        name="doctype"
                        id="doctype"
                        className="w-100"
                      >
                        <option value="default">Select</option>
                        <option value="passport">Passport</option>
                        <option value="driving">Driving license</option>
                        <option value="pancard">Pan Card</option>
                      </Field>
                      <label htmlFor="doctype" className="input-label">
                        <span>Choose Document Type</span>
                      </label>
                      <ErrorMessage
                        name="doctype"
                        component="label"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-control input-data rounded-0 p-3">
                      <input
                        type="file"
                        id="file"
                        name="addressFile1"
                        className="w-100 upload-document"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          const imageUrl = URL.createObjectURL(file);
                          setFieldValue("addressFile1", imageUrl);
                        }}
                      />
                      <div className="input-img-doc p-4 bg-drop">
                        <p className="mb-0">Drag & Drop Your Files or Browse</p>
                      </div>
                      <label htmlFor="files" className="input-label">
                        <span>Address Verification Document</span>
                      </label>
                    </div>
                    <ErrorMessage
                      component="label"
                      name="addressFile1"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <button
                      type="button"
                      className="onb-btn btn-primary p-3"
                      onClick={handleSubmit}
                    >
                      <span>Upload</span>
                    </button>
                  </div>
                  {/*   <div className="col-lg-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        sessionStorage.removeItem("progress");
                        sessionStorage.removeItem("addressForm");
                      }}
                    >
                      Remove
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row disabledDiv">
              <div className="col">
                <div className="my-3">
                  <div className="fw-bold fs-16">2. Select Document Type</div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="input-data">
                      <select id="country" name="country" className="w-100">
                        <option value="default">Select</option>
                        <option value="passport">Passport</option>
                        <option value="driving">Driving license</option>
                        <option value="pancard">Pan Card</option>
                      </select>
                      <label htmlFor="state" className="input-label">
                        <span>Choose Documnet Type</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-control input-data rounded-0 p-3">
                      <input
                        type="file"
                        name="file"
                        className="w-100 upload-document "
                        id="fileinput"
                      />
                      <div className="input-img-doc p-4">
                        <p className="mb-0">Drag & Drop Your Files or Browse</p>
                      </div>
                      <label htmlFor="files" className="input-label">
                        <span>Address Verification Document</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 justify-content-between">
                  <div className="col-lg-6">
                    <button type="button" className="onb-btn btn-primary p-3">
                      <span>Upload</span>
                    </button>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <button type="button" className="onb-btn btn-primary p-3">
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;
