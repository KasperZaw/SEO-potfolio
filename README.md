# Portfolio Kacpra

Next.js App Router, React, TypeScript, CSS Modules i GSAP.

```sh
npm install
npm run dev
```

## Struktura

- `app/` — routing, metadane i główny layout. Pliki `page.tsx` składają widoki.
- `components/layout/` — wspólna nawigacja i stopka.
- `components/ui/` — małe współdzielone elementy.
- `components/motion/` — animacje GSAP / ScrollTrigger.
- `modules/home/` — sekcje strony głównej.
- `modules/projects/` — dane, lista projektów i widok case study.
- `public/images/` — lokalne okładki.

Style sekcji są w sąsiadujących plikach `.module.css`. Globalny CSS zawiera podstawy typografii, kolory i wspólne kontenery. Nie dodajemy katalogu `pages/`, ponieważ routing obsługuje `app/`.

## Edycja projektów

Treści, technologie, kolor i ścieżkę zdjęcia zmieniaj w `modules/projects/data/projects.ts`.
Okładki projektów są importowane z `app/img/`. Aby podmienić grafikę, zastąp odpowiedni plik PNG lub zmień import w danych projektu.

Animacje mają wejście 1,25 s i wyjście około 0,36 s. Respektują `prefers-reduced-motion`, sprzątają instancje przy zmianie strony i pozostawiają treść dostępną bez JavaScriptu.

## Weryfikacja

```sh
npm run lint
npm run build
```

## Publikacja na Vercel

Zaimportuj repozytorium GitHub i wybierz preset Next.js. Adresy canonical, robots.txt i sitemap.xml korzystają automatycznie z `VERCEL_PROJECT_PRODUCTION_URL`. Po podpięciu własnej domeny można ustawić `SITE_URL` na pełny adres HTTPS i wykonać ponowne wdrożenie.
