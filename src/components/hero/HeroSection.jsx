import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection({ profile, socialLinks }) {
  const github = socialLinks.find((item) => item.platform === "github");
  const linkedin = socialLinks.find((item) => item.platform === "linkedin");

  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="max-w-3xl space-y-6">
        <span className="text-indigo-400 font-semibold">Olá, eu sou</span>

        <h1 className="text-4xl md:text-6xl font-bold">{profile.full_name}</h1>

        <h2 className="text-xl md:text-2xl text-slate-300">
          {profile.headline}
        </h2>

        <p className="text-slate-400 leading-relaxed">{profile.bio}</p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-400" />
            {profile.location}
          </span>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            {profile.email}
          </a>
        </div>

        <div className="flex gap-3">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg bg-slate-800"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-lg bg-slate-800"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
