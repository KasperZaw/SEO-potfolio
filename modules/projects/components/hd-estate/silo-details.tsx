import type { Silo } from "../../data/hd-estate-strategy";
import styles from "./strategy.module.css";

export function SiloDetails({ silo, index }: { silo: Silo; index: number }) {
  return (
    <section id={silo.id} className={styles.silo} aria-labelledby={`${silo.id}-title`}>
      <header className={styles.siloHeader}>
        <span className={`${styles.number} ${styles[silo.tone]}`}>0{index + 1}</span>
        <div><p className={styles.label}>Strona filarowa: {silo.pillar}</p><h3 id={`${silo.id}-title`}>{silo.name}</h3><p>{silo.goal}</p></div>
      </header>
      <div className={`${styles.keywords} ${styles[silo.tone]}`}>
        <div><p className={styles.label}>Fraza główna</p><strong>{silo.keyword}</strong></div>
        <div><p className={styles.label}>Frazy uzupełniające</p><ul className={styles.chips}>{silo.supporting.map(word => <li key={word}>{word}</li>)}</ul></div>
      </div>
      <details className={styles.clusterDetails}>
        <summary><span>Tematy i frazy klastrów <span className={styles.count}>{silo.clusters.length}</span></span><span className={styles.plus} aria-hidden>+</span></summary>
        <div className={styles.clusterGrid}>
          {silo.clusters.map((cluster, i) => (
            <article key={cluster.name} className={styles.cluster}>
              <p className={styles.label}>{String(i + 1).padStart(2, "0")} / {cluster.name}</p>
              <h4>{cluster.keyword}</h4>
              <p>{cluster.scope}</p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
