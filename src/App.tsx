import React from "react";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Project from "./components/project/project";

import { Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/project" component={Project} />
      <Route path="/contact-me" component={Contact} />
    </React.Fragment>
  );
};

export default App;
