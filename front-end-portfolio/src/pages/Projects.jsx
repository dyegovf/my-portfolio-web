import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <div className="projects-container">
      <h1>Meus Projetos</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
