export type StoreChapter = {
  heading: string;
  blocks: ({ type: "paragraph"; text: string } | { type: "list"; items: string[] })[];
};

export const storeChapters: StoreChapter[] = [
  {
    "heading": "Projekt i UX/UI",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Projekt Sklepu Świątecznego realizowałem kompleksowo — od zaprojektowania interfejsu i struktury serwisu, przez wdrożenie sklepu na WordPressie i WooCommerce, aż po działania Technical SEO, automatyzację importu produktów, optymalizację wydajności oraz rozwój widoczności organicznej."
      },
      {
        "type": "paragraph",
        "text": "Pracowałem na motywie WoodMart, który dostosowałem do przygotowanego przeze mnie projektu oraz wymagań UX, SEO i sprzedażowych."
      },
      {
        "type": "paragraph",
        "text": "Samodzielnie przygotowałem projekt interfejsu w Figma, a następnie przeniosłem go do działającego sklepu. Projektowałem nie tylko wygląd strony, ale również sposób poruszania się użytkownika po rozbudowanym katalogu produktów."
      },
      {
        "type": "paragraph",
        "text": "W ramach prac:"
      },
      {
        "type": "list",
        "items": [
          "zaprojektowałem własny layout sklepu w Figma i wdrożyłem go w WordPressie,",
          "stworzyłem logotyp oraz elementy identyfikacji wizualnej,",
          "projektowałem i wdrażałem bannery promocyjne,",
          "stworzyłem rozbudowane mega menu,",
          "zaprojektowałem hierarchię kategorii i podkategorii,",
          "przygotowałem system filtrów i sortowania produktów,",
          "wdrożyłem breadcrumbs,",
          "projektowałem sekcje hero i elementy wspierające konwersję,",
          "wdrożyłem pasek pokazujący użytkownikowi kwotę brakującą do darmowej dostawy,",
          "optymalizowałem układ sklepu pod kątem łatwiejszego przechodzenia między kategoriami i produktami."
        ]
      }
    ]
  },
  {
    "heading": "Architektura katalogu",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Jednym z ważniejszych elementów projektu było zaprojektowanie struktury całego katalogu produktowego."
      },
      {
        "type": "paragraph",
        "text": "Samodzielnie przygotowałem:"
      },
      {
        "type": "list",
        "items": [
          "drzewo kategorii i podkategorii,",
          "logiczną hierarchię tagów produktowych,",
          "strukturę filtrów,",
          "powiązania pomiędzy kategoriami,",
          "sposób prezentacji produktów w obrębie poszczególnych sekcji sklepu."
        ]
      },
      {
        "type": "paragraph",
        "text": "Strukturę budowałem zarówno pod kątem użytkownika, jak i możliwości późniejszego rozwijania widoczności organicznej."
      }
    ]
  },
  {
    "heading": "Technical SEO",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Odpowiadałem również za techniczne przygotowanie sklepu pod wyszukiwarki."
      },
      {
        "type": "paragraph",
        "text": "Wdrożyłem między innymi:"
      },
      {
        "type": "list",
        "items": [
          "robots.txt,",
          "sitemapę XML,",
          "breadcrumbs,",
          "strukturę nagłówków i kategorii,",
          "automatyczne generowanie meta title i meta description,",
          "optymalizację adresów i struktury kategorii,",
          "linkowanie wewnętrzne pomiędzy powiązanymi kategoriami,",
          "linki do podkategorii umieszczane bezpośrednio na stronach kategorii,",
          "dodatkowe linkowanie wewnętrzne w treściach znajdujących się poniżej listingu produktów."
        ]
      },
      {
        "type": "paragraph",
        "text": "Przeprowadzałem również research słów kluczowych, który wykorzystywałem przy budowaniu struktury kategorii, optymalizacji treści oraz planowaniu nowych landing pages i artykułów."
      }
    ]
  },
  {
    "heading": "Treści i automatyzacja",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Rozwijałem również warstwę contentową sklepu."
      },
      {
        "type": "paragraph",
        "text": "W ramach projektu:"
      },
      {
        "type": "list",
        "items": [
          "poprawiałem i rozwijałem opisy produktów,",
          "optymalizowałem treści pod kątem SEO,",
          "przygotowywałem strukturę treści kategorii,",
          "wdrożyłem automatyzację publikowania artykułów blogowych,",
          "rozwijałem linkowanie pomiędzy sekcją contentową i częścią e-commerce."
        ]
      },
      {
        "type": "paragraph",
        "text": "Część procesów contentowych celowo zautomatyzowałem, aby możliwe było skalowanie działań bez ręcznej obsługi każdego elementu."
      }
    ]
  },
  {
    "heading": "Import XML i zadania CRON",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Sklep korzystał z dużej liczby produktów dostarczanych przez zewnętrzne źródła, dlatego skonfigurowałem automatyczny import danych z plików XML."
      },
      {
        "type": "paragraph",
        "text": "Przygotowałem proces obejmujący:"
      },
      {
        "type": "list",
        "items": [
          "import produktów z feedów XML,",
          "przypisywanie produktów do odpowiednich kategorii,",
          "filtrowanie danych podczas importu,",
          "automatyczną aktualizację informacji produktowych,",
          "synchronizację stanów magazynowych,",
          "cykliczne wykonywanie importów."
        ]
      },
      {
        "type": "paragraph",
        "text": "Po stronie hostingu skonfigurowałem również zadania CRON, dzięki którym aktualizacje mogły wykonywać się automatycznie bez ręcznego uruchamiania procesu."
      }
    ]
  },
  {
    "heading": "Wydajność i Core Web Vitals",
    "blocks": [
      {
        "type": "paragraph",
        "text": "Pracowałem również nad ograniczeniem kosztu ładowania sklepu i poprawą stabilności layoutu."
      },
      {
        "type": "paragraph",
        "text": "Wdrożyłem między innymi:"
      },
      {
        "type": "list",
        "items": [
          "konwersję i kompresję obrazów do formatu WebP,",
          "ustawienie stałych wymiarów grafik w celu ograniczenia layout shifts,",
          "optymalizację plików CSS i JavaScript,",
          "minifikację zasobów,",
          "ograniczenie zbędnego kodu i liczby ładowanych zasobów,",
          "optymalizację sposobu ładowania fontów Google."
        ]
      },
      {
        "type": "paragraph",
        "text": "Efektem jest między innymi 143 adresy URL zakwalifikowane w Google Search Console jako dobre pod kątem Core Web Vitals, bez adresów wymagających poprawy i bez adresów ocenionych jako słabe."
      }
    ]
  },
  {
    "heading": "Wyniki i dalsza optymalizacja",
    "blocks": [
      {
        "type": "paragraph",
        "text": "W analizowanym okresie sklep wygenerował:"
      },
      {
        "type": "paragraph",
        "text": "14,5 tys. kliknięć organicznych"
      },
      {
        "type": "paragraph",
        "text": "3,81 mln wyświetleń w Google"
      },
      {
        "type": "paragraph",
        "text": "średnią pozycję około 10"
      },
      {
        "type": "paragraph",
        "text": "Google Search Console raportuje również 728 prawidłowych elementów i brak krytycznych błędów w widocznym raporcie."
      },
      {
        "type": "paragraph",
        "text": "CTR w analizowanym okresie wynosił około 0,4%, co jednocześnie wskazuje mi jeden z kolejnych obszarów do dalszej optymalizacji — przede wszystkim poprzez pracę nad snippetami, intencją wyszukiwania i dopasowaniem title oraz description do zapytań generujących największą liczbę wyświetleń."
      }
    ]
  },
  {
    "heading": "Moja rola w projekcie",
    "blocks": [
      {
        "type": "paragraph",
        "text": "W tym projekcie odpowiadałem nie tylko za pojedyncze działania SEO. Łączyłem pracę z kilku obszarów:"
      },
      {
        "type": "paragraph",
        "text": "UX/UI → WordPress/WooCommerce → architektura informacji → automatyzacja → Technical SEO → content → performance → analiza danych."
      },
      {
        "type": "paragraph",
        "text": "Dzięki temu mogłem patrzeć na sklep jako na jeden system, zamiast optymalizować poszczególne elementy w oderwaniu od siebie."
      }
    ]
  }
];
