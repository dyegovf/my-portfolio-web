import { supabase } from "../lib/supabaseClient";

export async function getPortfolioData() {
  const [
    profileResult,
    socialLinksResult,
    educationResult,
    categoriesResult,
    skillsResult,
    experiencesResult,
    servicesResult,
    projectsResult,
  ] = await Promise.all([
    supabase.from("profile").select("*").limit(1).single(),

    supabase
      .from("social_links")
      .select("*")
      .eq("is_active", true)
      .order("display_order"),

    supabase.from("education").select("*").order("display_order"),

    supabase
      .from("skill_categories")
      .select("*")
      .eq("is_active", true)
      .order("display_order"),

    supabase.from("skills").select("*").order("display_order"),

    supabase
      .from("professional_experiences")
      .select(
        `
        *,
        highlights:experience_highlights (
          id,
          bullet_text,
          display_order
        )
      `,
      )
      .order("display_order"),

    supabase
      .from("services")
      .select("*")
      .eq("is_active", true)
      .order("display_order"),

    supabase
      .from("projects")
      .select(
        `
        *,
        technologies:project_technologies (
          skill:skills (
            id,
            name
          )
        )
      `,
      )
      .eq("is_active", true)
      .order("display_order"),
  ]);

  const results = [
    profileResult,
    socialLinksResult,
    educationResult,
    categoriesResult,
    skillsResult,
    experiencesResult,
    servicesResult,
    projectsResult,
  ];

  const failedResult = results.find((result) => result.error);

  if (failedResult) {
    throw failedResult.error;
  }

  const projects = projectsResult.data.map((project) => ({
    ...project,
    technologies: project.technologies
      .map((item) => item.skill)
      .filter(Boolean),
  }));

  return {
    profile: profileResult.data,
    socialLinks: socialLinksResult.data,
    education: educationResult.data,
    skillCategories: categoriesResult.data,
    skills: skillsResult.data,
    experiences: experiencesResult.data,
    services: servicesResult.data,
    projects,
  };
}
