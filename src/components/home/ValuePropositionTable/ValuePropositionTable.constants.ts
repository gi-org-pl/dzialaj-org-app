import type { ComparisonRow } from "./ValuePropositionTable.types";

export const VALUE_PROPOSITION_HEADING =
  "Tu znajdziesz możliwości\nktórych nie ma na job boardach.";

export const VALUE_PROPOSITION_COLUMN_HEADER = "Job Boardy";

export const VALUE_PROPOSITION_LOGO_ALT = "działaj logo";

export const VALUE_PROPOSITION_DEFAULT_ROWS: ComparisonRow[] = [
  {
    id: "experience",
    attribute: "Doświadczenie:",
    działajValue: "Niewymagane",
    jobBoardValue: ">5 lat na juniora",
  },
  {
    id: "goal",
    attribute: "Cel:",
    działajValue: "Społeczny",
    jobBoardValue: "Komercyjny",
  },
  {
    id: "passion",
    attribute: "Rozwój pasji:",
    działajValue: "Przede wszystkim",
    jobBoardValue: "Mocno ograniczony",
  },
  {
    id: "flexibility",
    attribute: "Elastyczność:",
    działajValue: "Nieograniczona",
    jobBoardValue: "Praca od 8 do 16",
  },
];
