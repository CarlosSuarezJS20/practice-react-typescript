import React from "react";
import "./navigationItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Toolbar: React.FC = () => {
  return (
    <ul className="main-nav">
      <li>
        <a>blog</a>
      </li>
      <li>
        <a>about me</a>
      </li>
      <li>
        <a>projects</a>
      </li>
      <li>
        <a>Why me?</a>
      </li>
      <li>
        <a>contact</a>
      </li>
      <li>
        <a>
          <span>my cv</span>
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </li>
    </ul>
  );
};

export default Toolbar;
