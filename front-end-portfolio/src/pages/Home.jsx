import { useEffect, useState } from "react";
import HeroSection from '../components/HeroSection';
import HomeCard from "../components/HomeCard";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tables")
      .then(res => res.json())
      .then(data => setSections(data))
      .catch(err => console.error("Erro ao buscar tabelas:", err));
  }, []);

  return (
    <>
      <HeroSection />
      <div className="home-container">
        {sections.map(section => (
          <HomeCard key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}

