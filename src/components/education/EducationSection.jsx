import { SectionTitle } from "../common/SectionTitle";
import { formatPeriod } from "../../utils/date";

export function EducationSection({ education }) {
  return (
    <section id="education" className="space-y-8">
      <SectionTitle eyebrow="Formação acadêmica" title="Educação" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((item) => (
          <article
            key={item.id}
            className="p-6 rounded-2xl border border-slate-800 bg-slate-900"
          >
            <span className="text-sm text-indigo-400">
              {formatPeriod(item.start_date, item.end_date)}
            </span>

            <h3 className="mt-2 font-bold">{item.title}</h3>

            <p className="text-slate-300">{item.institution}</p>

            <p className="mt-2 text-sm text-slate-400">{item.field_of_study}</p>

            <p className="mt-3 text-sm text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
