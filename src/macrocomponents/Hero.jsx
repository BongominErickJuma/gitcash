import React from "react";
import bg from "../assets/world-dotted-map.png";

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background ">
      <img src={bg} alt="" data-aos="fade-in" />
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="container ps-5  mt-5  d-flex flex-column justify-content-between"
      >
        <div>
          <h2>
            Let’s build from here<span>.</span>
          </h2>
          <p>The world’s leading AI-powered developer platform.</p>{" "}
        </div>
        <div className="row">
          <p className="fs-6">Email Address</p>
          <form
            action="#"
            className="col-lg-6 form-search rounded d-flex align-items-stretch mb-3 p-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              className="form-control rounded border-0"
              placeholder="yourcompany@gmail.com"
            />
            <button
              type="submit"
              className="btn btn-primary border-0 outline-0"
            >
              Signup for Gitcash
            </button>
          </form>
          <form
            action="#"
            className="col-lg-4 form-search rounded d-flex align-items-stretch mb-3 ms-5 bg-dark"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              type="submit"
              className="btn btn-primary w-100 border-0 bg-dark text-white"
            >
              Start a free enterprise trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
