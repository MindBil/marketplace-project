import { Formik, Form, Field, ErrorMessage } from "formik";

const checkPassword = (str) => {
  // min 8 letter password, with at least a symbol, upper and lower case letters and a number
  const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(str);
};

const checkEmail = (str) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(str);
};

const FormikValidate = () => {
  return (
    <>
      <h1>Registration form</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "", age: 0 }}
        onSubmit={async (values, formikHelpers) => {
          alert("Successfully submitted form");
          formikHelpers.resetForm(); // nuresetina forma
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = "Name is required";
          } else if (values.name.length < 3) {
            errors.name = "Name is too short. Minimum 3 chars";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!checkEmail(values.email)) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password is required";
          } else if (!checkPassword(values.password)) {
            errors.password =
              "Password should contain upper, lower cased letters, number, symbol and minimum 8 chars";
          }

          if (values.age < 18) {
            errors.age = "Age should be more or equal than 18";
          }

          return errors;
        }}
      >
        <Form>
          <Field name="name" placeholder="Name..." type="text" />
          <ErrorMessage name="name" component="div" />
          <br />
          <Field name="email" placeholder="Email..." type="email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <Field name="password" placeholder="Password..." type="password" />
          <ErrorMessage name="password" component="div" />
          <br />
          <Field name="age" type="number" />
          <ErrorMessage name="age" component="div" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormikValidate;
