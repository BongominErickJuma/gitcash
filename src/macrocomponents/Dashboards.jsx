import React from "react";
import codeSnippet from "../assets/local-snippet.png";
import miniSnippet from "../assets/dash-small.jpg";

const Dashboards = () => {
  return (
    <section id="features" className="features section mt-0 p-0">
      <div className="container image-container ">
        <div className="features-image col-lg-12">
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
