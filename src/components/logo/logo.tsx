import React from "react";
import "./logo.scss";
import { NavLink } from "react-router-dom";

interface Section {
  heroBanner: boolean;
}

const Logo: React.FC<Section> = (props) => {
  let logoTechnologiesTitle = "technologies";

  if (props.heroBanner) {
    logoTechnologiesTitle = "tech";
  }

  return (
    <NavLink to="/" className="logo">
      <div className="logo__cs-title">
        <h2>cs</h2>
      </div>
      <div>
        <h2 className="logo__technologies-title">{logoTechnologiesTitle}</h2>
      </div>
    </NavLink>
  );
};

export default Logo;
