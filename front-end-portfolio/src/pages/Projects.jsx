import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <div>
      <h1>Meus Projetos</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            {p.project_name}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
