import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectDetails";

const Projects = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="text-dark ">Commercial Websites</h2>
          <a href="#" className="btn bg-info">
            View All Projects
          </a>
        </div>

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
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="text-dark ">Commercial Dashboards</h2>
          <a href="#" className="btn bg-info">
            View All Projects
          </a>
        </div>

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
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="text-dark ">Commercial APIs</h2>
          <a href="#" className="btn bg-info">
            View All Projects
          </a>
        </div>

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
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="text-dark ">Commercial Android/IOS</h2>
          <a href="#" className="btn bg-info">
            View All Projects
          </a>
        </div>

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
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h2 className="text-dark ">Commercial Desktop Apps</h2>
          <a href="#" className="btn bg-info">
            View All Projects
          </a>
        </div>

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
