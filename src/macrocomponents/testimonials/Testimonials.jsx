import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import testimonialDetails from "./testimonialdetails";

const Testimonials = () => {
  const isotopeContainerRef = useRef(null);
  const [iso, setIso] = useState(null);
  const defaultFilter = ".item0"; // Default filter class for the first item

  useEffect(() => {
    // Initialize Isotope
    const isoInstance = new Isotope(isotopeContainerRef.current, {
      itemSelector: ".item",
      layoutMode: "fitRows",
    });
    setIso(isoInstance);

    // Apply default filter after initialization
    isoInstance.arrange({ filter: defaultFilter });

    return () => {
      isoInstance.destroy();
    };
  }, []);

  const handleFilter = (filter) => {
    if (iso) {
      iso.arrange({ filter });
    }
  };

  return (
    <div>
      <div className="container mt-5 clients-testimony">
        <h2 className="mb-5">Company Testimonials</h2>
        {/* Filter buttons */}
        <div className="mb-3 d-flex align-items-center justify-content-between">
          {testimonialDetails.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => handleFilter(`.item${idx}`)}
              className="btn  m-1"
            >
              <i className="bi bi-twitter fs-2 me-4"></i>
              {testimonial.company}
            </button>
          ))}
        </div>

        {/* Isotope container */}
        <div ref={isotopeContainerRef} className="grid ">
          {testimonialDetails.map((testimonial, idx) => (
            <div
              key={idx}
              className={`item item${idx} row border-0`}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                height: "400px",
                margin: "5px",
              }}
            >
              <div className="col-lg-7">
                <h1>
                  <span className="me-2">{testimonial.company}</span>
                  {testimonial.title}
                </h1>
                <div className="d-flex align-items-center mt-5 tab-item">
                  <h1 className="me-2">{testimonial.builds}</h1>
                  <p>{testimonial.build_desc}</p>
                </div>
                <div className="d-flex align-items-center tab-item">
                  <h1 className="me-2">{testimonial.articles}</h1>
                  <p>{testimonial.articles_desc}</p>
                </div>
              </div>

              <div className="col-lg-5 word-area rounded-3 d-flex flex-column justify-content-between">
                <div>
                  <i className="bi bi-quote fs-3"></i>
                  <h6 className="fw-light">{testimonial.testimony}</h6>
                </div>
                <div className="">
                  <p>
                    <strong>{testimonial.speaker}</strong>,
                  </p>
                  <p>{testimonial.speaker_position}</p>

                  <p>{testimonial.company}</p>
                </div>

                <img src={testimonial.profileImage} alt={testimonial.speaker} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
