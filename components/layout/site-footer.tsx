import styles from "./site-layout.module.css";
export function SiteFooter() {
  return <footer id="contact" className={`container ${styles.footer}`}>
    <p className="eyebrow">Masz projekt na myśli?</p><h2>Zróbmy miejsce<br />na lepsze wyniki.</h2>
    <a className={styles.email} href="mailto:kacper@seo-portfolio.dev">kacper@seo-portfolio.dev <span aria-hidden>↗</span></a>
    <div className={styles.bottom}><span>© {new Date().getFullYear()} Kacper</span><span>SEO. Technologia. Dobre pomysły.</span><a href="#main">Do góry ↑</a></div>
  </footer>;
}
