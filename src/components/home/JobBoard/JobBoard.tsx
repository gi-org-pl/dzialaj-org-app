import { ActionList, Avatar, Badge, Button, Input, Select } from "@gi/athena";
import { useEffect, useRef, useState } from "react";

import SearchIcon from "@/assets/icons/search.svg";

import {
  JOB_BOARD_EMPTY_STATE_MESSAGE,
  JOB_BOARD_JOB_LIST_TEST_ID,
  JOB_BOARD_LOAD_MORE_LABEL,
  JOB_BOARD_LOCATION_PLACEHOLDER,
  JOB_BOARD_LOCATION_SELECT_TEST_ID,
  JOB_BOARD_RESULTS_LABEL_SUFFIX,
  JOB_BOARD_SEARCH_INPUT_TEST_ID,
  JOB_BOARD_SEARCH_PLACEHOLDER,
} from "./JobBoard.constants";
import type { Job, JobBoardProps, SelectOption } from "./JobBoard.types";

const JOB_BOARD_NARROW_BREAKPOINT_PX = 640;

const useIsNarrowContainer = (breakpointPx: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      setIsNarrow(entry.contentRect.width < breakpointPx);
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [breakpointPx]);

  return { containerRef, isNarrow };
};

const JobCardPlaceholder = ({ job }: { job: Job }) => (
  <div className="flex items-center gap-3">
    <Avatar src={job.avatarSrc} alt={job.avatarAlt} />
    <div className="flex flex-col gap-1">
      <p className="font-bold text-gi-primary">{job.title}</p>
      <p className="text-sm text-gi-dark-gray">{job.organisation}</p>
      <div className="flex flex-wrap gap-1.5">
        {job.badges.map((badge) => (
          <Badge key={badge.id} type="info" variant="secondary" size="small">
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

const JobBoardResultsLabel = ({ totalCount }: { totalCount: number }) => (
  <p className="text-xl font-extrabold text-gi-primary">
    <span className="text-gi-blue">{totalCount}</span>{" "}
    {JOB_BOARD_RESULTS_LABEL_SUFFIX}
  </p>
);

const JobBoardLocationFilter = ({
  locationOptions,
  onLocationChange,
}: {
  locationOptions: SelectOption[];
  onLocationChange: (value: string) => void;
}) => {
  const [selectedLabel, setSelectedLabel] = useState<string>();

  const handleSelect = (option: SelectOption) => {
    setSelectedLabel(option.label);
    onLocationChange(option.value);
  };

  return (
    <Select
      dataTestId={JOB_BOARD_LOCATION_SELECT_TEST_ID}
      placeholder={JOB_BOARD_LOCATION_PLACEHOLDER}
      value={selectedLabel}
      className="w-[134px] border border-gi-ash bg-white"
    >
      <ActionList
        items={locationOptions.map((option) => ({
          label: option.label,
          onClick: () => handleSelect(option),
        }))}
      />
    </Select>
  );
};

const JobBoardSearchInput = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <Input
      dataTestId={JOB_BOARD_SEARCH_INPUT_TEST_ID}
      placeholder={JOB_BOARD_SEARCH_PLACEHOLDER}
      value={searchValue}
      onChange={handleChange}
      RightIcon={
        <span style={{ marginRight: 2 }}>
          <SearchIcon aria-hidden="true" />
        </span>
      }
    />
  );
};

const JobBoardToolbar = ({
  totalCount,
  locationOptions,
  onLocationChange,
  onSearchChange,
}: Pick<
  JobBoardProps,
  "totalCount" | "locationOptions" | "onLocationChange" | "onSearchChange"
>) => {
  const { containerRef, isNarrow } = useIsNarrowContainer(
    JOB_BOARD_NARROW_BREAKPOINT_PX,
  );

  return (
    <div ref={containerRef} className="flex flex-wrap items-center gap-3">
      <div className="flex-1">
        <JobBoardResultsLabel totalCount={totalCount} />
      </div>
      <JobBoardLocationFilter
        locationOptions={locationOptions}
        onLocationChange={onLocationChange}
      />
      <div style={{ width: isNarrow ? "100%" : "301px" }}>
        <JobBoardSearchInput onSearchChange={onSearchChange} />
      </div>
    </div>
  );
};

const JobBoardList = ({ jobs }: { jobs: Job[] }) => (
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

export const JobBoard = ({
  jobs,
  totalCount,
  locationOptions,
  onLocationChange,
  onSearchChange,
  onLoadMore,
  hasMore,
}: JobBoardProps) => (
  <section
    className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-3xl border border-gi-ash p-6"
    style={{
      backgroundImage:
        "linear-gradient(to top, white, color-mix(in oklch, var(--gi-blue) 10%, white))",
    }}
  >
    <JobBoardToolbar
      totalCount={totalCount}
      locationOptions={locationOptions}
      onLocationChange={onLocationChange}
      onSearchChange={onSearchChange}
    />
    <JobBoardList jobs={jobs} />
    {hasMore ? (
      <Button onClick={onLoadMore} className="w-fit">
        {JOB_BOARD_LOAD_MORE_LABEL}
      </Button>
    ) : null}
  </section>
);
