import { Link } from "@tanstack/react-router";

export default function HomeCard({ section }) {
  return (
    <Link to={`/${section.id}`} className="home-card">
      <h2>{section.label}</h2>
      <p>{section.description}</p>
    </Link>
  );
}

