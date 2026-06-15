import type { FaqGroup } from "@/components/home/FaqAccordion/FaqAccordion.types";

export const faqHeading = "Pytania i odpowiedzi";

export const faqGroups: FaqGroup[] = [
  {
    id: "Kandydaci",
    label: "Kandydaci",
    items: [
      {
        id: "q1-k",
        question: "Muszę mieć doświadczenie?",
        answerPrefix: "Nie.",
        answerBody:
          "Większość ofert na Działaj jest dla osób, które dopiero zaczynają.",
      },
      {
        id: "q2-k",
        question: "Co dostanę na koniec?",
        answerPrefix: null,
        answerBody:
          "Większość organizacji wystawia zaświadczenie albo referencje.",
      },
      {
        id: "q3-k",
        question: "Czy zarobię?",
        answerPrefix: "Nie.",
        answerBody: "Wolontariat przynosi doświadczenie i rozwój, nie wypłatę.",
      },
    ],
  },
  {
    id: "Organizacje",
    label: "Organizacje",
    items: [
      {
        id: "q1-o",
        question: "Ile to kosztuje?",
        answerPrefix: "0 zł.",
        answerBody: "Publikacja oferty jest darmowa.",
      },
      {
        id: "q2-o",
        question: "Jak długo oferta będzie aktywna?",
        answerPrefix: "30 dni.",
        answerBody: "W każdym momencie możesz ją wydłużyć.",
      },
      {
        id: "q3-o",
        question: "Co dostanę, czego nie ma na innych portalach?",
        answerPrefix: null,
        answerBody:
          "Dotarcie do osób spoza Waszej bańki - ludzi, którzy o Was nie słyszeli, ale szukają dokładnie takich projektów jak Wasze.",
      },
    ],
  },
] as const;
