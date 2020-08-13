import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

function RegistrationForm(props) {
  const options = [
    {
      key: "Email",
      value: "emailMoc"
    },
    { key: "Telephone", value: "telephoneMoc" }
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephoneMoc",
      then: Yup.string().required("Required")
    })
  });

  const onSubmit = (values) => console.log("values", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />

          <FormikControl
            autoComplete="on"
            control="input"
            name="password"
            type="password"
            label="Password"
          />

          <FormikControl
            autoComplete="on"
            control="input"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
          />

          <FormikControl
            control="radio"
            name="modeOfContact"
            label="Mode of contact"
            options={options}
          />

          <FormikControl
            control="input"
            type="text"
            name="phone"
            label="Phone number"
          />

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
