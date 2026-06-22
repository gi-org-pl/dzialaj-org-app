import { ActionList, Select } from "@gi/athena";
import { useState } from "react";
import type { FaqAccordion } from "@/components/home/FaqAccordion/FaqAccordion.types.ts";
import FaqItem from "@/components/home/FaqAccordion/FaqItem/FaqItem.tsx";

export default function FaqAccordion({
  heading,
  groups,
  defaultGroupId,
}: FaqAccordion) {
  const [currentGroupId, setCurrentGroupId] = useState<string>(defaultGroupId);

  const currentGroup = groups.find((group) => group.id === currentGroupId);

  const items = groups.map((group) => ({
    label: group.label,
    onClick: () => setCurrentGroupId(group.id),
  }));

  return (
    <div className="w-full flex flex-col items-center justify-between rounded-4xl border-solid border-gi-light-gray">
      <div className="w-full flex flex-nowrap items-center justify-between gap-4 px-6 py-6 md:py-8 rounded-t-4xl bg-gradient-to-t from-[var(--color-gi-blue)]/10 to-white">
        <h2 className="flex-0 text-gi-blue text-2xl font-bold break-words leading-tight">
          {heading}
        </h2>
        <Select
          openOn="click"
          placeholder="Wybierz grupę"
          value={currentGroup?.label}
        >
          <ActionList items={items} />
        </Select>
      </div>
      <div className="flex flex-col w-full items-center justify-center px-6 pb-6 gap-3 rounded-b-4xl bg-gi-blue/10">
        {currentGroup?.items.map((item) => (
          <FaqItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
