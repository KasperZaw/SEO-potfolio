export function SectionHeading({ label, title }: { label: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2></div>;
}
