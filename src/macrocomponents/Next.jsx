import React from "react";
import nextDetails from "./nextDetalis";
import Preview from "../assets/preview.png";

const Next = () => {
  return (
    <div>
      <div className="container mt-5 clients-testimony">
        <div className="row">
          {nextDetails.map((next, idx) => (
            <div key={idx} className={`item item${idx} row border-0`}>
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <img src={Preview} className="d-block w-100" />
              </div>

              <div
                className="col-lg-6 rounded-3 mt-5 d-flex flex-column justify-content-between"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div>
                  <h1 className="fw-light">{next.testimony}</h1>
                  <ul className="mt-2">
                    {next.bullets.map((benefit, index) => (
                      <li key={index} className="fs-4">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-info-outline mt-5">
                  Read More<i className="bi bi-arrow-right fs-4 ms-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Next;
