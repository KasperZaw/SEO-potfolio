import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import styles from "./home.module.css";
const steps = [
  ["Najpierw pytania", "Poznaję stronę, odbiorców i cel. Sprawdzam dane oraz to, co dziś nie działa."],
  ["Potem dobry plan", "Ustalam priorytety. Wybieram zmiany, które warto wdrożyć w pierwszej kolejności."],
  ["Wdrożenie i pomiar", "Wprowadzam rozwiązania, sprawdzam efekty i poprawiam to, co wymaga dopracowania."],
];
export function Process() {
  return <section id="process" className="container section"><SectionHeading label="Jak pracuję" title="Prosty proces. Przemyślane decyzje." /><div className={styles.steps}>{steps.map(([title, description], i) => <Reveal key={title}><article><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></section>;
}
