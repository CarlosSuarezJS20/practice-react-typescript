import React from "react";
import "./navigationItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

interface ToolbarProps {
  open: boolean;
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <ul className={props.open ? "main-nav open" : "main-nav"}>
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
