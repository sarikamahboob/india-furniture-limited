import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import InquiryForm from "./Components/InquiryForm";
import PrivateRoute from "./Components/Authentication/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <InquiryForm />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
