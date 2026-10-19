import { DynamicIcon } from "../common/DynamicIcon";
import { SectionTitle } from "../common/SectionTitle";

export function SkillsSection({ categories = [], skills = [] }) {
  const activeCategories = [...categories]
    .filter((category) => category.is_active !== false)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <SectionTitle
        eyebrow="Conhecimentos técnicos"
        title="Tecnologias & Ferramentas"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {activeCategories.map((category) => {
          const categorySkills = [...skills]
            .filter(
              (skill) =>
                skill.category_id === category.id && skill.is_active !== false,
            )
            .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

          return (
            <article
              key={category.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <DynamicIcon
                    name={category.icon_key}
                    fallback="mdi:shape-outline"
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {category.category}
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    title={skill.name}
                    className="group min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-indigo-500/50 dark:hover:bg-slate-950"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <DynamicIcon
                        name={skill.icon_key}
                        fallback="mdi:tools"
                        className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110"
                      />

                      <span className="truncate text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
