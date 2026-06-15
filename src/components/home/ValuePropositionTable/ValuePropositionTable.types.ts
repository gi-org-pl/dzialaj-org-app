export type ComparisonRow = {
  id: string;
  attribute: string;
  działajValue: string;
  jobBoardValue: string;
};

export type ValuePropositionTableProps = {
  heading: string;
  rows: ComparisonRow[];
  illustrationSrc: string;
  illustrationAlt: string;
};
