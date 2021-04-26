import React from "react";
import Toolbar from "./components/navigation/toolbar";
import HeroBanner from "./components/heroSection/heroBanner/heroBanner";

const App: React.FC = () => {
  return (
    <div>
      <Toolbar />
      <HeroBanner />
    </div>
  );
};

export default App;
