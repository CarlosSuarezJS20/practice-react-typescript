import React from "react";
import "./footer.css";
import Logo from "../logo/logo";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MainFooter = () => {
  const history = useHistory();

  return (
    <div>
      <footer className="mainFooter">
        <section className="mainFooterTop">
          <header>
            <h2 className="header-title-footer">Portfolio page</h2>
            <p className="title-description-footer">
              Powered by React.js and Typescript
            </p>
            <div className="mainFooterTopHeaderNav">
              {history.location.pathname === "/" ? (
                <Link
                  to="hero"
                  smooth={true}
                  spy={true}
                  duration={0}
                  offset={-200}
                >
                  Home
                </Link>
              ) : (
                <NavLink to="/">Home</NavLink>
              )}
            </div>
          </header>

          <div className="item">
            <h3 className="footerTitle">star project:</h3>
            <p>
              <a
                className="mainproject"
                href="https://budget-world-reactjs.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Budget world
              </a>
            </p>
          </div>

          <div className="item">
            <h3 className="footerTitle">phone number:</h3>
            <p>+44 79 038 30 468</p>
          </div>
          <p className="copyRights">
            Copyright &copy;2021
            <br /> Code and design by
            <a
              className="name-a"
              href="https://typescript-react-portfolio.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carlos Suarez
            </a>
          </p>
        </section>

        <section className="bottomFooter">
          <Logo heroBanner />

          <div className="sectionTwo">
            <a
              href="https://www.linkedin.com/in/carlos-suarez-a3659141/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            </a>

            <a
              href="https://github.com/CarlosSuarezJS20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default MainFooter;
