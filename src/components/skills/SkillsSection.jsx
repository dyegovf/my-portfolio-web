import { SectionTitle } from "../common/SectionTitle";

export function SkillsSection({ categories = [], skills = [] }) {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Conhecimentos técnicos" title="Habilidades" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category_id === category.id,
          );

          return (
            <article
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {category.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
