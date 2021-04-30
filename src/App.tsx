import React from "react";
import Toolbar from "./components/navigation/toolbar";
import HeroBanner from "./components/heroSection/heroBanner/heroBanner";
import AboutSection from "./components/aboutSection/aboutSection";
import ContactSection from "./components/contactMain/contactMain";

const App: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <HeroBanner />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default App;
