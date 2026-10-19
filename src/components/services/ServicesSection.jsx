import { BarChart3, Code2, Database, Server, Wrench } from "lucide-react";

import { SectionTitle } from "../common/SectionTitle";

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  chart: BarChart3,
  wrench: Wrench,
};

export function ServicesSection({ services = [] }) {
  return (
    <section id="services" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Como posso ajudar" title="Serviços" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon_key] || Code2;

          return (
            <article
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
            >
              <div className="w-fit rounded-xl bg-indigo-100 p-3 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.short_description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
