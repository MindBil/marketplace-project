import * as Yup from "yup";
import { object, string, number, ref } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const registrationSchema = object({
  name: string().required("Būtina užpildyti").min(3, "Mažiausiai 3 simboliai"),
  email: string().required().email(),
  password: string()
    .required()
    .min(8)
    .matches(
      passwordRegex,
      "Password should contain at least a symbol, upper and lower case letters and a number"
    ),
  repeatedPassword: string()
    .required()
    .oneOf([ref("password")], "Passwords do not match"),
  age: number().required().min(18).max(99),
});

const registrationSchemaYup = Yup.object({
  name: Yup.string()
    .required("Būtina užpildyti")
    .min(3, "Mažiausiai 3 simboliai"),
  email: Yup.string().required().email(),
  password: Yup.string()
    .required()
    .min(8)
    .matches(
      passwordRegex,
      "Password should contain at least a symbol, upper and lower case letters and a number"
    ),
  repeatedPassword: Yup.string()
    .required()
    .test(
      "passwords-match",
      "Passwords must match",
      (value, values) => values.parent.password === value
    ),
  age: Yup.number().required().min(18).max(99),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatedPassword: "",
  age: 0,
};

const FormikYup = () => {
  return (
    <>
      <h1>Registration form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, formikHelpers) => {
          alert("Successfully submitted form");
          formikHelpers.resetForm(); // nuresetina forma
        }}
        validationSchema={registrationSchemaYup}
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
          <Field
            name="repeatedPassword"
            placeholder="Repeat password..."
            type="password"
          />
          <ErrorMessage name="repeatedPassword" component="div" />
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

export default FormikYup;
