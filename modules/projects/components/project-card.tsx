import { ProjectStatus } from "./project-status";
import Link from "next/link";
import type { Project } from "../data/projects";
import { Reveal } from "@/components/motion/reveal";
import { TechStack } from "@/components/ui/tech-stack";
import { ProjectCover } from "./project-cover";
import styles from "./projects.module.css";
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Reveal><article className={styles.card}><Link href={`/projects/${project.slug}`} className={styles.coverLink} aria-label={`Zobacz projekt ${project.title}`}><ProjectCover project={project} /><span className={styles.arrow} aria-hidden>↗</span></Link><div className={styles.info}><div><p className="eyebrow">0{index + 1} / {project.kicker}</p><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><ProjectStatus status={project.status} /></div><div><p className={styles.summary}>{project.summary}</p><TechStack items={project.stack} /></div></div></article></Reveal>;
}
