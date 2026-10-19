import { DynamicIcon } from "../common/DynamicIcon";
import { SectionTitle } from "../common/SectionTitle";

export function ServicesSection({ services = [] }) {
  const activeServices = [...services]
    .filter((service) => service.is_active !== false)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

  return (
    <section id="services" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Como posso ajudar" title="Serviços" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {activeServices.map((service) => (
          <article
            key={service.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <DynamicIcon
                  name={service.icon_key}
                  fallback="mdi:briefcase-outline"
                  className="h-6 w-6 transition-transform group-hover:scale-110"
                />
              </div>

              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {service.title}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {service.short_description || service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
