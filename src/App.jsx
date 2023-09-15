import FormikTodo from "./FormikTodo";
import FormikValidate from "./FormikValidate";
import FormikYup from "./FormikYup";
import Todos from "./Todos";

const App = () => {
  return (
    <div>
      <Todos />
      <FormikTodo />
      <FormikValidate />
      <FormikYup />
    </div>
  );
};

export default App;
