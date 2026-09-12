import { Reveal } from "@/components/motion/reveal";
import styles from "./home.module.css";
export function Hero() {
  return <section className={`container ${styles.hero}`}><Reveal>
    <p className={styles.intro}><span /> Cześć, jestem Kacper. Zajmuję się SEO.</p>
    <h1>Kacper<br />Zawadzki<br /><span>Technical SEO</span></h1>
    <div className={styles.heroBottom}><p>Łączę SEO, kod i analizę danych.<br />Szukam tego, co blokuje widoczność.</p><a href="#projects">Poznaj moje projekty <span aria-hidden>↓</span></a></div>
  </Reveal><div className={styles.disc} aria-hidden="true"><span>SEO</span><small>od pomysłu<br />do wdrożenia</small></div></section>;
}
