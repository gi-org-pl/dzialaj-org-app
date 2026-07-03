import { Avatar, Badge } from "@gi/athena";

import type { JobCardPlaceholderProps } from "./JobCardPlaceholder.types";

export const JobCardPlaceholder = ({ job }: JobCardPlaceholderProps) => (
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
