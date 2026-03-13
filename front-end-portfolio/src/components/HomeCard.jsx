export default function HomeCard({ section }) {
  return (
    <div className="home-card">
      <h2>{section.label}</h2>
      <p>Clique para ver mais detalhes</p>
    </div>
  );
}
