import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { Footer } from "./Footer";

const DEFAULT_LINKS = [
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

const meta = {
  title: "Shared/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    links: {
      table: { category: "Content" },
      control: "object",
    },
    showOrganizationPanel: {
      table: { category: "Content" },
      control: "boolean",
    },
  },
  args: {
    links: DEFAULT_LINKS,
    showOrganizationPanel: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
