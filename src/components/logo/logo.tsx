import React from "react";
import "./logo.css";

interface Section {
  heroBanner: boolean;
}

const Logo: React.FC<Section> = (props) => {
  let logoTechnologiesTitle = "technologies";

  if (props.heroBanner) {
    logoTechnologiesTitle = "tech";
  }

  return (
    <a className="logo">
      <div className="cs-title">
        <h2>cs</h2>
      </div>
      <div>
        <h2 className="technologies-title">{logoTechnologiesTitle}</h2>
      </div>
    </a>
  );
};

export default Logo;
