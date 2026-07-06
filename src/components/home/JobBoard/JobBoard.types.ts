import type { JobCardProps } from "./JobCard/JobCard.types";

export interface SelectOption {
  value: string;
  label: string;
}

export interface Job extends JobCardProps {
  id: string;
}

export interface JobBoardProps {
  jobs: Job[];
  totalCount: number;
  locationOptions: SelectOption[];
  onLocationChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
}
