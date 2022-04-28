import { Formik } from "formik";
import * as yup from "yup";
import React from "react";
import "./InitialEmail.css";

interface EmailForm {
  email: string;
}

const InitialEmail = () => {
  return (
    <div>
      <div className="email-heading">
        Ready to watch? Enter your email to create or restart your membership
      </div>
      <Formik<EmailForm>
        initialValues={{ email: "" }}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .required("Email is Required")
            .matches(
              /([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([.])([a-zA-Z]+)/g,
              "Please enter a valid email address."
            ),
        })}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="InitialEmail-container text-center">
              <div className="InitialEmail-input-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="InitialEmail-input"
                />
                {touched.email && errors.email !== "" ? (
                  <div className="InitialEmail-error">{errors.email}</div>
                ) : null}
              </div>
              <div className="InitialEmail-button">
                <button type="submit">Get Started</button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InitialEmail;
