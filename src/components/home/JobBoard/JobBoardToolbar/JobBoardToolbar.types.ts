import type { JobBoardProps } from "../JobBoard.types";

export type JobBoardToolbarProps = Pick<
  JobBoardProps,
  "totalCount" | "locationOptions" | "onLocationChange" | "onSearchChange"
>;
