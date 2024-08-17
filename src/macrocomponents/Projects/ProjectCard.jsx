import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  time,
  iconClass,
  tools,
  contributeLink,
}) => {
  const CardContent = (
    <div className="card text-white" style={{ backgroundColor: "white" }}>
      <div className="px-2">
        <div className="d-flex align-items-center">
          <i
            className={`bi ${iconClass} me-2`}
            style={{ fontSize: "2rem", color: tools[0].color }}
          ></i>
          <h5
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {title}
          </h5>
        </div>
        <p className="text-black" style={{ fontSize: "0.75rem" }}>
          {description.slice(0, 50) + "..."}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <small className="text-info fs-6">{time} ago</small>
        <span className="badge bg-info fs-6 fw-light">Contribute</span>
      </div>
    </div>
  );

  return (
    <Link to={contributeLink} className="text-decoration-none h-100 text-white">
      {CardContent}
    </Link>
  );
};

export default ProjectCard;
