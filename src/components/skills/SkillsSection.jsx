import { SectionTitle } from "../common/SectionTitle";

export function SkillsSection({ categories, skills }) {
  return (
    <section id="skills" className="space-y-8">
      <SectionTitle eyebrow="Conhecimentos técnicos" title="Habilidades" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category_id === category.id,
          );

          return (
            <article
              key={category.id}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900"
            >
              <h3 className="font-bold text-lg">{category.category}</h3>

              <div className="flex flex-wrap gap-2 mt-5">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm"
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
