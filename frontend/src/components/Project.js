import React from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "./data/projectsData";
import "./styles/About.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <button
              className="project-btn"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
