import { linkingSteps } from "../../data/hd-estate-strategy";
import styles from "./strategy.module.css";

export function LinkingPlan() {
  return (
    <section className={styles.block} aria-labelledby="linking-title">
      <p className={styles.label}>Hierarchia i linkowanie wewnętrzne</p>
      <h3 id="linking-title">Każda treść ma swoje miejsce.</h3>
      <div className={styles.linkingLayout}>
        <div className={styles.loop}>
          <span className={styles.label}>Model hub-and-spoke</span>
          <strong>Strona filarowa</strong><span aria-hidden>↓ ↑</span>
          <strong>Powiązane treści</strong><span aria-hidden>↓</span>
          <strong>Oferta · konsultacja · kontakt</strong>
          <p>Artykuł wraca linkiem do filaru i prowadzi do właściwej strony konwersyjnej.</p>
        </div>
        <ol className={styles.steps}>{linkingSteps.map(step => <li key={step}>{step}</li>)}</ol>
      </div>
      <div className={styles.note}><strong>Linki wynikają z relacji, nie z automatu.</strong><p>Nie łączę wszystkich artykułów ze wszystkimi. Filary rozwijają się wraz z publikacją treści — bez pustych linków, nieukończonych klastrów i indeksowanych podstron „wkrótce”. Każda ścieżka prowadzi w stronę oferty, konsultacji, wyceny lub kontaktu.</p></div>
    </section>
  );
}
