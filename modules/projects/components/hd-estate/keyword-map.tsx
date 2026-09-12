import { commercialKeywords } from "../../data/hd-estate-strategy";
import styles from "./strategy.module.css";

export function KeywordMap() {
  return (
    <section className={styles.block} aria-labelledby="commercial-title">
      <p className={styles.label}>Mapa fraz komercyjnych</p>
      <h3 id="commercial-title">Jedna intencja. Jeden adres URL.</h3>
      <p className={styles.intro}>Warianty tej samej intencji przypisałem do jednej podstrony. To ogranicza ryzyko kanibalizacji i pozwala rozwijać jedną mocną stronę zamiast niemal identycznych landingów.</p>
      <div className={styles.tableWrap} role="region" aria-label="Mapa fraz — tabela przewijana poziomo na małych ekranach" tabIndex={0}>
        <table className={styles.table}>
          <caption>Przypisanie fraz do planowanych podstron HD Estate</caption>
          <thead><tr><th scope="col">Podstrona</th><th scope="col">Fraza główna</th><th scope="col">Frazy uzupełniające</th></tr></thead>
          <tbody>{commercialKeywords.map(row => <tr key={row.page}><th scope="row">{row.page}</th><td>{row.keyword}</td><td>{row.supporting}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
