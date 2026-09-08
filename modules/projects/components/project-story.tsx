import type { Project } from "../data/projects";
import { Reveal } from "@/components/motion/reveal";
import styles from "../project-detail.module.css";
export function ProjectStory({ sections }: { sections: Project["sections"] }) {
  return <div>{sections.map((section, i) => <Reveal key={section.heading}><section className={styles.story}><div><p className="eyebrow">0{i + 1}</p><h2>{section.heading}</h2></div><div>{section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section></Reveal>)}</div>;
}
