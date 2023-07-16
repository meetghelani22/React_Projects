import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const IncomeDisclosure = () => {
  const navigate = useNavigate();

  const reasonsDropDown = [
    "Select",
    "Assest Protection",
    "Assest Accumulation",
    "Assest Relocation",
    "Precious Metal trading",
    "Precious Metal duty free storage",
    "Precious Metal duty free storage",
    "Precious Metal Acquisition",
    "Precious Metal Export",
    "Other",
  ];
  const industryDrop = [
    "Select",
    "Commerce",
    "Healthcare",
    "Electical Industry",
    "Energy Industry",
    "Transport Industry",
    "Automative Industry",
    "Real Estate Industry",
    "IT Industry",
    "Metal Industry",
    "Service Industry",
    "Chemical Industry",
    "Construction Industry",
    "Education",
    "Insurance",
    "Food",
    "Textile Industry",
    "Plastic Industry",
    "Research & Development",
  ];

  const incomeValidationSchema = Yup.object().shape({
    education: Yup.string().required("Please select an option"),
    industry: Yup.string().required("Please select an option"),
    level: Yup.string().required("Please select an option"),
    reason: Yup.string().required("Please select an option"),
    annual: Yup.string().required("Please select an option"),
    investment: Yup.string().required("Please select an option"),
    incomeFile1: Yup.mixed().required("A file is required"),
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
  const handleIncomeSubmit = (values) => {
    console.log("Income Values", values);
    const store = JSON.parse(sessionStorage.getItem("progress"));
    if (!store.includes("income")) {
      store.push("income");
    }
    sessionStorage.setItem("progress", JSON.stringify(store));
    sessionStorage.setItem("incomeform", JSON.stringify(values));
    navigate("/contract");
  };
  return (
    <Formik
      initialValues={{
        education: "",
        industry: "",
        level: "",
        reason: "",
        annual: "",
        investment: "",
        incomeFile1: "",
      }}
      onSubmit={(values) => {
        handleIncomeSubmit(values);
      }}
      validationSchema={incomeValidationSchema}
    >
      {({ handleSubmit, setFieldValue }) => (
        <>
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="fw-bold">Income And Disclosure</h2>
              <p>
                To verify the address of your residence, you need to provide
                scan or photo of documents issued in your name
              </p>
            </div>
            <div>Skip</div>
          </div>
          <div>
            <p className="primary-text">Education and employement</p>
          </div>
          <div className="row">
            <div className="col-4 mb-3">
              <div className="input-data mb-3">
                <Field
                  name="education"
                  id="education"
                  as="select"
                  className="w-100 form-control"
                >
                  <option value="default">Select</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="M.Tech">M.S.C</option>
                  <option value="Other">Other</option>
                </Field>
                <label htmlFor="education" className="input-label">
                  <span>Education</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="education"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="col-4 mb-3">
              <div className="input-data mb-3">
                <Field
                  name="industry"
                  id="industry"
                  as="select"
                  className="w-100 form-control"
                >
                  {industryDrop.map((items, index) => {
                    return (
                      <option key={index} value={items}>
                        {items}
                      </option>
                    );
                  })}
                </Field>
                <label htmlFor="industry" className="input-label">
                  <span>Industry</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="industry"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="col-4 mb-3">
              <div className="input-data mb-3">
                <Field
                  name="level"
                  id="level"
                  as="select"
                  className="w-100 form-control"
                >
                  <option value="default">Select</option>
                  <option value="Staff">Staff</option>
                  <option value="Advisors">Advisors</option>
                  <option value="Management">Management</option>
                  <option value="Middle Management">Middle Management</option>
                  <option value="Executive Management">
                    Executive Management
                  </option>
                </Field>
                <label htmlFor="level" className="input-label">
                  <span>Level</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="level"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="px-3 mb-3">
              <label className="primary-text">
                <span>Nature and purpose of the business relationship</span>
              </label>
            </div>
            <div className="col-6 mb-3">
              <div className="input-data mb-2">
                <Field
                  name="reason"
                  id="reason"
                  as="select"
                  className="w-100 form-control"
                >
                  {reasonsDropDown.map((items, index) => {
                    return (
                      <option key={index} value={items}>
                        {items}
                      </option>
                    );
                  })}
                </Field>
                <label htmlFor="reason" className="input-label">
                  <span>Reason</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="reason"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="px-3 mb-3">
              <label htmlFor="" className="primary-text">
                <span>Income and Investment</span>
              </label>
            </div>
            <div className="col-4 mb-3">
              <div className="input-data mb-2">
                <Field
                  name="annual"
                  id="annual"
                  as="select"
                  className="w-100 form-control"
                >
                  <option value="default">Select</option>
                  <option value="100'000">CHF 0 - 100'000</option>
                  <option value="200'000">up to 200'000 </option>
                  <option value="300'000">up to 300'000 </option>
                  <option value="500'000">up to 500'000 </option>
                  <option value="500'000 and more">500'000 and more</option>
                </Field>
                <label htmlFor="annual" className="input-label">
                  <span>Annual Income</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="annual"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
            <div className="col-4 mb-3">
              <div className="input-data mb-2">
                <Field
                  name="investment"
                  id="investment"
                  as="select"
                  className="w-100 form-control"
                >
                  <option value="default">Select</option>
                  <option value="200'000">CHF 0 - 200'000</option>
                  <option value="1'0000'000">CHF 200'000 - 1'0000'000</option>
                  <option value="1'0000'000 - more">
                    CHF 1'0000'000 - more
                  </option>
                </Field>
                <label htmlFor="investment" className="input-label">
                  <span>Project Investment</span>
                  <span className="ms-1 text-danger">*</span>
                </label>
                <ErrorMessage
                  name="investment"
                  component="label"
                  className="text-danger"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="col">
                <div className="form-control input-data rounded-0 p-3">
                  <input
                    type="file"
                    name="incomeFile1"
                    className="w-100 upload-document "
                    id="incomeFile"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      const imageUrl = URL.createObjectURL(file);
                      setFieldValue("incomeFile1", imageUrl);
                    }}
                  />
                  <div className="input-img-doc p-4 bg-drop">
                    <p className="mb-0">Drag & Drop Your Files or Browse</p>
                  </div>
                  <label htmlFor="files" className="input-label">
                    <span>Upload External Document</span>
                  </label>
                  <ErrorMessage
                    component="label"
                    name="incomeFile1"
                    className="text-danger"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 text-start primary-text">
              <p>For example</p>
              <p className="mb-0">
                Proof of income, inheritance certificates, purchase, gift
                contracts, tax returns, loan, loan agreement contractProof of
                income, Certificates of inheritance, Sales contracts, Tax
                returns, Employment contracts, Extracts from the land register,
                Wage statements
              </p>
            </div>
            <div className="col-6 text-end">
              <button className="onb-btn btn-primary px-5 py-3 me-2">
                Save
              </button>
              <button
                type="button"
                className="onb-btn btn-primary px-5 py-3"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default IncomeDisclosure;
