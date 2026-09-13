import { storeChapters } from "../../data/christmas-store";
import { StoreReportGallery } from "./store-report-gallery";
import styles from "./store-study.module.css";

export function StoreStudy() {
  return (
    <div>
      {storeChapters.map((chapter, index) => (
        <section key={chapter.heading} className={styles.chapter}>
          <div className={styles.chapterHeading}>
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h2>{chapter.heading}</h2>
          </div>
          <div className={styles.copy}>
            {chapter.blocks.map((block, i) => block.type === "paragraph"
              ? <p key={i}>{block.text}</p>
              : <ul key={i}>{block.items.map(item => <li key={item}>{item}</li>)}</ul>)}
          </div>
        </section>
      ))}
      <StoreReportGallery />
    </div>
  );
}
