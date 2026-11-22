import { useState } from "react";
import { Modal, Divider, ConfigProvider, theme } from "antd";
import { DynamicIcon } from "../common/DynamicIcon";
import { SectionTitle } from "../common/SectionTitle";
import { useTheme } from "../../context/ThemeContext";

const SERVICE_SKILLS = {
  1: new Set(Array.of(1, 2, 3, 4, 5, 9, 15)),
  2: new Set(Array.of(5, 6, 7, 10, 19, 8)),
  3: new Set(Array.of(6, 18, 19, 14, 8, 9)),
  4: new Set(Array.of(12, 11, 14, 13, 8, 10)),
  5: new Set(Array.of(20, 21, 4, 9, 15, 16, 17)),
};

export function ServicesSection({ services = [], skills = [] }) {
  const { darkMode } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

  const activeServices = services
    .filter((s) => s.is_active !== false)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));

  const relatedSkills = selectedService
    ? skills
        .filter((skill) => SERVICE_SKILLS[selectedService.id]?.has(skill.id))
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

      {selectedService && (
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
            open={true}
            onCancel={() => setSelectedService(null)}
            footer={null}
            centered
            width={540}
          >
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center gap-3 pr-6">
                <div className="rounded-xl bg-indigo-100 p-2.5 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <DynamicIcon
                    name={selectedService.icon_key}
                    fallback="mdi:briefcase-outline"
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {selectedService.short_description}
              </p>

              <Divider className="my-3 border-slate-200 dark:border-slate-800" />

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedService.description}
              </p>

              <Divider className="my-3 border-slate-200 dark:border-slate-800" />

              <div className="space-y-2.5">
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
            </div>
          </Modal>
        </ConfigProvider>
      )}
    </section>
  );
}
