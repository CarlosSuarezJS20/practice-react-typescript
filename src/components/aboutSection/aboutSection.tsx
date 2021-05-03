import React from "react";
import "./aboutSection.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

import { faSitemap } from "@fortawesome/free-solid-svg-icons";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section section-center">
      <div className="about-content-holder" id="about">
        <h2>who i am...? </h2>
        <hr />
        <p>
          Hi, my name is Carlos. I’m a front-end developer passionate about
          technology and the cool things we can build with it.
        </p>
        <br />
        <p>
          I’m currently looking for opportunities where I can expand my skills
          and explore my creativity. My main professional goal is to help
          companies building interactive web pages that make them stand from the
          rest. Ultimately, I want to work in advance and exciting projects that
          will allow me to keep expanding my knowledge and utilize the full
          power of the different javaScript frameworks.
        </p>
        <div className="learn-more-btn-holder">
          <Link
            to="contact-me"
            smooth={true}
            spy={true}
            duration={0}
            className="learn-more-btn"
          >
            find out more
          </Link>
        </div>
      </div>
      <div className="skills-holder">
        <h2>technologies and Skills</h2>
        <hr />
        <div className="skills-icons-holder">
          <FontAwesomeIcon icon={faReact} className="react-about" />
          <span className="language-skill">typeScript</span>
          <FontAwesomeIcon icon={faJsSquare} className="javaScritps-about" />
          <FontAwesomeIcon icon={faCss3Alt} className="css-about" />
          <FontAwesomeIcon icon={faHtml5} className="html-about" />
          <div>
            <FontAwesomeIcon icon={faSitemap} className="faSitemaps-about" />
            <span className="language-skill">redux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
