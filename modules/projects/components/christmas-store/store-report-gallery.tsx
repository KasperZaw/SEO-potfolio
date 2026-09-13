import Image from "next/image";
import performance from "@/app/img/Zrzut ekranu 2026-09-13 o 17.27.50.png";
import webVitals from "@/app/img/Zrzut ekranu 2026-09-13 o 17.30.20.png";
import validItems from "@/app/img/Zrzut ekranu 2026-09-13 o 17.31.12.png";
import styles from "./store-study.module.css";

const reports = [
  {
    image: performance,
    title: "Widoczność organiczna",
    caption: "14,5 tys. kliknięć, 3,81 mln wyświetleń, CTR 0,4% i średnia pozycja 10 w widocznym raporcie Google Search Console.",
    alt: "Google Search Console: wykres kliknięć i wyświetleń oraz podsumowanie skuteczności Sklepu Świątecznego",
  },
  {
    image: webVitals,
    title: "Core Web Vitals",
    caption: "143 adresy URL dobrej jakości, 0 wymagających poprawy i 0 słabej jakości. Zrzut nie pokazuje rodzaju urządzenia.",
    alt: "Raport Core Web Vitals: 143 dobre adresy URL, bez adresów wymagających poprawy i słabej jakości",
  },
  {
    image: validItems,
    title: "Prawidłowe elementy",
    caption: "728 prawidłowych elementów i 0 nieprawidłowych. Nazwa raportu nie jest widoczna na zrzucie.",
    alt: "Raport Google Search Console: 728 prawidłowych elementów i brak błędów krytycznych",
  },
];

export function StoreReportGallery() {
  return (
    <section className={styles.reports} aria-labelledby="store-reports-title">
      <p className="eyebrow">Google Search Console</p>
      <h2 id="store-reports-title">Dane z projektu</h2>
      <p className={styles.reportIntro}>Zrzuty dokumentują stan raportów. Pokazują wyniki całego sklepu w analizowanym okresie.</p>
      <div className={styles.reportGrid}>
        {reports.map(report => (
          <figure key={report.title} className={styles.report}>
            <a href={report.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Otwórz pełny zrzut: ${report.title}`}>
              <Image src={report.image} alt={report.alt} sizes="(max-width: 750px) 90vw, 1120px" />
            </a>
            <figcaption>
              <h3>{report.title}</h3>
              <p>{report.caption}</p>
              <a href={report.image.src} target="_blank" rel="noopener noreferrer">Pełny zrzut <span aria-hidden>↗</span></a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
