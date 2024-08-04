import { ToastContainer } from "react-toastify";
import { SignUp } from "./pages";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <SignUp />
      <ToastContainer />
    </>
  );
};

export default App;
