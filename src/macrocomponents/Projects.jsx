import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails";

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-dark mb-4">Open Sources</h2>
      <p className="text-dark">
        Open any open-source repository on Gitcash to start contributing.
      </p>
      <div className="row">
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
      <div className="btn bg-info w-25 mx-auto mb-5 text-center">
        View All Projects
      </div>
    </div>
  );
};

export default Projects;
