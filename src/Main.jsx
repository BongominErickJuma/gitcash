import React from "react";
import Hero from "./macrocomponents/Hero";
// import Productivity from "./macrocomponents/Productivity";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";
import Projects from "./macrocomponents/Projects";
import Companies from "./macrocomponents/Companies";
import Testimonials from "./macrocomponents/testimonials/Testimonials";
import Next from "./macrocomponents/Next";
import Next2 from "./macrocomponents/Next2";
// import Clients from "./macrocomponents/clients/Clients";
import Clients from "./macrocomponents/clients/Clients";

const Main = () => {
  return (
    <div>
      <Hero />
      <Next />
      <Clients />
      <Next2 />
      <Companies />
      <Dashboards />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Main;
