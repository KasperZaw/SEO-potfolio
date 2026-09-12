import type { Project } from "../data/projects";
import styles from "./project-status.module.css";

export function ProjectStatus({ status }: { status: Project["status"] }) {
  if (status !== "in-progress") return null;

  return <p className={styles.status}>Projekt w trakcie realizacji</p>;
}
