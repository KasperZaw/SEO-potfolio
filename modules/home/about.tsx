import { Reveal } from "@/components/motion/reveal";
import styles from "./home.module.css";

export function About() {
  return (
    <section id="about" className={`container ${styles.about}`} aria-labelledby="about-title">
      <h2 id="about-title">O mnie</h2>
      <Reveal>
        <div className={styles.aboutCopy}>
          <p>
            Studiuję informatykę zaocznie, a wcześniej pracowałem przy froncie i UI designie. Teraz spinam to wszystko w jedną rzecz: SEO, a konkretnie techniczne SEO i analizę danych, najlepiej przy większych serwisach.
          </p>
          <p>
            Jest w tym coś, co naprawdę mnie kręci: masa danych, ślady, które strona zostawia, i pytanie &quot;dlaczego to nie działa, skoro powinno&quot;. Lubię kryminały, więc może to nieprzypadkowe, że ten zawód czasem przypomina mi pracę detektywa, tylko zamiast odcisków palców mam logi serwera i Search Console.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
