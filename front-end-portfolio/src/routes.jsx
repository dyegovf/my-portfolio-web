import { 
  useState,
  useEffect
 } from 'react'
import { 
  createRoute,
  createRouter,
  createRootRoute
 } from '@tanstack/react-router'
import DesktopLayout from './layouts/DesktopLayout'
import MobileLayout from './layouts/MobileLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}

const rootRoute = createRootRoute({
  component: () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileLayout /> : <DesktopLayout />
  },
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: About,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
})

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "education",
  component: Education,
})

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "experience",
  component: Experience,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "projects",
  component: Projects,
})

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "projects/$id",
  component: ProjectDetail,
})

const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "skills",
  component: Skills,
})

const routeTree = rootRoute.addChildren([
  aboutRoute,
  contactRoute,
  educationRoute,
  experienceRoute,
  homeRoute,
  projectsRoute,
  projectDetailRoute,
  skillsRoute
])

export const router = createRouter({
  routeTree
})