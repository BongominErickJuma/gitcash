import React, { useState, useEffect } from "react";

import bg from "../assets/world-dotted-map.png";
import Projects from "./Projects/Projects";

const Hero = () => {
  const phrases = [
    "business product with the best talent there is.",
    "satisfying MVP faster with less resources.",
    "professional dev skills easily.",
    "opensource career with support.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (currentPhrase.length < phrases[phraseIndex].length) {
      const interval = setInterval(() => {
        setCurrentPhrase(
          (prev) => prev + phrases[phraseIndex].charAt(prev.length)
        );
      }, 100); // 100ms delay between characters
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => {
        setCurrentPhrase("");
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1000); // 1-second delay before moving to the next phrase
      return () => clearTimeout(timeout);
    }
  }, [currentPhrase, phraseIndex]);

  return (
    <section
      id="hero"
      className="hero section dark-background flex-column d-flex align-items-center"
    >
      <img src={bg} alt="" data-aos="fade-in" />
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="container mt-5 d-flex flex-column justify-content-center align-items-start  main-container "
      >
        <div className=" w-100 phrase-container">
          <h2>Build your {currentPhrase}</h2>
        </div>
        <div className="mx-2 border w-100">
          <div className="row">
            <p className="mb-3">Email Address</p>
            <form
              action="#"
              className="col-lg-8 form-search rounded d-flex align-items-stretch mb-3 px-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                className="form-control border-0"
                placeholder="yourname@mail.something"
              />
              <button
                type="submit"
                className="btn btn-primary rounded-0 border-0"
              >
                Signup for GitCash
              </button>
            </form>
            <form
              action="#"
              className="col-md-12 col-lg-3 form-search enterprise-form rounded-end d-flex align-items-stretch mb-3 bg-dark"
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
      </div>
      <div className="col-xl-12 floating-on-border container p-0 mx-2">
        <p className="text-white mb-2  ps-2">Most Paying Projects</p>
        <Projects />
      </div>
    </section>
  );
};

export default Hero;
