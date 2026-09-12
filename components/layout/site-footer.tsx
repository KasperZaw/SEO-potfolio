import styles from "./site-layout.module.css";

export function SiteFooter() {
  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Kacper</span>
        <span>SEO. Technologia. Dobre pomysły.</span>
        <nav className={styles.socials} aria-label="Profile społecznościowe">
          <a href="https://github.com/KasperZaw" target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.behance.net/kacperzawadzki1" target="_blank" rel="noopener noreferrer">
            Behance <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <a href="#main">Do góry ↑</a>
      </div>
    </footer>
  );
}
