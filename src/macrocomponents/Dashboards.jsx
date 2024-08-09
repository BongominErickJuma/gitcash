import React from "react";
import codeSnippet from "../assets/local-snippet.png";

const Dashboards = () => {
  return (
    <section id="features" className="features section min-vh-100 ">
      <div className="container">
        <div
          className="features-image col-lg-12"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <img
            src={codeSnippet}
            alt="vs-code snippet"
            className="main-img rounded-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
