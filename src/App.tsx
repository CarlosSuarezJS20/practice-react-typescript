import React from "react";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Project from "./components/MainProjectPage/mainProjectPage";

import { Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/project/:name" component={Project} />
      <Route path="/contact-me" component={Contact} />
    </React.Fragment>
  );
};

export default App;
