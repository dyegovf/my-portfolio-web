import { ContactForm } from "./ContactForm";
import { SectionTitle } from "../common/SectionTitle";

export function ContactSection({ profile }) {
  return (
    <section id="contact" className="space-y-8">
      <SectionTitle eyebrow="Entre em contato" title="Vamos conversar" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Tem um projeto em mente?</h3>

          <p className="text-slate-400">
            Entre em contato para conversar sobre desenvolvimento web, APIs,
            automação, dados ou manutenção de sistemas.
          </p>

          <a href={`mailto:${profile.email}`} className="text-indigo-400">
            {profile.email}
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
