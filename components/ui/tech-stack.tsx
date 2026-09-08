import styles from "./tech-stack.module.css";
export function TechStack({ items }: { items: string[] }) {
  return <ul className={styles.list} aria-label="Narzędzia i technologie">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
