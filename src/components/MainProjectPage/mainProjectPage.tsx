import React from "react";
import "./mainProjectPage.scss";
import Toolbar from "../navigation/toolbar";
import Footer from "../footer/footer";
import projects from "../projectsSection/projects";
import desktopImg from "../../assets/images/pexels-designecologist-1779487.jpg";
import { useLocation, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

interface ProjectId {
  projectId: number;
}

const Project: React.FC = () => {
  const { state } = useLocation<ProjectId>();
  const history = useHistory();

  const project = projects.find((project) => project.id === state.projectId);

  const gobackToProjectsPage = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <Toolbar />
      <section className="project-main">
        <header className="project-main__title">
          <h2>project overview:</h2>
          <hr className="overview-decoration" />
        </header>
        <hr className="project-main__border-decorator" />
        <div className="project-main__project-container">
          <div className="project-description">
            <p>{project!.description1}</p>
            <br />
            <p>{project!.description2}</p>
          </div>
          <div className="project-summary-image-links">
            <img src={project!.image} alt="project" />
            <div className="project-summary-image-links__project-links-holder">
              {project?.links.linkPage ? (
                <a
                  className="mainproject"
                  href={project?.links.linkPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visit project
                </a>
              ) : null}

              <a
                className="mainproject"
                href={project?.links.linkGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                view code
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies-main-technologies">
        <header className="technologies-main-technologies__technologies-intro-title">
          <h2>Tech stack:</h2>
          <hr className="technologies-border-decorator" />
        </header>
        <div className="technologies-main-technologies__technologies-container">
          <div className="technologies-image-container">
            <img src={desktopImg} alt="project" />
          </div>
          <div className="technologies-content">
            <ul>
              {project!.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="technologies-main-technologies__go-back-btn-container">
          <button
            className="go-back-to-projects-btn"
            onClick={gobackToProjectsPage}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> go back to projects
          </button>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Project;
