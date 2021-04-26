import React from "react";
import "./toolbar.css";

import Logo from "../logo/logo";
import NavigationItems from "../navigation/navigationItems/navigationItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Toolbar: React.FC = () => {
  return (
    <nav className="toolbar">
      <FontAwesomeIcon icon={faBars} className="menu-icon" />
      <Logo heroBanner={false} />
      <NavigationItems />
    </nav>
  );
};

export default Toolbar;
