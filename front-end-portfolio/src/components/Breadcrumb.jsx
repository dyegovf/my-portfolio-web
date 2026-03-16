import { Link, useRouterState } from "@tanstack/react-router";

export default function Breadcrumb() {
  const router = useRouterState();
  const currentPath = router.location.pathname.replace("/", "");
  
  const fixedRoutes = ["", "about", "contact"];
  if (fixedRoutes.includes(currentPath)) {
    return null;
  }

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link> / <span>{currentPath}</span>
    </div>
  );
}
