import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

const meta: Meta<typeof RegisterForm> = {
  title: "Components/RegisterForm", // Título que aparecerá en el panel de Storybook
  tags: ["autodocs"],
  component: RegisterForm,
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    onRegister: (data) => {
      console.log("Registro exitoso:", data);
    },
  },
};
