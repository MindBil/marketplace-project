import NavigationBar from "./components/NavigationBar";
import { UserProvider } from "./contexts/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <UserProvider>
      <NavigationBar />
      <AppRoutes />
<<<<<<< HEAD
      <ToastContainer autoClose={3000} pauseOnHover={false} />
=======
>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39
    </UserProvider>
  );
};

export default App;
