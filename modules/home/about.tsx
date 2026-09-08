import { Reveal } from "@/components/motion/reveal";
import styles from "./home.module.css";
export function About() {
  return <section id="about" className={`container ${styles.about}`}><p className="eyebrow">Trochę o mnie</p><Reveal><h2>Lubię wiedzieć, dlaczego.<br /><span>I umieć to poprawić.</span></h2><p>Sprawdzam, co utrudnia stronie dotarcie do ludzi. Układam treści, poprawiam techniczne podstawy i automatyzuję powtarzalną pracę. Od diagnozy po działające rozwiązanie.</p><div className={styles.skills}><span>Techniczne SEO</span><span>Strategia treści</span><span>Automatyzacja</span></div></Reveal></section>;
}
