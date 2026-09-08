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
Obecne okładki to zdjęcia ilustracyjne z Unsplash, a nie zrzuty realizacji:

- Bot SEO: identyfikator obrazu photo-1496181133206-80ce9b88a853
- HD Estate: identyfikator obrazu photo-1600607687920-4e2a09cf159d
- Audyt SEO: identyfikator obrazu photo-1485965120184-e220f721d03e

Źródło plików: `images.unsplash.com`. Przed publikacją uzupełnij własne zdjęcia, zweryfikuj dane case studies oraz adres kontaktowy i domenę w metadanych.

Animacje mają wejście 1,25 s i wyjście około 0,36 s. Respektują `prefers-reduced-motion`, sprzątają instancje przy zmianie strony i pozostawiają treść dostępną bez JavaScriptu.

## Weryfikacja

```sh
npm run lint
npm run build
```
