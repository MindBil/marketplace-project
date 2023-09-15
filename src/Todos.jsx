import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get("http://localhost:3000/todos");
  return response.data;
};

const createTodo = async (todo) => {
  const response = await axios.post("http://localhost:3000/todos", todo);
  return response.data;
};

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos()
      .then((response) => setTodos(response))
      .catch((error) => console.error(error));
  }, []);

  console.log(todos);
  return (
    <>
      <Formik
        initialValues={{ title: "" }}
        validationSchema={Yup.object({ title: Yup.string().required().min(3) })}
        onSubmit={async (values, formikHelpers) => {
          try {
            const newTodo = {
              id: Date.now(),
              completed: false,
              title: values.title,
            };
            const response = await createTodo(newTodo);
            setTodos((prevTodos) => [...prevTodos, response]);
            formikHelpers.resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <Form>
          <Field name="title" placeholder="Title..." />{" "}
          <button type="submit">Submit todo</button>
          <ErrorMessage name="title" component="div" />
        </Form>
      </Formik>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </>
  );
};

export default Todos;
