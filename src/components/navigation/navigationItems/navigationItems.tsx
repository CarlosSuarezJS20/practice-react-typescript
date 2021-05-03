import React from "react";
import "./navigationItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

interface ToolbarProps {
  open: boolean;
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const history = useHistory();

  let listOfNaVLinks = (
    <ul className={props.open ? "main-nav open" : "main-nav"}>
      <li>
        <NavLink activeClassName="active" exact to="/" className="links">
          home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/blog" className="links">
          blog
        </NavLink>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          spy={true}
          duration={0}
          offset={-130}
          className="links"
        >
          about me
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={0}
          offset={-100}
          className="links"
        >
          projects
        </Link>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact-me" className="links">
          contact
        </NavLink>
      </li>
      <li>
        <a className="links">
          <span>my cv</span>
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </li>
    </ul>
  );

  // Helps with displaying the correct nav links depending of users position
  if (history.location.pathname !== "/") {
    listOfNaVLinks = (
      <ul className={props.open ? "main-nav open" : "main-nav"}>
        <li>
          <NavLink activeClassName="active" exact to="/" className="links">
            home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/blog" className="links">
            blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact-me" className="links">
            contact
          </NavLink>
        </li>
        <li>
          <a className="links">
            <span>my cv</span>
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </li>
      </ul>
    );
  }

  return listOfNaVLinks;
};

export default Toolbar;
