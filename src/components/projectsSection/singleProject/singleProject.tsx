import React from "react";
import "./singleProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import {
  faCss3Alt,
  faReact,
  faHtml5,
  faJsSquare,
  faNodeJs,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

// generates the classes
const classesForIcons = (icon: IconDefinition) => {
  let iconClass;

  switch (icon) {
    case faReact:
      iconClass = "react-icon";
      break;
    case faJsSquare:
      iconClass = "js-icon";
      break;
    case faCss3Alt:
      iconClass = "css-icon";
      break;
    case faHtml5:
      iconClass = "html-icon";
      break;
    case faNodeJs:
      iconClass = "nodejs-icon";
  }
  return iconClass;
};

interface Project {
  projectId: number;
  title: string;
  firstDescription: string;
  secondDescription: string;
  technologies: IconDefinition[];
  image: string;
  linksPages: { linkGitHub?: string; linkPage?: string };
}

const AboutSection: React.FC<Project> = (props) => {
  return (
    <article className="card">
      <div className="project-content">
        <div className="image-container">
          <img src={props.image} alt="project-image" />
          <div className="tech-stack">
            <h3>Tech stack</h3>
            {props.technologies.map((tech) => (
              <FontAwesomeIcon
                key={tech.iconName}
                icon={tech}
                className={classesForIcons(tech)}
                style={{ margin: "0 0.3rem" }}
              />
            ))}
          </div>
        </div>
        <div className="card-info-container">
          <h2>{props.title}</h2>
          <div className="card-description">
            <p>{props.firstDescription}</p>
            <br />
            <p>{props.secondDescription}</p>
          </div>
          <div className="learn-more-holder">
            <NavLink
              to={{
                pathname: "/project",
                state: { projectId: props.projectId },
              }}
              className="learn-more"
            >
              want learn more?
            </NavLink>
          </div>
        </div>
        <div className="project-links-container">
          {props.linksPages.linkPage ? (
            <a
              href={props.linksPages.linkPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              visit page
            </a>
          ) : null}

          <a
            href={props.linksPages.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit github
          </a>
        </div>
      </div>
    </article>
  );
};

export default AboutSection;
