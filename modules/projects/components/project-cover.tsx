import Image from "next/image";
import type { Project } from "../data/projects";
import styles from "./projects.module.css";
export function ProjectCover({ project, preload = false }: { project: Project; preload?: boolean }) {
  return <div className={`${styles.cover} ${styles[project.color]}`}><Image src={project.image} alt={project.imageAlt} sizes="(max-width: 768px) 90vw, 1120px" preload={preload} className={styles.image} /><span className={styles.coverLabel}>{project.title} <span> / SEO & development</span></span></div>;
}
