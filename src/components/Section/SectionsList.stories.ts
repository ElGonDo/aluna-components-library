import type { Meta, StoryObj } from "@storybook/react";
import { SectionsList } from "./SectionsList"; // Asegúrate de que la ruta sea correcta

const meta: Meta<typeof SectionsList> = {
  title: "Components/SectionsList",
  tags: ["autodocs"],
  component: SectionsList,
};

export default meta;
type Story = StoryObj<typeof SectionsList>;

export const Default: Story = {
  args: {},
};
