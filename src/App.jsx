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

  if (loading) {
    return <LoadingState />;
  }

  if (error || !portfolio) {
    return <ErrorState />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header profile={portfolio.profile} />

      <main className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
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
