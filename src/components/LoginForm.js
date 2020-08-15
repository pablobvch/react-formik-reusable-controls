import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

function LoginForm(props) {
  const initialValues = {
    email: "",
    password: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required")
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
            control="chakraInput"
            name="email"
            type="email"
            label="Email"
          />
          <FormikControl
            autoComplete="on"
            control="chakraInput"
            name="password"
            type="password"
            label="Password"
          />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
