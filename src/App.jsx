import { useState } from "react";

import { usePortfolio } from "./hooks/usePortfolio";

import { LoadingState } from "./components/common/LoadingState";
import { ErrorState } from "./components/common/ErrorState";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { SkillsSection } from "./components/skills/SkillsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { EducationSection } from "./components/education/EducationSection";
import { ContactSection } from "./components/contact/ContactSection";

export default function App() {
  const { portfolio, loading, error } = usePortfolio();
  const [darkMode, setDarkMode] = useState(true);

  if (loading) {
    return <LoadingState />;
  }

  if (error || !portfolio) {
    return <ErrorState />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header
        profile={portfolio.profile}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((value) => !value)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <HeroSection
          profile={portfolio.profile}
          socialLinks={portfolio.socialLinks}
        />

        <ServicesSection services={portfolio.services} />

        <SkillsSection
          categories={portfolio.skillCategories}
          skills={portfolio.skills}
        />

        <ProjectsSection projects={portfolio.projects} />

        <ExperienceSection experiences={portfolio.experiences} />

        <EducationSection education={portfolio.education} />

        <ContactSection profile={portfolio.profile} />
      </main>

      <Footer profile={portfolio.profile} />
    </div>
  );
}
