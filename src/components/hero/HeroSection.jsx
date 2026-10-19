import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection({ profile, socialLinks }) {
  const github = socialLinks.find((item) => item.platform === "github");

  const linkedin = socialLinks.find((item) => item.platform === "linkedin");

  return (
    <section id="home" className="scroll-mt-24 py-8 md:py-12">
      <div className="max-w-4xl space-y-6">
        <span className="font-semibold text-indigo-500 dark:text-indigo-400">
          Olá, eu sou
        </span>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-6xl">
          {profile.full_name}
        </h1>

        <h2 className="text-xl text-slate-600 dark:text-slate-300 md:text-2xl">
          {profile.headline}
        </h2>

        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
            {profile.location}
          </span>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-indigo-600 dark:hover:text-white"
          >
            <Mail className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
            {profile.email}
          </a>
        </div>

        <div className="flex gap-3">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg bg-slate-200 p-3 text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg bg-slate-200 p-3 text-slate-700 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
