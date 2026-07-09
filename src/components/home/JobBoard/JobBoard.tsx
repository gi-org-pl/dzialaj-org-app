import { Button } from "@gi/athena";

import { JOB_BOARD_LOAD_MORE_LABEL } from "./JobBoard.constants";
import type { JobBoardProps } from "./JobBoard.types";
import { JobBoardList } from "./JobBoardList/JobBoardList";
import { JobBoardToolbar } from "./JobBoardToolbar/JobBoardToolbar";

export const JobBoard = ({
  jobs,
  totalCount,
  locationOptions,
  onLocationChange,
  onSearchChange,
  onLoadMore,
  hasMore,
}: JobBoardProps) => (
  <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-3xl border border-gi-light-gray p-6 bg-linear-to-t from-white to-[color-mix(in_oklch,var(--gi-blue)_10%,white)]">
    <JobBoardToolbar
      totalCount={totalCount}
      locationOptions={locationOptions}
      onLocationChange={onLocationChange}
      onSearchChange={onSearchChange}
    />
    <JobBoardList jobs={jobs} />
    {hasMore ? (
      <Button
        variant="ngoPrimary"
        onClick={onLoadMore}
        className="w-fit font-extrabold"
      >
        {JOB_BOARD_LOAD_MORE_LABEL}
      </Button>
    ) : null}
  </section>
);
