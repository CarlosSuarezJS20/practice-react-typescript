import React from "react";
import "./heroBanner.css";

import Logo from "../../logo/logo";
import SurveyBox from "../../surveybox/surveybox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const HeroBanner: React.FC = () => {
  return (
    <header className="hero-section" id="hero">
      <div className="hero-content-container">
        <div className="hero-header">
          <div className="logo-holder">
            <Logo heroBanner />
          </div>
          <div className="hero-content">
            <h2>Carlos Suarez Portfolio</h2>
            <p>
              "Learn as though you would never be able to master it; hold it as
              though you would be in fear of losing it"
            </p>
            <p className="confucius">-Confucius</p>
          </div>
        </div>
        <SurveyBox />
      </div>
      <div className={"arrow-holder"}>
        <Link to="about" smooth={true} spy={true} duration={0} offset={-130}>
          <FontAwesomeIcon icon={faChevronDown} className={"arrow-down"} />
        </Link>
      </div>
    </header>
  );
};

export default HeroBanner;
