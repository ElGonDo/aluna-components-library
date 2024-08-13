import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  tags: ["autodocs"],
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {},
};
