import React from "react";
import Toolbar from "./components/navigation/toolbar";
import HeroBanner from "./components/heroSection/heroBanner/heroBanner";
import AboutSection from "./components/aboutSection/aboutSection";
import ContactSection from "./components/contactMain/contactMain";
import ProjectsSection from "./components/projectsSection/projectsSection";

const App: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <HeroBanner />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
