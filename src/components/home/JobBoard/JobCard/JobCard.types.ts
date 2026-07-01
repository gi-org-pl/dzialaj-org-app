import type { ReactElement } from "react";

export interface JobBadge {
  id: string;
  icon: ReactElement;
  label: string;
  variant: "default" | "primary";
}

export interface JobCardProps {
  title: string;
  organisation: string;
  avatarSrc: string;
  href: string;
  avatarAlt?: string;
  badges: JobBadge[];
  className?: string;
}
