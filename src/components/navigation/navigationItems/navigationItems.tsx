import React from "react";
import "./navigationItems.css";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

const pdfCv = "../../../assets/images/developer-cv.docx.pdf";

interface ToolbarProps {
  open: boolean;
  onMenuHandler: () => void;
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
        <Link
          to="about"
          smooth={true}
          spy={true}
          duration={0}
          offset={-130}
          className="links"
          onClick={props.onMenuHandler}
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
          onClick={props.onMenuHandler}
        >
          projects
        </Link>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact-me" className="links">
          contact
        </NavLink>
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
          <NavLink activeClassName="active" to="/contact-me" className="links">
            contact
          </NavLink>
        </li>
      </ul>
    );
  }

  return listOfNaVLinks;
};

export default Toolbar;
