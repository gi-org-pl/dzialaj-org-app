import { ActionList, Select } from "@gi-org-pl/athena";
import { useState } from "react";

import {
  JOB_BOARD_LOCATION_PLACEHOLDER,
  JOB_BOARD_LOCATION_SELECT_TEST_ID,
} from "../JobBoard.constants";
import type { SelectOption } from "../JobBoard.types";
import type { JobBoardLocationFilterProps } from "./JobBoardLocationFilter.types";

export const JobBoardLocationFilter = ({
  locationOptions,
  onLocationChange,
}: JobBoardLocationFilterProps) => {
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
