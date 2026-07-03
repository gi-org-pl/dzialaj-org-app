import { Input } from "@gi/athena";
import { useState } from "react";

import SearchIcon from "@/assets/icons/search.svg";

import {
  JOB_BOARD_SEARCH_INPUT_TEST_ID,
  JOB_BOARD_SEARCH_PLACEHOLDER,
} from "../JobBoard.constants";
import type { JobBoardSearchInputProps } from "./JobBoardSearchInput.types";

export const JobBoardSearchInput = ({
  onSearchChange,
}: JobBoardSearchInputProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value: string) => {
    setSearchValue(value);
    onSearchChange(value);
  };

  return (
    <div className="w-full sm:w-[301px]">
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
    </div>
  );
};
