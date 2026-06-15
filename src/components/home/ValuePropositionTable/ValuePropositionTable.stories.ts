import type { Meta, StoryObj } from "@storybook/react-vite";
import { ValuePropositionTable } from "./ValuePropositionTable";
import {
  VALUE_PROPOSITION_DEFAULT_ROWS,
  VALUE_PROPOSITION_HEADING,
} from "./ValuePropositionTable.constants";

const meta: Meta<typeof ValuePropositionTable> = {
  title: "home/ValuePropositionTable",
  component: ValuePropositionTable,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof ValuePropositionTable>;

export const Default: Story = {
  args: {
    heading: VALUE_PROPOSITION_HEADING,
    rows: VALUE_PROPOSITION_DEFAULT_ROWS,
    illustrationSrc: "/src/assets/images/mascot-lightbulb.png",
    illustrationAlt: "",
  },
};

export const WithoutIllustration: Story = {
  args: {
    heading: VALUE_PROPOSITION_HEADING,
    rows: VALUE_PROPOSITION_DEFAULT_ROWS,
    illustrationSrc: "",
    illustrationAlt: "",
  },
};
