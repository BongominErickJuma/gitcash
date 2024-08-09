import React, { useEffect } from "react";
import AOS from "aos";
import Header from "./microcomponents/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./macrocomponents/login/Login";
import Signup from "./macrocomponents/signup/Signup";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="index-page">
        <Header />
        <main id="main" className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
