import React from "react";
import "./navigationItems.scss";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

interface ToolbarProps {
  open: boolean;
  onMenuHandler: () => void;
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const history = useHistory();

  let listOfNaVLinks = (
    <ul className={props.open ? "main-nav open" : "main-nav"}>
      <li className="link-holder">
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="link-holder__link"
        >
          home
        </NavLink>
      </li>
      <li className="link-holder">
        <Link
          to="about"
          smooth={true}
          spy={true}
          duration={0}
          offset={-130}
          className="link-holder__link"
          onClick={props.onMenuHandler}
        >
          about me
        </Link>
      </li>
      <li className="link-holder">
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={0}
          offset={-100}
          className="link-holder__link"
          onClick={props.onMenuHandler}
        >
          projects
        </Link>
      </li>
      <li className="link-holder">
        <NavLink
          activeClassName="active"
          to="/contact-me"
          className="link-holder__link"
        >
          contact
        </NavLink>
      </li>
    </ul>
  );

  // Helps with displaying the correct nav links depending of users position
  if (history.location.pathname !== "/") {
    listOfNaVLinks = (
      <ul className={props.open ? "main-nav open" : "main-nav"}>
        <li className="link-holder">
          <NavLink
            activeClassName="active"
            exact
            to="/"
            className="link-holder__link"
          >
            home
          </NavLink>
        </li>
        <li className="link-holder">
          <NavLink
            activeClassName="active"
            to="/contact-me"
            className="link-holder__link"
          >
            contact
          </NavLink>
        </li>
      </ul>
    );
  }

  return listOfNaVLinks;
};

export default Toolbar;
