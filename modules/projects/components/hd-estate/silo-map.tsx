import { silos } from "../../data/hd-estate-strategy";
import styles from "./strategy.module.css";

export function SiloMap() {
  return (
    <div className={styles.map} aria-label="Hierarchia strony: strona główna, trzy silosy i ich klastry">
      <div className={styles.root}>
        <span className={styles.label}>Strona główna · HD Estate</span>
        <strong>agent nieruchomości Siedlce</strong>
      </div>
      <div className={styles.branches}>
        {silos.map((silo, index) => (
          <a key={silo.id} href={`#${silo.id}`} className={`${styles.branch} ${styles[silo.tone]}`}>
            <span className={styles.label}>Silos 0{index + 1}</span>
            <h3>{silo.name}</h3>
            <p>{silo.pillar}</p>
            <div className={styles.branchFooter}><span>{silo.clusters.length} klastrów</span><span aria-hidden>↓</span></div>
          </a>
        ))}
      </div>
      <p className={styles.mapCaption}>Strona główna → filary → klastry tematyczne → oferta lub kontakt</p>
    </div>
  );
}
