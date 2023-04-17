import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signinService from "../../Service/AuthService";
import AuthService from "../../Service/AuthService";
import { useNavigate } from "react-router-dom";


export default function LoginPage(){

  const navigate = useNavigate()

  return(
    <div>
    <h1>Login</h1>

    <Formik
      initialValues={{ email: "", password: "" }}
      enableReinitialize
      validate={(values) => {
        const errors: { email?: string } = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        AuthService().login(values.email, values.password).then((() => (navigate("/address", {replace: true}))))
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <label htmlFor="email">E-Mail:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
};