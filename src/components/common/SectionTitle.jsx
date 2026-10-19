export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center space-y-2">
      <span className="text-xs uppercase tracking-widest text-indigo-400">
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}
