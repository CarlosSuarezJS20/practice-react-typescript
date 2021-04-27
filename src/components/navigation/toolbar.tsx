import React, { useState } from "react";
import "./toolbar.css";

import Logo from "../logo/logo";
import NavigationItems from "../navigation/navigationItems/navigationItems";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Toolbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHandlingDropMenu = (): void => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <nav className="toolbar">
      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={onHandlingDropMenu}
      />
      <Logo heroBanner={false} />
      <NavigationItems open={openMenu} />
    </nav>
  );
};

export default Toolbar;
