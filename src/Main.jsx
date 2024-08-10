import React from "react";
import Hero from "./macrocomponents/Hero";
import Productivity from "./macrocomponents/Productivity";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";
import Projects from "./macrocomponents/Projects";

const Main = () => {
  return (
    <div>
      <Hero />
      <Productivity />
      <Dashboards />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
