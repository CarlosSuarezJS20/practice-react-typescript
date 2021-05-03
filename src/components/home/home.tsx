import React from "react";
import Toolbar from "../navigation/toolbar";
import HeroBanner from "../heroSection/heroBanner/heroBanner";
import AboutSection from "../aboutSection/aboutSection";
import ContactSection from "../contactMain/contactMain";
import ProjectsSection from "../projectsSection/projectsSection";
import Footer from "../footer/footer";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Toolbar />
      <HeroBanner />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
