import { auditBlocks } from "../../data/technical-audit";
import styles from "./audit-analysis.module.css";

export function AuditAnalysis() {
  return (
    <article className={styles.analysis} aria-label="Analiza audytu technicznego">
      {auditBlocks.map((block, index) => {
        if (block.type === "heading") {
          return <h2 key={index}>{block.text}</h2>;
        }

        if (block.type === "paragraph") {
          return <p key={index}>{block.text}</p>;
        }

        if (block.type === "table") {
          return (
            <div key={index} className={styles.tableWrap} role="region" aria-label="Podsumowanie: najważniejsze ustalenia" tabIndex={0}>
              <table>
                <thead><tr>{block.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
                <tbody>{block.rows.map(([priority, problem, impact]) => (
                  <tr key={problem}>
                    <td><span className={priority.includes("Krytyczny") ? styles.critical : styles.review}>{priority}</span></td>
                    <th scope="row">{problem}</th>
                    <td>{impact}</td>
                  </tr>
                ))}</tbody>
              </table>
            </div>
          );
        }
      })}
    </article>
  );
}
