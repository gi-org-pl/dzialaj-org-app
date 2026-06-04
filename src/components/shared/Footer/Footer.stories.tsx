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
    showOrganizationPanel: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithOrganizationPanel: Story = {
  name: "With Organization Panel (Mobile)",
  args: {
    showOrganizationPanel: true,
  },
  globals: {
    viewport: { value: "mobile1" },
  },
};

export const MobileLayout: Story = {
  name: "Mobile Layout",
  globals: {
    viewport: { value: "mobile1" },
  },
};

export const DesktopLayout: Story = {
  name: "Desktop Layout",
  globals: {
    viewport: { value: "desktop" },
  },
};

export const DesktopWithOrganizationPanel: Story = {
  name: "Desktop Layout (Panel Organizacji Hidden)",
  args: {
    showOrganizationPanel: true,
  },
  globals: {
    viewport: { value: "desktop" },
  },
};
