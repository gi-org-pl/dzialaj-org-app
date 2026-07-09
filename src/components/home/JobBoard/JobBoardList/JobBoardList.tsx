import {
  JOB_BOARD_EMPTY_STATE_MESSAGE,
  JOB_BOARD_JOB_LIST_TEST_ID,
} from "../JobBoard.constants";
import { JobCard } from "../JobCard/JobCard";
import type { JobBoardListProps } from "./JobBoardList.types";

export const JobBoardList = ({ jobs }: JobBoardListProps) => (
  <ul data-testid={JOB_BOARD_JOB_LIST_TEST_ID} className="flex flex-col gap-3">
    {jobs.length === 0 ? (
      <li className="rounded-2xl bg-white p-4 text-gi-dark-gray">
        {JOB_BOARD_EMPTY_STATE_MESSAGE}
      </li>
    ) : (
      jobs.map((job) => (
        <li key={job.id}>
          <JobCard {...job} />
        </li>
      ))
    )}
  </ul>
);
