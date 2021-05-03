import React from "react";
import "./project.css";
import Toolbar from "../navigation/toolbar";
import Footer from "../footer/footer";
import projects from "../projectsSection/projects";
import { useLocation } from "react-router-dom";

const Project: React.FC = () => {
  const { state }: any = useLocation();

  const project = projects.find((project) => project.id === state.projectId);
  console.log(project);

  return (
    <section className="project-main">
      <Toolbar />
      <div></div>
      <Footer />
    </section>
  );
};

export default Project;
