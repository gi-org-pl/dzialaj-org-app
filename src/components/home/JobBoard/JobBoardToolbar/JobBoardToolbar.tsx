import { JobBoardLocationFilter } from "../JobBoardLocationFilter/JobBoardLocationFilter";
import { JobBoardResultsLabel } from "../JobBoardResultsLabel/JobBoardResultsLabel";
import { JobBoardSearchInput } from "../JobBoardSearchInput/JobBoardSearchInput";
import type { JobBoardToolbarProps } from "./JobBoardToolbar.types";

export const JobBoardToolbar = ({
  totalCount,
  locationOptions,
  onLocationChange,
  onSearchChange,
}: JobBoardToolbarProps) => (
  <div className="flex flex-wrap items-center gap-3">
    <div className="flex-1">
      <JobBoardResultsLabel totalCount={totalCount} />
    </div>
    <JobBoardLocationFilter
      locationOptions={locationOptions}
      onLocationChange={onLocationChange}
    />
    <JobBoardSearchInput onSearchChange={onSearchChange} />
  </div>
);
