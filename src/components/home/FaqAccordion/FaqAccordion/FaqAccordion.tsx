import { ActionList, Select } from "@gi/athena";
import { useState } from "react";
import type { FaqAccordion } from "@/components/home/FaqAccordion/FaqAccordion/FaqAccordion.types.ts";
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

  const renderHeader = () => {
    return (
      <div className="w-full flex items-center justify-between px-6 pt-8 bg-gradient-to-t from-[#1063E1]/[0.05] to-white">
        <h2 className="text-gi-blue text-2xl font-bold">{heading}</h2>
        <Select
          openOn="click"
          placeholder="Wybierz grupę"
          value={currentGroup?.label}
        >
          <ActionList items={items} />
        </Select>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-3 bg-[#1063E1]/[0.05] p-6">
        {currentGroup?.items.map((item) => (
          <FaqItem {...item} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-between rounded-4xl">
      {renderHeader()}
      {renderBody()}
    </div>
  );
}
