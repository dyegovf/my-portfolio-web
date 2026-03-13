import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.project_name}</h2>
      {project.description && <p>{project.description}</p>}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Ver projeto
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
