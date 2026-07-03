import type { SelectOption } from "../JobBoard.types";

export interface JobBoardLocationFilterProps {
  locationOptions: SelectOption[];
  onLocationChange: (value: string) => void;
}
