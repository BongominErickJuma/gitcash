import React from "react";
import Hero from "./macrocomponents/Hero";
import Footer from "./microcomponents/Footer";
import Dashboards from "./macrocomponents/Dashboards";
import Testimonials from "./macrocomponents/testimonials/Testimonials";
import Next from "./macrocomponents/Next";
import Next2 from "./macrocomponents/Next2";
import Clients from "./macrocomponents/clients/Clients";
import DevTestimonies from "./macrocomponents/testimonials/DevTestimonies";

const Main = () => {
  return (
    <div>
      <Hero />
      <Next />
      <Clients />
      <Next2 />
      <Dashboards />
      <Testimonials />
      <DevTestimonies />
      <Footer />
    </div>
  );
};

export default Main;
