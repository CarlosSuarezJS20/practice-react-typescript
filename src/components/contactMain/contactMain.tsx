import React from "react";
import "./contactMain.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookReader,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Toolbar: React.FC = () => (
  <React.Fragment>
    <section className="contact-me" id="contact-me">
      <div className="contact-me__header-holder">
        <h2>connect with me:</h2>
        <hr className="title-highlighter" />
        <p className="contact-me-text">
          Want to get in touch? I enjoy sharing knowledge and finding new ideas.
        </p>
      </div>
      <div className="contact-me__contact-icons-holder">
        <a
          href="https://github.com/CarlosSuarezJS20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={faGithub}
            id="social"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-suarez-a3659141/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={faLinkedin}
            id="social"
          />
        </a>

        <a
          href="https://www.instagram.com/carlos_suarez_photography/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon"
            icon={faInstagram}
            id="social"
          />
        </a>
      </div>
    </section>
    <section className="reason-why-section">
      <div className="reason-why-section__additional">
        <div>
          <h2>Why work with me?</h2>
          <hr className="title-highlighter" />
          <p>
            There are many things I could bring to your team, here are a few:
          </p>
        </div>
        <div className="why-work-with-me">
          <div className="reason-container">
            <div className="why-icon-container">
              <FontAwesomeIcon icon={faCode} className="why-icons" />
            </div>
            <h2>tech enthusiast</h2>
            <p>
              I’m a strong believer that programmers are at the forefront of our
              current technology revolution
            </p>
          </div>
          <div className="reason-container">
            <div className="why-icon-container">
              <FontAwesomeIcon icon={faBookReader} className="why-icons" />
            </div>
            <h2>can do attitude</h2>
            <p>
              Willingness to jump into the unknown, always with a open and
              positive mind-set to contribute with a ideas and find sustainable
              solutions
            </p>
          </div>
          <div className="reason-container">
            <div className="why-icon-container">
              <FontAwesomeIcon icon={faUsers} className="why-icons" />
            </div>
            <h2>team adaptability </h2>
            <p>
              Accustomed to working in fast paced environments and across
              diverse team structures
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Toolbar;
