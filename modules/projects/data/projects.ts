import storeImage from "@/app/img/Zrzut ekranu 2026-09-13 o 17.54.40.png";
import type { StaticImageData } from "next/image";
import botSeoImage from "@/app/img/desc-bot-project.png";
import hdEstateImage from "@/app/img/hd-estate-project.png";
import technicalSeoImage from "@/app/img/technical-seo-project.png";

export type Project = {
  slug: string;
  image: StaticImageData;
  imageAlt: string;
  color: "lavender" | "peach" | "mint";
  title: string;
  kicker: string;
  category: string;
  summary: string;
  status?: "in-progress";
  impact?: string;
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  sections: Array<{
    heading: string;
    body: string[];
    list?: { ordered: boolean; items: string[] };
  }>;
  deliverables: string[];
  beforeAfter: Array<{ label: string; text: string }>;
};

export const projects: Project[] = [
  {
    slug: "sklep-swiateczny",
    image: storeImage,
    imageAlt: "Strona główna Sklepu Świątecznego z kolekcją dekoracji i menu kategorii",
    color: "peach",
    title: "Sklep Świąteczny",
    kicker: "UX/UI · E-commerce · Technical SEO",
    category: "WordPress / WooCommerce · automatyzacja · analiza danych",
    summary: "Od projektu w Figma do działającego sklepu. UX/UI, rozbudowany katalog, import XML, Technical SEO i analiza danych z Google Search Console.",
    stack: ["Figma", "WordPress", "WooCommerce", "WoodMart", "XML", "CRON", "Google Search Console"],
    metrics: [
      { label: "kliknięcia organiczne w analizowanym okresie", value: "14,5 tys." },
      { label: "wyświetlenia w Google", value: "3,81 mln" },
      { label: "średnia pozycja", value: "~10" },
    ],
    sections: [],
    deliverables: [],
    beforeAfter: [],
  },

  {
    slug: "bot-seo",
    image: botSeoImage,
    imageAlt: "Panel AI Description Bot z listą produktów i podglądem wygenerowanego opisu",
    color: "lavender",
    title: "Bot SEO",
    kicker: "AI-powered SEO content ops",
    category: "Technical SEO · Automation · AI workflow",
    summary: "Automatyzacja opisów produktów z kontrolą jakości i publikacją w WordPressie.",
    impact: "Zamiast ręcznie aktualizować setki opisów, zbudowałem kolejkę zadań, walidację treści i integrację z WordPress API, co dało przejrzysty, skalowalny proces SEO.",
    stack: [
      "Node.js",
      "SQLite",
      "React",
      "WordPress REST API",
      "OpenAI API"
    ],
    metrics: [
      {
        label: "opisy",
        value: "~3000"
      },
      {
        label: "jakość treści",
        value: "human-in-the-loop"
      }
    ],
    sections: [
      {
        heading: "Problem biznesowy",
        body: [
          "Sklep, który współtworzyłem z przyjaciółmi, miał bardzo rozbudowany katalog produktów, a opisy SEO były bardzo słabo rozwinięte. Z powodu braku czasu spowodowanego pracą wymyśliłem, jak zautomatyzować proces tworzenia opisów. Projekt początkowo obsługiwany był wyłącznie przez terminal w IDE. Aktualnie aplikacja posiada spójny frontend i backend."
        ]
      },
      {
        heading: "Dlaczego kolejka statusów zamiast batch",
        body: [
          "Zamiast od razu uruchamiać masowy batch, potrzebowaliśmy procesu, który daje pełną kontrolę nad każdym zadaniem. Kolejka statusów pending → processing → done/error dała przejrzystość, możliwość audytu i możliwość korekty konkretnego elementu bez wpływu na cały katalog. Dzięki temu można też łatwo wyświetlać statusy zadań po stronie frontendu."
        ]
      },
      {
        heading: "Architektura pipeline",
        body: [
          "System miał trzy warstwy: pobieranie i podmianę danych z WordPress API, kolejkę zadań w SQLite oraz warstwę AI do generowania i aktualizacji opisów. Każde zadanie przechodziło przez kolejne etapy: pobranie produktu, przygotowanie kontekstu SEO, wygenerowanie treści, walidację jakości i finalne wdrożenie przez WordPress REST API.",
          "Na poziomie procesu wyglądało to następująco: WP API → kolejka zadań → OpenAI API → walidacja → WP API (publikacja)."
        ]
      },
      {
        heading: "Wyzwania techniczne",
        body: [
          "Największym wyzwaniem, wbrew pozorom, nie okazał się koszt zapytań do API, który pozytywnie mnie zaskoczył. Przy korzystaniu z GPT-4o koszt obsługi 2000 produktów wyniósł niecałe 5 dolarów. Największym realnym problemem okazał się rozrost aplikacji, który zmusił mnie do stworzenia na razie podstawowej wersji.",
          "Podstawowa wersja aplikacji działa — produkty są pobierane, kolejkowane, przetwarzane i wdrażane. Jednak podczas budowy zauważyłem dwie rzeczy, które muszą zostać dodane: walidację sprawdzającą, czy opis nie powtarza się i nie pokrywa niemal w całości z opisem innego produktu, oraz możliwość ręcznej poprawki poszczególnych opisów przez użytkowników."
        ]
      }
    ],
    deliverables: [
      "Kolejka zadań ze statusami pending / processing / done / error",
      "Dashboard React do podglądu i ręcznej akceptacji zmian",
      "Integracja z WordPress REST API",
      "Walidacja treści i logika retry",
      "Monitoring błędów i audyt zdarzeń"
    ],
    beforeAfter: [
      {
        label: "Przed",
        text: "Ręczna aktualizacja w WordPressie i brak spójnego procesu; opisy zależały od osoby, która akurat miała czas i wiedzę."
      },
      {
        label: "Po",
        text: "Scentralizowany pipeline z kolejką, walidacją i wdrożeniem, który pozwala rozwijać SEO bez chaosu operacyjnego."
      }
    ]
  },
  {
    slug: "hd-estate",
    image: hdEstateImage,
    imageAlt: "HD Estate — projekt strony nieruchomości na tablecie i telefonie",
    color: "peach",
    title: "HD Estate",
    status: "in-progress",
    kicker: "Budowa strony od zera dla firmy z branży nieruchomości",
    category: "Web development · SEO strategy · information architecture",
    summary: "Kompleksowy projekt dla firmy znajomej — od hostingu i domeny, przez własnoręcznie tworzony motyw WordPress, po strategię SEO i architekturę treści. Aktualnie w fazie wdrażania.",
    stack: [
      "WordPress (custom motyw pisany ręcznie)",
      "ACF / dedykowana wtyczka (w budowie)",
      "Figma",
      "Keyword research",
      "Silo strategy"
    ],
    metrics: [],
    sections: [
      {
        heading: "Problem",
        body: [
          "Znajoma prowadząca firmę z branży nieruchomości potrzebowała strony internetowej od podstaw — bez gotowego brandingu, treści, motywu ani strategii widoczności w Google."
        ]
      },
      {
        heading: "Co zrobiłem do tej pory",
        body: [
          "Wykupiłem domenę i hosting, i buduję od zera własny motyw WordPress (bez gotowych szablonów) dopasowany pod strukturę serwisu. Równolegle przygotowałem pełną strategię contentową: zmapowałem intencje użytkowników w trzech głównych silosach (sprzedający, kupujący, rynek lokalny) i rozpisałem klastry tematyczne z przypisanymi frazami głównymi i uzupełniającymi w modelu hub-and-spoke."
        ]
      },
      {
        heading: "Co jest w trakcie budowy",
        body: [],
        list: {
          ordered: false,
          items: [
            "Strony ofert (mieszkania, domy, działki) będą oparte o ACF lub dedykowaną wtyczkę, którą sam tworzę.",
            "Obecnie tworzę też treści na podstawowe podstrony serwisu (strony filarowe i usługowe) — to nie treści blogowe, tylko właściwe teksty strukturalne strony, które będą fundamentem pod dalszą rozbudowę klastrów."
          ]
        }
      },
      {
        heading: "Plan wdrożenia",
        body: [],
        list: {
          ordered: true,
          items: [
            "Dokończenie custom motywu i wtyczki pod oferty",
            "Napisanie treści na strony filarowe i podstrony usługowe",
            "Wdrożenie struktury silosów i linkowania wewnętrznego",
            "Publikacja treści blogowych zgodnie z content planem"
          ]
        }
      }
    ],
    deliverables: [
      "Domena, hosting, custom motyw WP pisany od zera",
      "Strategia silosów i klastrów tematycznych (3 główne silosy, 26 klastrów)",
      "Mapa fraz komercyjnych i model hub-and-spoke",
      "Treści na strony filarowe i usługowe (w trakcie pisania)",
      "Custom wtyczka / ACF pod oferty (w budowie)"
    ],
    beforeAfter: []
  },
  {
    slug: "technical-seo-audit",
    image: technicalSeoImage,
    imageAlt: "Ilustracja Technical SEO z wykresem, lupą i symbolem kodu",
    color: "mint",
    title: "Audyt techniczny SEO",
    kicker: "Crawlability, indexability & site health",
    category: "Technical SEO · diagnostics · implementation roadmap",
    summary: "Audyt przeprowadziłem na próbce serwisu przy użyciu Screaming Frog w wersji darmowej (crawl ograniczony do 500 URL-i), Google Lighthouse do oceny wydajności oraz ręcznej weryfikacji w przeglądarce, kodzie źródłowym i Rich Results Test.",
    stack: ["Screaming Frog (wersja darmowa)", "Google Lighthouse", "Rich Results Test", "Przeglądarka i kod źródłowy"],
    metrics: [],
    sections: [],
    deliverables: [],
    beforeAfter: [],
  },
];
