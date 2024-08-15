import React from "react";
import devTestimonies from "./devTestimoniesDetails";
import "./devTestimonies.css";

const DevTestimonies = () => {
  // Filter the testimonials
  const longTestimonies = devTestimonies.filter(
    (testimony) => testimony.testimony.split(" ").length > 30
  );

  const shortTestimonies = devTestimonies.filter(
    (testimony) => testimony.testimony.split(" ").length <= 30
  );

  // Split the long testimonies into two columns
  const secondColumn = longTestimonies.slice(
    0,
    Math.ceil(longTestimonies.length / 2)
  );
  const thirdColumn = longTestimonies.slice(
    Math.ceil(longTestimonies.length / 2)
  );

  // Assign the short testimonies to the first and fourth columns
  const firstColumn = shortTestimonies.slice(
    0,
    Math.ceil(shortTestimonies.length / 2)
  );
  const fourthColumn = shortTestimonies.slice(
    Math.ceil(shortTestimonies.length / 2)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-5">Developer Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-column">
          {firstColumn.map((testimony, index) => (
            <div key={index} className="testimonial shadow rounded-4">
              <div className="d-flex align-items-center">
                <img
                  src={testimony.image}
                  alt={`${testimony.name}'s photo`}
                  className="rounded-circle"
                />
                <div className="ms-2">
                  <h4 className="fw-bold">{testimony.name}</h4>
                  <p>
                    <a href={`mailto:${testimony.email}`}>{testimony.email}</a>
                  </p>
                </div>
              </div>
              <blockquote>{testimony.testimony}</blockquote>
            </div>
          ))}
        </div>
        <div className="testimonial-column">
          {secondColumn.map((testimony, index) => (
            <div key={index} className="testimonial shadow rounded-4">
              <div className="d-flex align-items-center">
                <img
                  src={testimony.image}
                  alt={`${testimony.name}'s photo`}
                  className="rounded-circle"
                />
                <div className="ms-2">
                  <h4 className="fw-bold">{testimony.name}</h4>
                  <p>
                    <a href={`mailto:${testimony.email}`}>{testimony.email}</a>
                  </p>
                </div>
              </div>
              <blockquote>{testimony.testimony}</blockquote>
            </div>
          ))}
        </div>
        <div className="testimonial-column">
          {thirdColumn.map((testimony, index) => (
            <div key={index} className="testimonial shadow rounded-4">
              <div className="d-flex align-items-center">
                <img
                  src={testimony.image}
                  alt={`${testimony.name}'s photo`}
                  className="rounded-circle"
                />
                <div className="ms-2">
                  <h4 className="fw-bold">{testimony.name}</h4>
                  <p>
                    <a href={`mailto:${testimony.email}`}>{testimony.email}</a>
                  </p>
                </div>
              </div>
              <blockquote>{testimony.testimony}</blockquote>
            </div>
          ))}
        </div>
        <div className="testimonial-column">
          {fourthColumn.map((testimony, index) => (
            <div key={index} className="testimonial shadow rounded-4">
              <div className="d-flex align-items-center">
                <img
                  src={testimony.image}
                  alt={`${testimony.name}'s photo`}
                  className="rounded-circle"
                />
                <div className="ms-2">
                  <h4 className="fw-bold">{testimony.name}</h4>
                  <p>
                    <a href={`mailto:${testimony.email}`}>{testimony.email}</a>
                  </p>
                </div>
              </div>
              <blockquote>{testimony.testimony}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevTestimonies;
