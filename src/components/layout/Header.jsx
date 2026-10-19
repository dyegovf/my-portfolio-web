import { Moon, Sun } from "lucide-react";

export function Header({ profile, darkMode, onToggleTheme }) {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-bold text-indigo-400"
        >
          {profile.full_name}
        </button>

        <nav className="hidden md:flex gap-4 text-sm text-slate-300">
          <button onClick={() => scrollToSection("services")}>Serviços</button>

          <button onClick={() => scrollToSection("skills")}>Habilidades</button>

          <button onClick={() => scrollToSection("projects")}>Projetos</button>

          <button onClick={() => scrollToSection("experience")}>
            Experiência
          </button>

          <button onClick={() => scrollToSection("contact")}>Contato</button>
        </nav>

        <button
          type="button"
          onClick={onToggleTheme}
          className="p-2 rounded-lg border border-slate-700"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </div>
    </header>
  );
}
