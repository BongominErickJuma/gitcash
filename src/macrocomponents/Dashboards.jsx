import React from "react";
import codeSnippet from "../assets/dashboard.png";
import miniSnippet from "../assets/main-dashboard.jpg";

const Dashboards = () => {
  return (
    <section id="features" className="features section mt-5 p-0">
      <div className="container mb-5">
        <h2>Intelligent Productivity</h2>
        <h1 className="text-info">AI Powered Commercial Opensource</h1>
        <h3>
          Our AI-powered platform increases the pace of software development.
        </h3>
      </div>

      <div className="container image-container ">
        <div className="features-image col-lg-12 shadow rounded-5">
          <img
            src={codeSnippet}
            alt="vs-code snippet"
            className="main-img rounded-2"
          />
        </div>
        <div className="features-mini-image col-lg-4">
          <img
            src={miniSnippet}
            alt="vs-code snippet"
            className="mini-img rounded-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
