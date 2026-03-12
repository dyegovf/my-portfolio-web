import { useEffect, useState } from "react";

export default function Home() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tables")
      .then(res => res.json())
      .then(data => setSections(data))
      .catch(err => console.error("Erro ao buscar tabelas:", err));
  }, []);

  return (
  
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", padding: "1rem" }}>      
      {sections.map(table => (  
        <section key={table}> {table} </section>
      ))}
    </div>     

   
  );
}
