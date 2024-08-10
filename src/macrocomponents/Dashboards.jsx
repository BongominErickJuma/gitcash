import React from "react";
import codeSnippet from "../assets/local-snippet.png";
import miniSnippet from "../assets/dash-small.jpg";

const Dashboards = () => {
  return (
    <section id="features" className="features section mt-0 p-0">
      <div className="container position-relative">
        <div className="features-image col-lg-12 shadow">
          <img
            src={codeSnippet}
            alt="vs-code snippet"
            className="main-img rounded-2"
          />
        </div>
        <div
          className="features-image col-lg-4 position-absolute  end-0 borrom-0 top-50 w-50 shadow-lg"
          style={{
            height: "500px",
          }}
        >
          <img
            src={miniSnippet}
            alt="vs-code snippet"
            className="main-img rounded-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
