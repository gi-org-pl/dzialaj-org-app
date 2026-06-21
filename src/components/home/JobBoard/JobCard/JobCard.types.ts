import type { ReactNode } from "react";

export interface JobCardBadge {
  id: string;
  icon?: ReactNode;
  label: string;
  variant: "default" | "primary";
}

export interface JobCardProps {
  title: string;
  organisation: string;
  avatarSrc?: string;
  avatarAlt?: string;
  badges: JobCardBadge[];
  className?: string;
}
