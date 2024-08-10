import React from "react";
import Hero from "./macrocomponents/Hero";
// import Productivity from "./macrocomponents/Productivity";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";
import Projects from "./macrocomponents/Projects";
import Companies from "./macrocomponents/Companies";
import Testimonials from "./macrocomponents/testimonials/Testimonials";
// import Clients from "./macrocomponents/clients/Clients";

const Main = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Dashboards />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Main;
