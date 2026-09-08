export type Project = {
  slug: string;
  image: string;
  imageAlt: string;
  color: "lavender" | "peach" | "mint";
  title: string;
  kicker: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  deliverables: string[];
  beforeAfter: Array<{ label: string; text: string }>;
};

export const projects: Project[] = [
  {
    slug: "bot-seo",
    image: "/images/bot-seo.jpg",
    imageAlt: "Laptop na jasnym biurku — ilustracja automatyzacji pracy",
    color: "lavender",
    title: "Bot SEO",
    kicker: "AI-powered SEO content ops",
    category: "Technical SEO · Automation · AI workflow",
    summary:
      "Od 18 do 2 godzin pracy miesięcznie. Automatyzacja opisów produktów z kontrolą jakości i publikacją w WordPressie.",
    impact:
      "Zamiast ręcznie aktualizować setki opisów, zbudowaliśmy kolejkę zadań, walidację treści i integrację z WordPress API, co dało przejrzysty, skalowalny proces SEO.",
    stack: ["Node.js", "SQLite", "React", "WordPress REST API", "OpenAI API"],
    metrics: [
      { label: "czas aktualizacji", value: "18h → 2h / miesiąc" },
      { label: "opisy / miesiąc", value: "+1.2k" },
      { label: "jakość treści", value: "human-in-the-loop" },
    ],
    sections: [
      {
        heading: "Problem biznesowy",
        body: [
          "Sklep miał bardzo rozbudowany katalog produktów, a opisy SEO były aktualizowane ręcznie przez zespół marketingu i merchandisera. Proces był wolny, niejednolity i nie nadążał za skalą katalogu. Przy każdym nowym produkcie pojawiał się ten sam problem: opis był poprawiany ad hoc, bez standardu, bez nadzoru jakości i bez śladu audytu.",
          "To było źródło nie tylko spadku efektywności, ale też ryzyka: różne wersje opisów, brak spójności, trudność z testowaniem zmian i niespójny poziom treści dla podobnych produktów.",
        ],
      },
      {
        heading: "Dlaczego kolejka statusów zamiast batch",
        body: [
          "Zamiast od razu uruchamiać masowy batch, potrzebowaliśmy procesu, który daje pełną kontrolę nad każdym zadaniem. Kolejka statusów pending → processing → done/error dała nam przejrzystość, audytowalność i możliwość korekty konkretnego elementu bez wpływu na cały katalog.",
          "To miało również znaczenie operacyjne: marketing widział, co jest w kolejce i co zostało zaakceptowane, a inżynier miał pełny kontekst błędów, limitów API i momentu, w którym wykonanie należy wznowić albo zatrzymać.",
        ],
      },
      {
        heading: "Architektura pipeline",
        body: [
          "System miał trzy warstwy: pobieranie danych z WordPress API, kolejkę zadań w SQLite i warstwę AI do generowania i aktualizacji opisów. Każde zadanie przechodziło przez kolejne etapy: pobranie produktu, przygotowanie kontekstu SEO, wygenerowanie treści, walidację jakości i finalne wdrożenie przez WordPress REST API.",
          "Na poziomie procesu wyglądało to jako: WP API → kolejka zadań → OpenAI API → walidacja → publikacja. To ważne, bo pozwalało nie tylko 'wysłać treść do GPT', ale też kontrolować cały tok produkcji i łatwo debugować każdą fazę.",
        ],
      },
      {
        heading: "Wyzwania techniczne",
        body: [
          "Największym wyzwaniem były rate limity API, błędy po stronie OpenAI i WordPress oraz konieczność retry bez duplikacji. Dodatkowo trzeba było zadbać o to, by nie nadpisywać dobrych opisów i nie tworzyć niekontrolowanych zmian przy tych samych produktach.",
          "Dlatego wdrożyliśmy warstwę walidacji: sprawdzanie długości opisu, zgodności z parametrami produktu, spójności z katalogiem i ręczną akceptację na dashboardzie. To dało nam human-in-the-loop bez blokowania całego procesu.",
        ],
      },
      {
        heading: "Rezultat",
        body: [
          "System zmniejszył czas realizacji z 18 godzin do ok. 2 godzin w miesiącu przy tej samej objętości treści, a jednocześnie poprawił spójność i przewidywalność procesu. Zespół miał mniej ręcznej pracy, a opisy były utrzymywane w lepszej jakości na większej skali.",
          "Największą wartością było jednak to, że proces stał się skalowalny: można było dodawać nowe produkty, nowe typy opisów i kolejne walidacje bez rozbijania całej logiki.",
        ],
      },
    ],
    deliverables: [
      "Kolejka zadań z statusami pending / processing / done / error",
      "Dashboard React do podglądu i ręcznej akceptacji zmian",
      "Integracja z WordPress REST API",
      "Walidacja treści i logika retry",
      "Monitoring błędów i audyt zdarzeń",
    ],
    beforeAfter: [
      {
        label: "Przed",
        text: "Ręczna aktualizacja w WordPressie i brak spójnego procesu; opisy zależały od osoby, która miała akurat czas i wiedzę.",
      },
      {
        label: "Po",
        text: "Scentralizowany pipeline z kolejką, walidacją i akceptacją, który pozwala rozwijać SEO bez chaosu operacyjnego.",
      },
    ],
  },
  {
    slug: "hd-estate",
    image: "/images/hd-estate.jpg",
    imageAlt: "Jasne wnętrze z naturalnymi materiałami — ilustracja branży nieruchomości",
    color: "peach",
    title: "HD Estate",
    kicker: "Keyword research & information architecture",
    category: "SEO strategy · information architecture · content planning",
    summary:
      "Od wyszukiwania do właściwej oferty. Strategia treści i przejrzysta architektura strony dla marki z branży nieruchomości.",
    impact:
      "Projekt połączył research słów kluczowych, mapowanie struktur głównych podstron i przygotowanie logicznej architektury informacji do wdrożenia w Figma.",
    stack: ["Keyword research", "Content planning", "Figma", "Silo strategy", "UX + SEO"],
    metrics: [
      { label: "nisza", value: "nieruchomości" },
      { label: "model", value: "hub-and-spoke" },
      { label: "cel", value: "architektura SEO" },
    ],
    sections: [
      {
        heading: "Kontekst klienta",
        body: [
          "HD Estate to projekt dla firmy działającej w branży nieruchomości, gdzie kluczowe było zbudowanie jasnej, mocnej i dającej się rozwijać struktury witryny. Rynek był mocno konkurencyjny, a szum treściowy utrudniał rozpoznawalność w wynikach wyszukiwania.",
          "W takich przypadkach najczęściej problemem nie jest jedna fraza, tylko brak spójnej architektury: zbyt wiele podobnych podstron, brak logicznej hierarchii, słaba nawigacja i niewystarczająco czytelne sciezki użytkownika.",
        ],
      },
      {
        heading: "Research i silosy tematyczne",
        body: [
          "Najpierw zidentyfikowaliśmy główne grupy intencji w niszy: sprzedaż mieszkań, domów, inwestycje, lokalizacje, proces transakcji, doradztwo prawne i obszary miejskie. Następnie każdą grupę zmapowaliśmy na zrozumiałą strukturę treści — od punktów wejścia po strony głębszych tematów.",
          "To dało nam efektywny model hub-and-spoke: strona główna i główne tematy prowadziły do pogłębionych podstron, które wspierały linkowanie wewnętrzne i zacieśniały relacje semantyczne między treściami.",
        ],
      },
      {
        heading: "Mapowanie na architekturę strony",
        body: [
          "W drugim kroku stworzyliśmy strukturę nawigacji i warstwę informacji, która odpowiadała na zamiary użytkownika na każdym etapie: od ogólnej decyzji o inwestycji po szczegółowe zapytania lokalizacyjne i typy nieruchomości.",
          "Dzięki temu nie tylko zwiększyliśmy potencjał SEO, ale też zbudowaliśmy lepszą ścieżkę konwersji: użytkownik miał prostą drogę od ogólnego zainteresowania do konkretnej oferty i działań biznesowych.",
        ],
      },
      {
        heading: "Artefakty myślenia",
        body: [
          "Wartość tego projektu była nie tylko w gotowej witrynie, ale w zrozumieniu, jak strategia treści i UX wzajemnie wspierają SEO. Zbudowaliśmy mapy klastrów, plan treści i makiety w Figma, które pokazywały, w jaki sposób każda podstrona wspiera główną intencję biznesową i jak ma wyglądać wewnętrzne linkowanie.",
          "To był przykład strategicznego podejścia do SEO: nie 'dodawania kolejnych artykułów', ale tworzenia spójnego systemu tematów, który ma sens zarówno dla użytkownika, jak i dla wyszukiwarki.",
        ],
      },
    ],
    deliverables: [
      "Mapa klastrów i silosów tematycznych",
      "Plan struktury podstron i nawigacji",
      "Content plan pod główne intencje użytkownika",
      "Makiety w Figma z hierarchią informacji",
      "Strategia linkowania wewnętrznego",
    ],
    beforeAfter: [
      {
        label: "Przed",
        text: "Nieruchomościowcy mieli duży katalog treści i zbyt rozproszoną strukturę, której nie dało się łatwo rozwijać i utrzymywać w logicznej kolejności.",
      },
      {
        label: "Po",
        text: "Opracowana architektura SEO z jasnymi silosami, mocnym linkowaniem i planem contentowym wspierającym zarówno SEO, jak i konwersję.",
      },
    ],
  },
  {
    slug: "technical-seo-audit",
    image: "/images/seo-audit.jpg",
    imageAlt: "Rower na tle ściany — ilustracja branży audytowanego sklepu",
    color: "mint",
    title: "Audyt techniczny SEO",
    kicker: "Crawlability, indexability & site health",
    category: "Technical SEO · diagnostics · implementation roadmap",
    summary:
      "Co utrudnia Google dotarcie do produktów? Audyt serwisu rowerowego i konkretny plan napraw, od indeksowania po strukturę kategorii.",
    impact:
      "Projekt pozwolił zidentyfikować realne blokady w indeksowaniu i crawlability, a następnie zaplanować priorytety napraw na poziomie strony, kategorii i zasobów technicznych.",
    stack: ["SEO audit", "Google Search Console", "robots.txt", "canonical tags", "schema markup"],
    metrics: [
      { label: "obszar", value: "duży serwis" },
      { label: "kluczowy cel", value: "crawlability" },
      { label: "typ błędu", value: "critical + important" },
    ],
    sections: [
      {
        heading: "Zakres audytu",
        body: [
          "Audyt obejmował najważniejsze obszary techniczne: canonicale, breadcrumbs, robots.txt, struktury HTML, indeksowalność formularzy i zasobów, pliki XML sitemap, a także budowę stron kategorii i podkategorii. Największy nacisk położono na to, co naprawdę wpływa na crawl budget i widoczność w Search Console.",
          "Dla dużych serwisów to szczególnie ważne, bo nawet drobne błędy w canonicalach czy blokadach robots mogą prowadzić do bardzo dużych strat w generowaniu widoczności i zasięgu na kluczowych frazach.",
        ],
      },
      {
        heading: "Znaleziska i priorytety",
        body: [
          "Wyniki zostały podzielone na trzy poziomy: critical, important i nice-to-have. Critical obejmowały rzeczy, które mogły ograniczać indeksowanie kluczowych sekcji, important — problemy, które osłabiały semantykę i niekorzystnie wpływały na architekturę, a nice-to-have — ułatwienia, które poprawiały jakość crawlability i ogólną zgodność techniczną.",
          "W praktyce firma otrzymała listę konkretnych rekomendacji: poprawa canonicali, korekta breadcrumb schema, usunięcie blokad w robots.txt, ograniczenie duplikacji treści i poprawa struktury sekcji kategorii.",
        ],
      },
      {
        heading: "Jak to przekłada się na SEO",
        body: [
          "Najważniejsze w audycie nie jest samo znalezienie błędów, ale pokazanie, dlaczego wpływają na widoczność i jakie mają konsekwencje dla indexowania, pozycjonowania i zysków z ruchu. To właśnie odróżnia ‘techniczny raport’ od właściwej diagnozy biznesowej: raport musi pokazywać priorytety i podpowiadać, co dodać lub poprawić w praktyce.",
          "W tym przypadku repozytorium problemów zostało przygotowane w formie gotowej do wdrożenia listy z naciskiem na realną wartość dla biznesu, a nie tylko na checklistę techniczną.",
        ],
      },
    ],
    deliverables: [
      "Raport z priorytetyzacją błędów SEO",
      "Lista critical / important / nice-to-have",
      "Rekomendacje wdrożeniowe dla devów i content teamu",
      "Mapowanie ryzyka dla crawlability i indexability",
      "Plan napraw technicznych i strategii weryfikacji",
    ],
    beforeAfter: [
      {
        label: "Przed",
        text: "Serwis miał liczne problemy techniczne, które mogły osłabiać crawl budget, powodować duplikację treści i utrudniać skuteczne indeksowanie ważnych sekcji.",
      },
      {
        label: "Po",
        text: "Po audycie powstał jasny plan napraw z priorytetyzacją, który jasno pokazuje, co powinno zostać poprawione najpierw, aby odzyskać jakość indeksowania i widoczności.",
      },
    ],
  },
];
