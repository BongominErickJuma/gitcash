import React from "react";
import Hero from "./macrocomponents/Hero";
import Productivity from "./macrocomponents/Productivity";
import Companies from "./macrocomponents/Companies";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";

const Main = () => {
  return (
    <div>
      <Hero />
      <Productivity />
      <Dashboards />
      <Companies />
      <Footer />
    </div>
  );
};

export default Main;
