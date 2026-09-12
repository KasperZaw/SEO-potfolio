export type Silo = {
  id: string;
  name: string;
  tone: "peach" | "mint" | "lavender";
  pillar: string;
  goal: string;
  keyword: string;
  supporting: string[];
  clusters: { name: string; keyword: string; scope: string }[];
};

export const silos: Silo[] = [
  {
    "id": "sprzedajacy",
    "name": "Dla sprzedających",
    "tone": "peach",
    "pillar": "Sprzedaż nieruchomości w Siedlcach",
    "goal": "pozyskiwanie właścicieli zainteresowanych sprzedażą mieszkania, domu lub działki.",
    "keyword": "sprzedaż nieruchomości Siedlce",
    "supporting": [
      "sprzedaż mieszkania Siedlce",
      "sprzedaż domu Siedlce",
      "sprzedaż działki Siedlce",
      "pomoc w sprzedaży nieruchomości Siedlce"
    ],
    "clusters": [
      {
        "name": "Proces sprzedaży",
        "keyword": "jak sprzedać mieszkanie w Siedlcach",
        "scope": "etapy sprzedaży, przygotowanie oferty, prezentacje i finalizacja"
      },
      {
        "name": "Szybka sprzedaż",
        "keyword": "jak szybko sprzedać mieszkanie w Siedlcach",
        "scope": "cena, czas ekspozycji, zdjęcia i promocja"
      },
      {
        "name": "Przygotowanie",
        "keyword": "jak przygotować mieszkanie do sprzedaży",
        "scope": "home staging, porządkowanie, zdjęcia i remont"
      },
      {
        "name": "Dokumenty",
        "keyword": "dokumenty do sprzedaży mieszkania",
        "scope": "dokumenty do notariusza, zaświadczenia i księga wieczysta"
      },
      {
        "name": "Czas sprzedaży",
        "keyword": "ile trwa sprzedaż mieszkania",
        "scope": "średni czas sprzedaży i czynniki wpływające na wynik"
      },
      {
        "name": "Podatki",
        "keyword": "podatek od sprzedaży mieszkania",
        "scope": "sprzedaż przed upływem pięciu lat i ulga mieszkaniowa"
      },
      {
        "name": "Sprzedaż samodzielna",
        "keyword": "sprzedaż mieszkania bez pośrednika — czy warto",
        "scope": "koszty, ryzyka i porównanie modeli sprzedaży"
      },
      {
        "name": "Wycena",
        "keyword": "wycena nieruchomości Siedlce",
        "scope": "cena ofertowa, cena transakcyjna i błędy w wycenie"
      },
      {
        "name": "Negocjacje",
        "keyword": "jak negocjować cenę sprzedaży nieruchomości",
        "scope": "obniżki, kontrpropozycje i strategia negocjacyjna"
      },
      {
        "name": "Case studies",
        "keyword": "jak sprzedaliśmy nieruchomość w Siedlcach",
        "scope": "problem, działania, czas sprzedaży i uzyskany efekt"
      }
    ]
  },
  {
    "id": "kupujacy",
    "name": "Dla kupujących",
    "tone": "mint",
    "pillar": "Nieruchomości w Siedlcach / Oferty",
    "goal": "prezentowanie aktualnych ofert, pozyskiwanie zapytań i umawianie prezentacji.",
    "keyword": "nieruchomości Siedlce",
    "supporting": [
      "nieruchomości na sprzedaż Siedlce",
      "nieruchomości Siedlce i okolice",
      "nieruchomości powiat siedlecki"
    ],
    "clusters": [
      {
        "name": "Mieszkania",
        "keyword": "mieszkania na sprzedaż Siedlce",
        "scope": "kawalerki, liczba pokoi, rynek wtórny i mieszkania z ogródkiem"
      },
      {
        "name": "Domy",
        "keyword": "domy na sprzedaż Siedlce",
        "scope": "domy w mieście, okolicach, szeregowce i domy z działką"
      },
      {
        "name": "Działki",
        "keyword": "działki na sprzedaż Siedlce",
        "scope": "działki budowlane, rolne i nieruchomości w okolicach miasta"
      },
      {
        "name": "Proces zakupu",
        "keyword": "jak kupić mieszkanie w Siedlcach",
        "scope": "rezerwacja, umowa przedwstępna, dokumenty i notariusz"
      },
      {
        "name": "Weryfikacja",
        "keyword": "co sprawdzić przed kupnem mieszkania",
        "scope": "stan prawny, techniczny, zadłużenie i księga wieczysta"
      },
      {
        "name": "Koszty",
        "keyword": "koszty zakupu nieruchomości",
        "scope": "podatek PCC, notariusz, prowizja i opłaty sądowe"
      },
      {
        "name": "Rodzaj rynku",
        "keyword": "rynek pierwotny a wtórny",
        "scope": "różnice, zalety, wady i wybór nieruchomości"
      },
      {
        "name": "Negocjacje",
        "keyword": "jak negocjować cenę mieszkania",
        "scope": "analiza ofert, argumenty kupującego i margines negocjacyjny"
      },
      {
        "name": "Zakup działki",
        "keyword": "działka siedliskowa — co to znaczy",
        "scope": "warunki zabudowy, działka rolna i możliwość budowy domu"
      }
    ]
  },
  {
    "id": "rynek-lokalny",
    "name": "Rynek nieruchomości w Siedlcach",
    "tone": "lavender",
    "pillar": "Rynek nieruchomości w Siedlcach",
    "goal": "budowanie lokalnego autorytetu, widoczności na frazy geograficzne oraz łączenie potrzeb sprzedających i kupujących.",
    "keyword": "rynek nieruchomości w Siedlcach",
    "supporting": [
      "ceny mieszkań w Siedlcach",
      "cena m² Siedlce",
      "ceny nieruchomości Siedlce",
      "raport rynku nieruchomości Siedlce"
    ],
    "clusters": [
      {
        "name": "Ceny",
        "keyword": "ceny mieszkań w Siedlcach",
        "scope": "cena za m², ceny ofertowe i transakcyjne"
      },
      {
        "name": "Raport rynku",
        "keyword": "rynek nieruchomości w Siedlcach",
        "scope": "podaż, popyt, czas sprzedaży i zmiany cen"
      },
      {
        "name": "Osiedla",
        "keyword": "najlepsze osiedla w Siedlcach",
        "scope": "lokalizacje dla rodzin, studentów i inwestorów"
      },
      {
        "name": "Części miasta",
        "keyword": "mieszkania na wybranym osiedlu w Siedlcach",
        "scope": "ceny, infrastruktura, komunikacja i rodzaj zabudowy"
      },
      {
        "name": "Miasto czy okolice",
        "keyword": "mieszkanie w Siedlcach czy dom pod miastem",
        "scope": "koszty, dojazdy, utrzymanie i styl życia"
      },
      {
        "name": "Okolice Siedlec",
        "keyword": "Siedlce czy okolice — gdzie kupić nieruchomość",
        "scope": "ceny, podaż domów i działek oraz różnice lokalizacyjne"
      },
      {
        "name": "Dojazdy",
        "keyword": "mieszkanie w Siedlcach i praca w Warszawie",
        "scope": "kolej, czas dojazdu, koszty i alternatywa dla Warszawy"
      }
    ]
  }
];

