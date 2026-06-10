import type { Meta, StoryObj } from "@storybook/react";

import FaqAccordion from "./FaqAccordion";

const meta = {
  title: "Home/FaqAccordion",
  component: FaqAccordion,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[800px] w-full mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FaqAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Pytania i odpowiedzi",
    groups: [
      {
        id: "Kandydaci",
        label: "Kandydaci",
        items: [
          {
            id: "Question 1 - Kandydaci",
            question: "Muszę mieć doświadczenie?",
            answerPrefix: "Nie.",
            answerBody:
              "Większość ofert na Działaj jest dla osób, które dopiero zaczynają.",
          },
          {
            id: "Question 2 - Kandydaci",
            question: "Co dostanę na koniec?",
            answerPrefix: null,
            answerBody:
              "Większość organizacji wystawia zaświadczenie albo referencje.",
          },
          {
            id: "Question 3 - Kandydaci",
            question: "Czy zarobię?",
            answerPrefix: "Nie.",
            answerBody:
              "Wolontariat przynosi doświadczenie i rozwój, nie wypłatę.",
          },
        ],
      },
      {
        id: "Organizacje",
        label: "Organizacje",
        items: [
          {
            id: "Question 1 - Organizacje",
            question: "Ile to kosztuje?",
            answerPrefix: "0 zł",
            answerBody: "Publikacja oferty jest darmowa.",
          },
          {
            id: "Question 2 - Organizacje",
            question: "Jak długo oferta będzie aktywna?",
            answerPrefix: "30 dni.",
            answerBody: "W każdym momencie możesz ją wydłużyć.",
          },
          {
            id: "Question 3 - Organizacje",
            question: "Co dostanę, czego nie ma na innych portalach?",
            answerPrefix: null,
            answerBody:
              "Dotarcie do osób spoza Waszej bańki - ludzi, którzy o Was nie słyszeli, ale szukają dokładnie takich projektów jak Wasze.",
          },
        ],
      },
    ],
    defaultGroupId: "Kandydaci",
  },
};
