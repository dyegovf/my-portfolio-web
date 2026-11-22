import { useState } from "react";
import { Modal, Divider, ConfigProvider, theme } from "antd";
import { DynamicIcon } from "../common/DynamicIcon";
import { SectionTitle } from "../common/SectionTitle";
import { useTheme } from "../../context/ThemeContext";

const SERVICE_CATEGORIES = {
  1: new Set(Array.of(1, 2, 3)), // Full-Stack -> Front-End (1), Back-End (2), Banco de Dados (3)
  2: new Set(Array.of(2, 3)), // APIs -> Back-End (2), Banco de Dados (3)
  3: new Set(Array.of(2, 3, 4)), // Python/ETL -> Back-End (2), Banco de Dados (3), Automação/BI (4)
  4: new Set(Array.of(3, 4)), // Dashboards/BI -> Banco de Dados (3), Automação/BI (4)
  5: new Set(Array.of(1, 2, 5, 6)), // Sustentação -> Front-End (1), Back-End (2), Cloud/DevOps (5), ITSM (6)
};

export function ServicesSection({ services = [], skills = [] }) {
  const { darkMode } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

  const activeServices = services
    .filter((s) => s.is_active !== false)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

  const relatedSkills = selectedService
    ? skills
        .filter(
          (skill) =>
            skill.is_active !== false &&
            SERVICE_CATEGORIES[selectedService.id]?.has(skill.category_id),
        )
        .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
    : [];

  return (
    <section id="services" className="scroll-mt-24 space-y-8">
      <SectionTitle
        eyebrow="Como posso ajudar"
        title="Serviços & Tecnologias"
      />

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3.5">
        {activeServices.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => setSelectedService(service)}
            className="group flex cursor-pointer items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-indigo-500/60 dark:hover:bg-slate-900"
          >
            <div className="rounded-full bg-indigo-100 p-2 text-indigo-600 transition-transform group-hover:scale-110 dark:bg-indigo-500/15 dark:text-indigo-400">
              <DynamicIcon
                name={service.icon_key}
                fallback="mdi:briefcase-outline"
                className="h-5 w-5"
              />
            </div>

            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {service.title}
            </span>
          </button>
        ))}
      </div>

      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorBgElevated: darkMode ? "#0f172a" : "#ffffff",
            borderRadiusLG: 16,
          },
        }}
      >
        <Modal
          open={Boolean(selectedService)}
          onCancel={() => setSelectedService(null)}
          footer={null}
          centered
          width={540}
          title={
            selectedService && (
              <div className="flex items-center gap-3 pt-1">
                <div className="rounded-xl bg-indigo-100 p-2.5 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <DynamicIcon
                    name={selectedService.icon_key}
                    fallback="mdi:briefcase-outline"
                    className="h-5 w-5"
                  />
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {selectedService.title}
                </span>
              </div>
            )
          }
        >
          {selectedService && (
            <div className="pt-2">
              {selectedService.short_description && (
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {selectedService.short_description}
                </p>
              )}

              {selectedService.short_description &&
                selectedService.description && (
                  <Divider className="my-3.5 border-slate-200 dark:border-slate-800" />
                )}

              {selectedService.description && (
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedService.description}
                </p>
              )}

              {relatedSkills.length > 0 && (
                <>
                  <Divider className="my-4 border-slate-200 dark:border-slate-800" />

                  <div className="space-y-3">
                    <span className="block text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                      Tecnologias & Ferramentas
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {relatedSkills.map((skill) => (
                        <span
                          key={skill.id}
                          className="inline-flex items-center gap-2 rounded-lg bg-slate-100/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                        >
                          <DynamicIcon
                            name={skill.icon_key}
                            fallback="mdi:tools"
                            className="h-4 w-4 shrink-0"
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </Modal>
      </ConfigProvider>
    </section>
  );
}
