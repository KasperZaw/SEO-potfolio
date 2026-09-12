import type { Project } from "../data/projects";
import { Reveal } from "@/components/motion/reveal";
import styles from "../project-detail.module.css";
export function ProjectResults({ project }: { project: Project }) {
  if (!project.metrics.length && !project.impact) return null;

  return <Reveal><section className={styles.results}>{project.metrics.length > 0 && <div className={styles.metrics}>{project.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}{project.impact && <div className={styles.impact}><h2>Efekt projektu</h2><p>{project.impact}</p></div>}</section></Reveal>;
}
