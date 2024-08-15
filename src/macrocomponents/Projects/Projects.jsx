import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails";

const Projects = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              time={project.time}
              iconClass={project.iconClass}
              tools={project.tools}
              aosType={project.aosType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
