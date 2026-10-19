import { SectionTitle } from "../common/SectionTitle";
import { formatPeriod } from "../../utils/date";

export function ExperienceSection({ experiences = [] }) {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Trajetória profissional" title="Experiência" />

      <div className="space-y-5">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {experience.role_title}
                </h3>

                <p className="text-indigo-600 dark:text-indigo-400">
                  {experience.company_name}
                </p>
              </div>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formatPeriod(experience.start_date, experience.end_date)}
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {experience.description}
            </p>

            <ul className="mt-4 space-y-2">
              {experience.highlights
                ?.sort((a, b) => a.display_order - b.display_order)
                .map((highlight) => (
                  <li
                    key={highlight.id}
                    className="ml-5 list-disc text-sm text-slate-600 dark:text-slate-400"
                  >
                    {highlight.bullet_text}
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
