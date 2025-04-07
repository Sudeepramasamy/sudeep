import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import '../../components/styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return <h2>Project Not Found</h2>;

  return (
    <div className="project-details">
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p><strong>Skills:</strong> {project.skills}</p>
      <div className="link">
        <a href={project.live} className="live" target="_blank" rel="noopener noreferrer">Live</a>
        <a href={project.code} className="code" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <br />
      <Link to="/" className="btn-primary">&larr; Back</Link>
    </div>
  );
};

export default ProjectDetails;
