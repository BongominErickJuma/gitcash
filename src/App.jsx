import React, { useEffect } from "react";
import AOS from "aos";
import Header from "./microcomponents/Header";
import Hero from "./macrocomponents/Hero";
import Productivity from "./macrocomponents/Productivity";
import Companies from "./macrocomponents/Companies";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="index-page">
      <Header />
      <main id="main" className="main">
        <Hero />
        <Productivity />
        <Dashboards />
        <Companies />
        <Footer />
      </main>
    </div>
  );
};

export default App;
