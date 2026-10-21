import { useMemo, useState } from "react";
import { CalendarDays, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectPreviewDrawer } from "./ProjectPreviewDrawer";

function formatDate(date) {
  if (!date) {
    return null;
  }

  const [year, month, day] = date.split("-");

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(Number(year), Number(month) - 1, Number(day)));
}

function formatPeriod(startDate, endDate) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Atual";

  if (!start) {
    return null;
  }

  return `${start} - ${end}`;
}

function getStatusLabel(status) {
  const labels = {
    completed: "Concluído",
    in_progress: "Em andamento",
    planned: "Planejado",
  };

  return labels[status] || status || "Não informado";
}

function getStatusClass(status) {
  const classes = {
    completed:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400",

    in_progress:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400",

    planned:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400",
  };

  return (
    classes[status] ||
    "border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
  );
}

export function ProjectsSection({ projects = [] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(projects.map((project) => project.category).filter(Boolean)),
    ];

    return ["Todos", ...uniqueCategories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "Todos" || project.category === category;

      const technologyText = (project.technologies || [])
        .map((technology) => technology.name)
        .join(" ");

      const searchableText = [
        project.title,
        project.short_description,
        project.long_description,
        project.category,
        technologyText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, search, category]);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured,
  );

  const regularProjects = filteredProjects.filter(
    (project) => !project.featured,
  );

  function renderProjectCard(project) {
    const period = formatPeriod(project.start_date, project.end_date);

    return (
      <article
        key={project.id}
        className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
      >
        <div className="flex min-h-32 flex-col justify-between bg-linear-to-br from-indigo-100 to-slate-100 p-4 dark:from-indigo-900 dark:to-slate-900">
          <div className="flex items-start justify-between gap-3">
            <span className="w-fit rounded-full bg-white/80 px-2.5 py-1 text-xs text-indigo-700 dark:bg-black/30 dark:text-indigo-200">
              {project.category || "Projeto"}
            </span>

            {project.featured && (
              <span className="rounded-full border border-indigo-200 bg-indigo-100 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/20 dark:text-indigo-200">
                Destaque
              </span>
            )}
          </div>

          {period && (
            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
              <CalendarDays className="h-3.5 w-3.5" />
              {period}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>

            <span
              className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-semibold ${getStatusClass(
                project.status,
              )}`}
            >
              {getStatusLabel(project.status)}
            </span>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.short_description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {(project.technologies || []).map((technology) => (
              <span
                key={technology.id}
                className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {technology.name}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Ver detalhes
            </button>

            {project.demo_url && (
              <button
                type="button"
                onClick={() => setPreviewProject(project)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <ExternalLink className="h-4 w-4" />
                Ver aplicação
              </button>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section id="projects" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Trabalhos selecionados" title="Projetos" />

      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-lg px-3 py-2 text-xs transition ${
                category === item
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
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
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
        />
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          Nenhum projeto encontrado para os filtros informados.
        </div>
      )}

      {featuredProjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Projetos em destaque
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

      {regularProjects.length > 0 && (
        <div className="space-y-4">
          {featuredProjects.length > 0 && (
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Outros projetos
            </h3>
          )}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regularProjects.map(renderProjectCard)}
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {selectedProject.category || "Projeto"}
                </span>

                <h3
                  id="project-modal-title"
                  className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label="Fechar detalhes do projeto"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusClass(
                  selectedProject.status,
                )}`}
              >
                {getStatusLabel(selectedProject.status)}
              </span>

              {formatPeriod(
                selectedProject.start_date,
                selectedProject.end_date,
              ) && (
                <span className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CalendarDays className="h-4 w-4" />

                  {formatPeriod(
                    selectedProject.start_date,
                    selectedProject.end_date,
                  )}
                </span>
              )}
            </div>

            <div className="mt-6">
              <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {selectedProject.long_description ||
                  selectedProject.short_description}
              </p>
            </div>

            {(selectedProject.technologies || []).length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                  Tecnologias utilizadas
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology.id}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {technology.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
              {selectedProject.repository_url && (
                <a
                  href={selectedProject.repository_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <FaGithub className="h-4 w-4" />
                  Repositório
                </a>
              )}

              {selectedProject.demo_url && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    setPreviewProject(selectedProject);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver aplicação
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <ProjectPreviewDrawer
        project={previewProject}
        open={Boolean(previewProject)}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  );
}
