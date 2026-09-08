import Link from "next/link";
import styles from "./site-layout.module.css";
export function SiteHeader() {
  return <header className={styles.header}><div className={`container ${styles.nav}`}>
    <Link href="/" className={styles.brand} aria-label="Kacper — strona główna">kacper<span>®</span></Link>
    <nav aria-label="Nawigacja główna"><Link href="/#projects">Projekty</Link><Link href="/#about">O mnie</Link><Link href="/#contact" className={styles.contact}>Porozmawiajmy <span aria-hidden>↗</span></Link></nav>
  </div></header>;
}
