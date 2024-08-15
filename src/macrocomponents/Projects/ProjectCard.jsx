import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "aos/dist/aos.css"; // Import AOS styles
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const ProjectCard = ({
  title,
  description,
  time,
  iconClass,
  tools,
  aosType,
  contributeLink,
  isExternalLink,
}) => {
  const CardContent = (
    <div className="card text-white h-100" style={{ backgroundColor: "white" }}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <i
            className={`bi ${iconClass} me-2`}
            style={{ fontSize: "2rem", color: tools[0].color }}
          ></i>
          <h5 className=" mb-0 fs-6">{title}</h5>
        </div>
        <p className="text-black fs-6">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-info fs-6">{time} USD</small>
        <span className="badge bg-info fs-6 fw-light">Contribute</span>
      </div>
    </div>
  );

  return (
    <div className="col-md-3 mb-4" data-aos={aosType}>
      {isExternalLink ? (
        <a
          href={contributeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none h-100 text-white"
          style={{ display: "block" }}
        >
          {CardContent}
        </a>
      ) : (
        <Link
          to={contributeLink}
          className="text-decoration-none h-100 text-white"
          style={{ display: "block" }}
        >
          {CardContent}
        </Link>
      )}
    </div>
  );
};

export default ProjectCard;
