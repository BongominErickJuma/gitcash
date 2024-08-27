import React from "react";
import { nextDetails } from "./nextDetalis";
import Preview from "../assets/preview.png";
import svg from "../assets/svgs/icon-list.svg";

const Next = () => {
  const listStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    margin: "0", // Optional: to remove margin
  };

  const liStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px", // Space between list items
  };

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
                  <ul style={listStyle}>
                    {next.bullets.map((benefit, index) => (
                      <li key={index} style={liStyle}>
                        <img src={svg} alt="check svg" className="me-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-info-outline mt-5">
                  GitCash Enterprise
                  <i className="bi bi-arrow-right fs-4 ms-2"></i>
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
