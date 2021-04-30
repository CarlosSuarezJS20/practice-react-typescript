import React from "react";
import "./contactMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <p>
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
  </section>
);

export default Toolbar;
