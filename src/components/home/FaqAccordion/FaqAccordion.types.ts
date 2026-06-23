export interface FaqItem {
  id: string;
  question: string;
  answerPrefix: string | null;
  answerBody: string;
}

export interface FaqGroup {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface FaqAccordion {
  heading: string;
  groups: FaqGroup[];
  defaultGroupId: string;
}
