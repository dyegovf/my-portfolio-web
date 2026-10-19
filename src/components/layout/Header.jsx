import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export function Header({ profile }) {
  const { darkMode, toggleTheme } = useTheme();

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-bold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {profile.full_name}
        </button>

        <nav className="hidden items-center gap-4 text-sm text-slate-600 md:flex dark:text-slate-300">
          <button
            type="button"
            onClick={() => scrollToSection("services")}
            className="transition-colors hover:text-indigo-500"
          >
            Serviços
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="transition-colors hover:text-indigo-500"
          >
            Habilidades
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="transition-colors hover:text-indigo-500"
          >
            Projetos
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="transition-colors hover:text-indigo-500"
          >
            Experiência
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("education")}
            className="transition-colors hover:text-indigo-500"
          >
            Formação
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="transition-colors hover:text-indigo-500"
          >
            Contato
          </button>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-lg border border-slate-300 bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-amber-400 dark:hover:bg-slate-800"
          aria-label={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
          title={darkMode ? "Ativar tema claro" : "Ativar tema escuro"}
        >
          {darkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>
    </header>
  );
}
