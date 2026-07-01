export interface SelectOption {
  value: string;
  label: string;
}

export interface JobBadge {
  id: string;
  label: string;
}

export interface Job {
  id: string;
  title: string;
  organisation: string;
  avatarSrc?: string;
  avatarAlt: string;
  badges: JobBadge[];
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
