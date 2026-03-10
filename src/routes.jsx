import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import DesktopLayout from "./layouts/DesktopLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

const rootRoute = createRootRoute({
  component: DesktopLayout,
});


const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$id", 
  component: ProjectDetail,
});

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experience",
  component: Experience,
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/education",
  component: Education,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  aboutRoute,
  projectsRoute,
  projectDetailRoute,
  experienceRoute,
  educationRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });
