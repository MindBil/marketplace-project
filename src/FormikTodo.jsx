import * as Yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  name: Yup.string().required().min(3),
  traits: Yup.array(Yup.string().required("Required")).min(3),
});

const FormikTodo = () => {
  return (
    <div>
      <h2>FormikTodo</h2>
      <Formik
        initialValues={{ name: "", traits: [""], quantity: 1 }}
        validationSchema={validationSchema}
        onSubmit={() => {
          alert("Success");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Field name="name" placeholder="Name..." />
            <ErrorMessage name="name" component="div" />
            <FieldArray
              name="traits"
              render={(arrayHelpers) => (
                <div>
                  {values.traits && values.traits.length > 0 ? (
                    values.traits.map((friend, index) => (
                      <div key={index}>
                        <Field name={`traits.${index}`} />
                        <ErrorMessage name={`traits.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all traits from the list */}
                      Add a trait
                    </button>
                  )}
                </div>
              )}
            />
            <h3>
              Quantity: {values.quantity}{" "}
              <button
                onClick={() => setFieldValue("quantity", values.quantity + 1)}
              >
                +1
              </button>{" "}
              <button
                onClick={() => setFieldValue("quantity", values.quantity - 1)}
              >
                -1
              </button>
              <button onClick={() => setFieldValue("quantity", 99)}>
                Take everything!
              </button>
            </h3>
            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikTodo;
