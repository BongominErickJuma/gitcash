import React from "react";
import bg from "../assets/world-dotted-map.png";
import companyDetails from "./companyDetails";
import projects from "./projectDetails";
import Projects from "./Projects";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero section dark-background flex-column d-flex align-items-center"
    >
      <img src={bg} alt="" data-aos="fade-in" />
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="container mt-5 d-flex flex-column justify-content-center align-items-start"
      >
        <div>
          <h2>
            Let’s build from here<span>.</span>
          </h2>
          <p>The world’s leading AI-powered developer platform.</p>{" "}
        </div>
        <div className="row  mt-5">
          <p className="fs-6 mb-3">Email Address</p>
          <form
            action="#"
            className="col-lg-8 form-search rounded d-flex align-items-stretch  ms-2 mb-3 px-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              className="form-control  border-0"
              placeholder="yourcompany@gmail.com"
            />
            <button
              type="submit"
              className="btn btn-primary rounded-0 border-0 outline-0"
            >
              Signup for GitCash
            </button>
          </form>
          <form
            action="#"
            className="col-lg-3 form-search rounded-end d-flex align-items-stretch mb-3 ms-5 bg-dark"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              type="submit"
              className="btn btn-primary w-100 border-0 bg-dark text-white"
            >
              Enterprise SignUp
            </button>
          </form>
        </div>
      </div>
      <div className="col-xl-12 floating-on-border container p-0">
        <p className="text-white mb-2 fs-4 ps-2">Top Projects</p>
        <Projects />
      </div>
    </section>
  );
};

export default Hero;
