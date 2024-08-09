import React from "react";
import details from "./Details";

const Companies = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row gy-4">
          {details.map((company, idx) => (
            <div
              key={idx}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={company.duration}
            >
              <div className="service-item position-relative">
                <div className="icon rounded-circle">
                  <i className={`bi bi-${company.logo}`}></i>
                </div>
                <a href="service-details.html" className="stretched-link">
                  <h3>{company.name}</h3>
                </a>
                <div className="d-flex align-items-center justify-content-around mt-3">
                  <a href="#">Gitcash Projects: {company.projects}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="btn btn-warning mt-5 text-white">
            View More Companies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
