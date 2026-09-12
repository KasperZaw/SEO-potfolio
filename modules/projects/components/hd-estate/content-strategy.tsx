import { silos, rentalTopics } from "../../data/hd-estate-strategy";
import { SiloMap } from "./silo-map";
import { SiloDetails } from "./silo-details";
import { KeywordMap } from "./keyword-map";
import { LinkingPlan } from "./linking-plan";
import styles from "./strategy.module.css";

export function ContentStrategy() {
  const clusterCount = silos.reduce((sum, silo) => sum + silo.clusters.length, 0);

  return (
    <section className={styles.strategy} aria-labelledby="strategy-title">
      <header className={styles.heading}>
        <p className={styles.label}>HD Estate / Architektura treści</p>
        <h2 id="strategy-title">Trzy intencje.<br />Jedna przemyślana struktura.</h2>
        <p>Strategię treści oparłem na potrzebach sprzedających, kupujących i lokalnym rynku w Siedlcach. Każdy silos ma własny filar, powiązane klastry i przypisane frazy. Każda treść odpowiada na konkretną intencję i wspiera cel biznesowy.</p>
        <ul className={styles.stats}><li><strong>{silos.length}</strong> główne silosy</li><li><strong>{clusterCount}</strong> klastry tematyczne</li><li><strong>1</strong> obszar dodatkowy: wynajem</li></ul>
        <p className={styles.planLabel}>Opracowana strategia · wdrożenie w trakcie</p>
      </header>
      <SiloMap />
      <div>{silos.map((silo, index) => <SiloDetails key={silo.id} silo={silo} index={index} />)}</div>
      <aside className={styles.rental} aria-labelledby="rental-title">
        <p className={styles.label}>Obszar dodatkowy / rozwój warunkowy</p>
        <h3 id="rental-title">Wynajem — przestrzeń na później.</h3>
        <p>Priorytetem biznesowym pozostaje sprzedaż. Na początku powstaje kategoria <strong>Mieszkania do wynajęcia w Siedlcach</strong>. Osobny klaster poradnikowy może się rozwinąć, gdy wynajem stanie się regularną częścią oferty.</p>
        <details className={styles.rentalDetails}><summary>Potencjalne tematy wynajmu ({rentalTopics.length})</summary><ul className={styles.chips}>{rentalTopics.map(topic => <li key={topic}>{topic}</li>)}</ul></details>
      </aside>
      <KeywordMap />
      <LinkingPlan />
    </section>
  );
}
