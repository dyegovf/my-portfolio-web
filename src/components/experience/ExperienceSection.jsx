import { SectionTitle } from "../common/SectionTitle";
import { formatPeriod } from "../../utils/date";

export function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="space-y-8">
      <SectionTitle eyebrow="Trajetória profissional" title="Experiência" />

      <div className="space-y-5">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <h3 className="font-bold text-lg">{experience.role_title}</h3>

                <p className="text-indigo-400">{experience.company_name}</p>
              </div>

              <span className="text-sm text-slate-400">
                {formatPeriod(experience.start_date, experience.end_date)}
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              {experience.description}
            </p>

            <ul className="mt-4 space-y-2">
              {experience.highlights
                ?.sort((a, b) => a.display_order - b.display_order)
                .map((highlight) => (
                  <li
                    key={highlight.id}
                    className="text-sm text-slate-400 list-disc ml-5"
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
