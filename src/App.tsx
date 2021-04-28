import React from "react";
import Toolbar from "./components/navigation/toolbar";
import HeroBanner from "./components/heroSection/heroBanner/heroBanner";
import AboutSection from "./components/aboutSection/aboutSection";

const App: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <HeroBanner />
      <AboutSection />
    </div>
  );
};

export default App;