export const commercialKeywords = [
  {
    "page": "Strona główna",
    "keyword": "agent nieruchomości Siedlce",
    "supporting": "pośrednik nieruchomości Siedlce, agentka nieruchomości Siedlce, specjalistka ds. sprzedaży nieruchomości Siedlce"
  },
  {
    "page": "Sprzedaż nieruchomości",
    "keyword": "sprzedaż nieruchomości Siedlce",
    "supporting": "sprzedaż mieszkania, domu i działki w Siedlcach"
  },
  {
    "page": "Wszystkie oferty",
    "keyword": "nieruchomości Siedlce",
    "supporting": "nieruchomości na sprzedaż Siedlce, nieruchomości Siedlce i okolice"
  },
  {
    "page": "Mieszkania",
    "keyword": "mieszkania na sprzedaż Siedlce",
    "supporting": "mieszkanie na sprzedaż Siedlce, mieszkania Siedlce na sprzedaż"
  },
  {
    "page": "Domy",
    "keyword": "domy na sprzedaż Siedlce",
    "supporting": "dom na sprzedaż Siedlce, domy Siedlce i okolice"
  },
  {
    "page": "Działki",
    "keyword": "działki na sprzedaż Siedlce",
    "supporting": "działka na sprzedaż Siedlce, działki budowlane Siedlce"
  },
  {
    "page": "Wynajem",
    "keyword": "mieszkania do wynajęcia Siedlce",
    "supporting": "mieszkania na wynajem Siedlce, wynajem mieszkania Siedlce"
  },
  {
    "page": "Wycena — warunkowo",
    "keyword": "wycena nieruchomości Siedlce",
    "supporting": "wycena mieszkania, domu i działki w Siedlcach"
  }
];

export const rentalTopics = [
  "mieszkania do wynajęcia Siedlce",
  "kawalerka Siedlce wynajem",
  "domy do wynajęcia Siedlce",
  "umowa najmu mieszkania",
  "najem okazjonalny",
  "przygotowanie mieszkania pod wynajem",
  "prawa właściciela i najemcy"
];

export const linkingSteps = [
  "Strona główna prowadzi do trzech głównych silosów.",
  "Każdy silos posiada centralną stronę filarową.",
  "Filar prowadzi do opublikowanych artykułów, kategorii ofert i stron usługowych.",
  "Każdy artykuł linkuje zwrotnie do filaru oraz właściwej strony konwersyjnej.",
  "Artykuły zawierają dodatkowo od dwóch do czterech linków do najbardziej powiązanych treści.",
  "Po opublikowaniu nowego materiału aktualizowana jest strona filarowa oraz wybrane starsze artykuły."
];
