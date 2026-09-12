export type AuditBlock =
  | { type: "heading" | "paragraph"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export const auditBlocks: AuditBlock[] = [
  {
    "type": "heading",
    "text": "Metodologia"
  },
  {
    "type": "paragraph",
    "text": "Audyt przeprowadziłem na próbce serwisu przy użyciu Screaming Frog w wersji darmowej (crawl ograniczony do 500 URL-i), Google Lighthouse do oceny wydajności oraz ręcznej weryfikacji w przeglądarce, kodzie źródłowym i Rich Results Test."
  },
  {
    "type": "paragraph",
    "text": "Trzeba jasno powiedzieć, jakie miałem ograniczenia. Limit 500 URL-i w darmowej wersji Screaming Frog sprawia, że wyniki dotyczące statusów HTTP, indeksowalności i crawl trapów odnoszą się do próbki, nie całego serwisu. Nie miałem też dostępu do Google Search Console, więc nie mogłem zweryfikować, jak Google faktycznie traktuje canonicale, indeksację i dane strukturalne w praktyce."
  },
  {
    "type": "paragraph",
    "text": "Mimo tych ograniczeń próbka pozwoliła zidentyfikować kilka konkretnych błędów oraz obszary wymagające dalszej weryfikacji przy pełnym dostępie."
  },
  {
    "type": "heading",
    "text": "Podsumowanie: najważniejsze ustalenia"
  },
  {
    "type": "table",
    "headers": [
      "Priorytet",
      "Problem",
      "Wpływ"
    ],
    "rows": [
      [
        "🔴 Krytyczny",
        "Błąd w JSON-LD BreadcrumbList (pusty URL ostatniego elementu)",
        "Może zaburzać interpretację breadcrumbs przez Google"
      ],
      [
        "🔴 Krytyczny",
        "Brak sitemap XML",
        "Utrudnia odkrywanie nowych i aktualizowanych produktów w dużym serwisie"
      ],
      [
        "🟡 Istotny",
        "Brak canonicala na stronach paginacji",
        "Niejednoznaczna preferowana wersja URL-a"
      ],
      [
        "🟡 Istotny",
        "Nieprawidłowe URL-e powiązane z generowaniem breadcrumbs",
        "Ryzyko zbędnego crawlowania i duplikatów"
      ],
      [
        "🟡 Do weryfikacji",
        "Faceted navigation, indeksowalne kombinacje filtrów",
        "Potencjalna generacja dużej liczby stron o niskiej wartości SEO"
      ],
      [
        "🟡 Do weryfikacji",
        "Nieużywane lub stare reguły w robots.txt",
        "Wymaga potwierdzenia z developerem przed usunięciem"
      ]
    ]
  },
  {
    "type": "paragraph",
    "text": "Poniżej pełna diagnoza, pogrupowana tematycznie, wraz z tym, co sprawdziłem i co uznaję za wymagające dalszej analizy przy pełnym dostępie."
  },
  {
    "type": "heading",
    "text": "1. Dane strukturalne i URL-e breadcrumbs"
  },
  {
    "type": "paragraph",
    "text": "Ostatni element listy breadcrumbs ma pustą wartość identyfikującą URL. Podejrzewam błąd w logice generowania tego pola. Konsekwencją może być nieprawidłowa interpretacja breadcrumbs przez Google, w tym generowanie błędnych adresów w wynikach wyszukiwania."
  },
  {
    "type": "paragraph",
    "text": "Wykryłem też powiązane, nietypowe URL-e, które prawdopodobnie powstają w wyniku tego samego błędu. Jeśli są dostępne w <a href> i crawler może je odkrywać, tworzą niepotrzebne ścieżki crawlowania i duplikaty URL-i."
  },
  {
    "type": "paragraph",
    "text": "Co bym zrobił dalej: przeanalizowałbym logikę generowania ostatniego elementu BreadcrumbList z developerem, poprawił źródło tych nietypowych adresów, a po wdrożeniu zweryfikował wynik w Rich Results Test oraz sprawdził statusy HTTP i liczbę wewnętrznych odwołań do tych URL-i."
  },
  {
    "type": "heading",
    "text": "2. Indeksacja, canonicale i nawigacja fasetowa"
  },
  {
    "type": "paragraph",
    "text": "Canonicale na stronach produktowych sprawdziłem ręcznie oraz w Screaming Frog i nie znalazłem tu problemu. Warianty produktów, na przykład URL-e z parametrem ?v_Id=, poprawnie wskazują canonical na główny URL produktu. Nie znalazłem przypadku, w którym wariant byłby traktowany jako osobna strona kanoniczna."
  },
  {
    "type": "paragraph",
    "text": "Inaczej wygląda sytuacja z paginacją. Jest ona crawlable i dostępna przez standardowe linki, ale sprawdzone strony paginacji nie mają wdrożonego canonicala, co może utrudniać wyszukiwarce określenie preferowanej wersji URL-a."
  },
  {
    "type": "paragraph",
    "text": "Osobny temat to faceted navigation. W próbce znalazłem indeksowalne URL-e generowane przez filtry kategorii. Jeśli duża część kombinacji filtrów jest jednocześnie crawlable i indexable, serwis może generować znaczną liczbę stron o niewielkiej wartości SEO. Na tym etapie nie traktuję tego jako potwierdzonego błędu, raczej jako obszar do sprawdzenia."
  },
  {
    "type": "paragraph",
    "text": "Co bym zrobił dalej: dla paginacji wdrożyłbym self-referencing canonical na każdej stronie. Dla faceted navigation sprawdziłbym canonical, dyrektywy index/noindex, unikalność title, H1 i treści oraz realną skalę generowanych kombinacji parametrów."
  },
  {
    "type": "heading",
    "text": "3. Crawlability i infrastruktura techniczna"
  },
  {
    "type": "paragraph",
    "text": "W kilku obszarach nie znalazłem problemów w próbce. Przekierowania domeny (HTTP/HTTPS, www/non-www) działają poprawnie i prowadzą do właściwej wersji HTTPS z zachowaniem ścieżki URL. Wersja adresu z trailing slash zwraca 200, a wersja bez niego przekierowuje kodem 301. Statusy HTTP wewnętrznych URL-i w próbce są bez błędów, jedyne nietypowe odpowiedzi dotyczą zewnętrznych linków (Strava 403, YouTube 302). Sprawdzony nieistniejący URL prawidłowo zwraca 404, bez śladów soft 404. Infinite scroll nie jest stosowany, więc crawler swobodnie przechodzi między stronami dzięki standardowej paginacji. Niedostępne produkty mają karty pod statusem 200 z jasną informacją o braku dostępności, co jest poprawnym podejściem, jeśli treść zachowuje wartość i produkt może wrócić do sprzedaży."
  },
  {
    "type": "paragraph",
    "text": "Poważniejszy problem to brak publicznie dostępnej sitemapy XML. Przy dużym serwisie e-commerce może to utrudniać Google sprawne odkrywanie nowych i aktualizowanych produktów oraz kategorii."
  },
  {
    "type": "paragraph",
    "text": "W robots.txt znalazłem reguły, które wyglądają na nieaktualne. W dostępnej próbce nie znalazłem URL-i odpowiadających części z nich, więc traktuję to jako temat do dalszej weryfikacji, a nie potwierdzony błąd."
  },
  {
    "type": "paragraph",
    "text": "Jeśli chodzi o crawl trapy, w przeanalizowanej próbce nie wykryłem jednoznacznego problemu, ale zauważyłem sporą liczbę URL-i generowanych przez parametry. Ze względu na limit crawla nie mogę wykluczyć problemu w skali całego serwisu."
  },
  {
    "type": "paragraph",
    "text": "Co bym zrobił dalej: wdrożyłbym sitemapę zawierającą wyłącznie adresy 200, indexable i canonical, najlepiej osobno dla produktów, kategorii i treści. Reguły w robots.txt zweryfikowałbym w logach serwera razem z developerem, zanim cokolwiek usunę. Przy pełnym crawlu przefiltrowałbym URL-e z „?\", pogrupował je według kategorii i typów parametrów, żeby ocenić realną skalę kombinacji."
  },
  {
    "type": "heading",
    "text": "4. On-page i struktura treści"
  },
  {
    "type": "paragraph",
    "text": "W sprawdzonej próbce nie znalazłem tu istotnych problemów. Title jest obecny i poprawny na sprawdzonych stronach, podobnie meta description. Struktura nagłówków też wygląda dobrze, jeden główny H1 i poprawna hierarchia. Indeksowalność jest zgodna z oczekiwaniami, noindex stosowany jest tam, gdzie powinien, na przykład na stronie logowania. Linkowanie wewnętrzne jest rozbudowane, choć liczba linków mocno różni się w zależności od typu strony. Sama liczba linków nie jest jednak wyznacznikiem jakości."
  },
  {
    "type": "paragraph",
    "text": "Co bym zrobił dalej: przy pełnym crawlu sprawdziłbym duplikaty i braki title oraz meta description w skali całego serwisu. W linkowaniu wewnętrznym zweryfikowałbym, czy najważniejsze kategorie i produkty otrzymują odpowiednio dużo wartościowych inlinków i czy linkowanie nie prowadzi do zbędnych parametrów lub redirectów."
  },
  {
    "type": "heading",
    "text": "5. Performance i obrazy"
  },
  {
    "type": "paragraph",
    "text": "Lighthouse pokazuje dobry wynik, zarówno ogólnie, jak i w sekcji SEO, jak na duży serwis e-commerce. Najwięcej uwag dotyczy sekcji Best Practices, między innymi skrypty zewnętrzne i przestarzałe API. Nie traktuję jednak wyniku Lighthouse jako pełnej analizy Core Web Vitals, do tego potrzebne są dane field data z PageSpeed Insights, CrUX lub GSC."
  },
  {
    "type": "paragraph",
    "text": "Znalazłem też obrazy w formatach PNG i GIF. Dla cięższych plików warto rozważyć WebP lub AVIF, jeśli pozwoli to zmniejszyć wagę bez utraty jakości. To nie jest błąd sam w sobie, raczej możliwość poprawy."
  },
  {
    "type": "heading",
    "text": "Następne kroki przy pełnym dostępie"
  },
  {
    "type": "paragraph",
    "text": "Gdybym prowadził ten audyt produkcyjnie, priorytetowo zweryfikowałbym cztery rzeczy. Po pierwsze dane z Google Search Console, żeby sprawdzić realne traktowanie canonicali, indeksacji i danych strukturalnych przez Google. Po drugie pełny crawl, najlepiej płatną wersją Screaming Frog lub innym narzędziem, żeby uzyskać pełny obraz statusów HTTP, indeksowalności i skali crawl trapów. Po trzecie logi serwera, żeby zobaczyć realne wykorzystanie reguł w robots.txt i sposób, w jaki Googlebot faktycznie crawluje serwis. Po czwarte field data z PageSpeed lub CrUX, żeby poznać rzeczywiste Core Web Vitals zamiast danych laboratoryjnych z Lighthouse."
  }
];
