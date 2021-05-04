import React from "react";
import "./projectsSection.css";
import Project from "./singleProject/singleProject";
import projectsArray from "../projectsSection/projects";

const ProjectSection: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="project-intro" id="projects">
        <header>
          <h2>My lastest projects</h2>
          <hr className="highlighter" />
          <p>My progress and latest projects.</p>
        </header>
      </div>
      <div className="projects-container">
        {projectsArray.map((project) => (
          <Project
            key={project.id}
            projectId={project.id}
            title={project.projectTitle}
            image={project.image}
            firstDescription={project.description1}
            secondDescription={project.description2}
            technologies={project.languages}
            technologiesList={project.technologies}
            linksPages={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
