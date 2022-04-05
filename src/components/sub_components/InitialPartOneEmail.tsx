import { Formik } from "formik";
import * as yup from "yup";
import "./InitialPartOneEmail.css";

interface EmailForm {
  email: string;
}

const InitialPartOneEmail = () => {
  return (
    <div>
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
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="InitialPartOne--EmailInput"
            />
            {touched.email && errors.email !== "" ? (
              <div className="InitialPartOne--EmailError">{errors.email}</div>
            ) : null}
            <div className="InitialPartOne--EmailButton">
                <button type="submit">Get Started</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InitialPartOneEmail;
