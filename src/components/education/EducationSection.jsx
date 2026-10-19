import { SectionTitle } from "../common/SectionTitle";
import { formatPeriod } from "../../utils/date";

export function EducationSection({ education = [] }) {
  return (
    <section id="education" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Formação acadêmica" title="Educação" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="text-sm text-indigo-600 dark:text-indigo-400">
              {formatPeriod(item.start_date, item.end_date)}
            </span>

            <h3 className="mt-2 font-bold text-slate-900 dark:text-slate-100">
              {item.title}
            </h3>

            <p className="text-slate-700 dark:text-slate-300">
              {item.institution}
            </p>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {item.field_of_study}
            </p>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
