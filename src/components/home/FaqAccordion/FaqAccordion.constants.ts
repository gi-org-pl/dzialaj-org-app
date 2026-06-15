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
    ],
  },
  {
    id: "Organizacje",
    label: "Organizacje",
    items: [
      {
        id: "q1-o",
        question: "Ile to kosztuje?",
        answerPrefix: "0 zł",
        answerBody: "Publikacja oferty jest darmowa.",
      },
    ],
  },
] as const;
