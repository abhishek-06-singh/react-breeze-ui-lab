import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogoPage from "./components/LogoPage";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
