import { Input } from "@gi/athena";

import SearchIcon from "@/assets/icons/search.svg";

import {
  JOB_BOARD_SEARCH_INPUT_TEST_ID,
  JOB_BOARD_SEARCH_PLACEHOLDER,
} from "../JobBoard.constants";
import type { JobBoardSearchInputProps } from "./JobBoardSearchInput.types";

export const JobBoardSearchInput = ({
  onSearchChange,
}: JobBoardSearchInputProps) => (
  <div className="w-full sm:w-[301px]">
    <Input
      dataTestId={JOB_BOARD_SEARCH_INPUT_TEST_ID}
      placeholder={JOB_BOARD_SEARCH_PLACEHOLDER}
      onChange={onSearchChange}
      RightIcon={
        <span className="mr-0.5">
          <SearchIcon aria-hidden="true" />
        </span>
      }
    />
  </div>
);
