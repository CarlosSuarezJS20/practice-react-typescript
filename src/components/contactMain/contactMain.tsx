import React from "react";
import "./contactMain.css";
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
  <section className="contact-me">
    <div className="contact-greet">
      <header className="header-holder">
        <h2>connect with me:</h2>
      </header>
      <hr className="header-line" />
      <p className="contact-me-text">
        want to get in touch? I enjoy sharing knowledge and finding new ideas.
      </p>
    </div>
    <div className="contact-icons-holder">
      <a>
        <FontAwesomeIcon className="social-icon" icon={faGithub} id="social" />
      </a>
      <a>
        <FontAwesomeIcon
          className="social-icon"
          icon={faLinkedin}
          id="social"
        />
      </a>
      <a>
        <FontAwesomeIcon
          className="social-icon"
          icon={faInstagram}
          id="social"
        />
      </a>
    </div>
    <div>
      <div>
        <div>
          <h2>why work with me?</h2>
          <p>
            There are many things I could bring to your team, here are a few:
          </p>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faCode} />
            <h2>technology enthusiast</h2>
            <p>
              i believe that programmers are at the front row of human
              technology revolution
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBookReader} />
            <h2>technology enthusiast</h2>
            <p>
              development is at the front row of the 21s century human
              revolution
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} />
            <h2>technology enthusiast</h2>
            <p>
              development is at the front row of the 21s century human
              revolution
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Toolbar;
