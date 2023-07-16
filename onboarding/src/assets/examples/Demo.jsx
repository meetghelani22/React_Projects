import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from "react";
const initialValues = {
  name: "",
  lname: "",
  address1: "",
  addressaddition: "",
  postcode: "",
  city: "",
  state: "",
  nationality: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  address1: Yup.string().required("Required"),
  addressaddition: Yup.string().required("Required"),
  postcode: Yup.string()
    .matches(/^[0-9]{6}$/, "Postal code must be 6 digits")
    .required("Postal Code is Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
const Demo = () => {
  const [formData, setFormData] = useState({});

  const onSubmit = (values) => {
    console.log(values);
    setFormData(values);
    console.log("Form Data is : ", formData);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name">
            {({ field }) => (
              <FormGroup>
                <FormLabel>First Name:</FormLabel>
                <input type="text" {...field} placeholder="First Name" />
                {errors.name && touched.name ? (
                  <div className="error">{errors.name}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="lname">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Last Name:</FormLabel>
                <input type="text" {...field} placeholder="Last Name" />
                {errors.lname && touched.lname ? (
                  <div className="error">{errors.lname}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="address1">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Address Line 1:</FormLabel>
                <input type="text" {...field} placeholder="Address Line 1" />
                {errors.address1 && touched.address1 ? (
                  <div className="error">{errors.address1}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="addressaddition">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Address Line 2:</FormLabel>
                <input type="text" {...field} placeholder="Address Line 2" />
                {errors.addressaddition && touched.addressaddition ? (
                  <div className="error">{errors.addressaddition}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="postcode">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Postcode:</FormLabel>
                <input type="text" {...field} placeholder="Postcode" />
                {errors.postcode && touched.postcode ? (
                  <div className="error">{errors.postcode}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="city">
            {({ field }) => (
              <FormGroup>
                <FormLabel>City:</FormLabel>
                <input type="text" {...field} placeholder="City" />
                {errors.city && touched.city ? (
                  <div className="error">{errors.city}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="state">
            {({ field }) => (
              <FormGroup>
                <FormLabel>State:</FormLabel>
                <input type="text" {...field} placeholder="State" />
                {errors.state && touched.state ? (
                  <div className="error">{errors.state}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="nationality">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Nationality:</FormLabel>
                <input type="text" {...field} placeholder="Nationality" />
                {errors.nationality && touched.nationality ? (
                  <div className="error">{errors.nationality}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Field name="email">
            {({ field }) => (
              <FormGroup>
                <FormLabel>Email:</FormLabel>
                <input type="email" {...field} placeholder="Email" />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </FormGroup>
            )}
          </Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default Demo;
