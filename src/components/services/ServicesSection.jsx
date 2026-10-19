import { BarChart3, Code2, Database, Server, Wrench } from "lucide-react";

import { SectionTitle } from "../common/SectionTitle";

const iconMap = {
  code: Code2,
  server: Server,
  database: Database,
  chart: BarChart3,
  wrench: Wrench,
};

export function ServicesSection({ services }) {
  return (
    <section id="services" className="space-y-8">
      <SectionTitle eyebrow="Como posso ajudar" title="Serviços" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => {
          const Icon = iconMap[service.icon_key] || Code2;

          return (
            <article
              key={service.id}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="w-fit p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="mt-4 font-bold text-lg">{service.title}</h3>

              <p className="mt-2 text-sm text-slate-400">
                {service.short_description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
