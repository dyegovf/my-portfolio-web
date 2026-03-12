import { Link } from "@tanstack/react-router";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem"}}>
      <div><strong>Dyego VF</strong></div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <a href="https://github.com/dyegovf" target="_blank" rel="noopener noreferrer">github.com/dyegovf</a>
      </div>
    </nav>
  );
}
