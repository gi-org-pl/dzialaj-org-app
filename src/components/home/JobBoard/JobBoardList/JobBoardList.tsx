import {
  JOB_BOARD_EMPTY_STATE_MESSAGE,
  JOB_BOARD_JOB_LIST_TEST_ID,
} from "../JobBoard.constants";
import { JobCardPlaceholder } from "../JobCardPlaceholder/JobCardPlaceholder";
import type { JobBoardListProps } from "./JobBoardList.types";

export const JobBoardList = ({ jobs }: JobBoardListProps) => (
  <ul
    data-testid={JOB_BOARD_JOB_LIST_TEST_ID}
    className="flex flex-col divide-y divide-gi-ash rounded-2xl bg-white"
  >
    {jobs.length === 0 ? (
      <li className="p-4 text-gi-dark-gray">{JOB_BOARD_EMPTY_STATE_MESSAGE}</li>
    ) : (
      jobs.map((job) => (
        <li key={job.id} className="p-4">
          <JobCardPlaceholder job={job} />
        </li>
      ))
    )}
  </ul>
);
