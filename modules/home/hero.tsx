import { Reveal } from "@/components/motion/reveal";
import styles from "./home.module.css";
export function Hero() {
  return <section className={`container ${styles.hero}`}><Reveal>
    <p className={styles.intro}><span /> Cześć, jestem Kacper. Zajmuję się SEO.</p>
    <h1>Dobre strony.<br />Jeszcze lepsza<br /><span>widoczność.</span></h1>
    <div className={styles.heroBottom}><p>Łączę SEO, kod i automatyzację.<br />Pomagam ludziom znaleźć to, co tworzysz.</p><a href="#projects">Poznaj moje projekty <span aria-hidden>↓</span></a></div>
  </Reveal><div className={styles.disc} aria-hidden="true"><span>SEO</span><small>od pomysłu<br />do wdrożenia</small></div></section>;
}
