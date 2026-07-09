import { JOB_BOARD_RESULTS_LABEL_SUFFIX } from "../JobBoard.constants";
import type { JobBoardResultsLabelProps } from "./JobBoardResultsLabel.types";

export const JobBoardResultsLabel = ({
  totalCount,
}: JobBoardResultsLabelProps) => (
  <p className="text-xl font-extrabold text-gi-primary">
    <span className="text-gi-blue">{totalCount}</span>{" "}
    {JOB_BOARD_RESULTS_LABEL_SUFFIX}
  </p>
);
