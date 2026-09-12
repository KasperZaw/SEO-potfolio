import styles from "./site-layout.module.css";
export function SiteFooter() {
  return <footer className={`container ${styles.footer}`}>
    <div className={styles.bottom}><span>© {new Date().getFullYear()} Kacper</span><span>SEO. Technologia. Dobre pomysły.</span><a href="#main">Do góry ↑</a></div>
  </footer>;
}
