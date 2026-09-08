import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "../data/projects";
import { ProjectCard } from "./project-card";
import styles from "./projects.module.css";
export function ProjectList() {
  return <section id="projects" className={`container ${styles.projects}`}><div className={styles.heading}><SectionHeading label="Wybrane realizacje" title="Mniej teorii. Więcej konkretów." /><span>01 — 03</span></div><div className={styles.list}>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section>;
}
