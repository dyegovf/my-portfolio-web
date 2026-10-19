import { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { SectionTitle } from "../common/SectionTitle";

export function ProjectsSection({ projects }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "Todos",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "Todos" || project.category === category;

      const technologies = project.technologies
        .map((technology) => technology.name)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.short_description.toLowerCase().includes(query) ||
        technologies.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, search, category]);

  return (
    <section id="projects" className="space-y-8">
      <SectionTitle eyebrow="Trabalhos selecionados" title="Projetos" />

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`px-3 py-2 rounded-lg text-xs ${
                category === item
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar projeto..."
          className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
          >
            <div className="h-32 bg-gradient-to-br from-indigo-900 to-slate-900 p-4">
              <span className="text-xs text-indigo-300">
                {project.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-bold">{project.title}</h3>

              <p className="mt-2 text-sm text-slate-400">
                {project.short_description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((technology) => (
                  <span
                    key={technology.id}
                    className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-300"
                  >
                    {technology.name}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="mt-5 text-sm text-indigo-400 font-semibold"
              >
                Ver detalhes
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 grid place-items-center">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>

              <button type="button" onClick={() => setSelectedProject(null)}>
                <X />
              </button>
            </div>

            <p className="mt-5 text-slate-300 leading-relaxed">
              {selectedProject.long_description ||
                selectedProject.short_description}
            </p>

            <p className="mt-4 text-sm text-indigo-400">
              Categoria: {selectedProject.category}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology.id}
                  className="px-2 py-1 rounded-md bg-slate-800 text-xs"
                >
                  {technology.name}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {selectedProject.repository_url && (
                <a
                  href={selectedProject.repository_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <FaGithub className="w-4 h-4" />
                  Repositório
                </a>
              )}

              {selectedProject.demo_url && (
                <a
                  href={selectedProject.demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-indigo-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demonstração
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
