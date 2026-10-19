import { ContactForm } from "./ContactForm";
import { SectionTitle } from "../common/SectionTitle";

export function ContactSection({ profile }) {
  return (
    <section id="contact" className="scroll-mt-24 space-y-8">
      <SectionTitle eyebrow="Entre em contato" title="Vamos conversar" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Tem um projeto em mente?
          </h3>

          <p className="text-slate-600 dark:text-slate-400">
            Entre em contato para conversar sobre desenvolvimento web, APIs,
            automação, dados ou manutenção de sistemas.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {profile.email}
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
