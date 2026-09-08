import Link from "next/link";
import type { Project } from "./data/projects";
import { Reveal } from "@/components/motion/reveal";
import { TechStack } from "@/components/ui/tech-stack";
import { ProjectCover } from "./components/project-cover";
import { ProjectResults } from "./components/project-results";
import { ProjectStory } from "./components/project-story";
import styles from "./project-detail.module.css";

export function ProjectDetail({ project }: { project: Project }) {
  return <div className={`container ${styles.detail}`}>
    <Link href="/#projects" className={styles.back}>← Wszystkie projekty</Link>
    <header className={styles.header}><p className="eyebrow">{project.kicker}</p><h1>{project.title}</h1><p className={styles.summary}>{project.summary}</p><TechStack items={project.stack} /></header>
    <ProjectCover project={project} preload />
    <ProjectResults project={project} />
    <ProjectStory sections={project.sections} />
    <Reveal><section className={styles.deliverables}><h2>Co powstało</h2><ul>{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></section></Reveal>
    <Reveal><div className={styles.comparison}>{project.beforeAfter.map(item => <section key={item.label}><p className="eyebrow">{item.label}</p><p>{item.text}</p></section>)}</div></Reveal>
    <Link className={styles.back} href="/#projects">← Wróć do pozostałych projektów</Link>
  </div>;
}
