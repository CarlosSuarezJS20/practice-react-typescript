import React from "react";
import "./heroBanner.css";

import Logo from "../../logo/logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Toolbar: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="hero-header">
        <div className="logo-holder">
          <Logo heroBanner />
        </div>
        <div className="hero-content">
          <h2>Carlos Suarez Portfolio</h2>
          <p>
            Learn as though you would never be able to master it; hold it as
            though you would be in fear of losing it
          </p>
          <p className="confucius">-Confucius</p>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
