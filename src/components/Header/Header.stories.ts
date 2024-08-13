import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  tags: ["autodocs"],
  component: Header,
  argTypes: {
    buttonConfigs: {
      description: "Array of button configurations to render in the header.",
      control: {
        type: "object", // Permitir la edición en el panel de Storybook
      },
    },
    loginOnClick: {
      type: "function",
      description: "Function to be called when the login button is clicked.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    buttonConfigs: [], // Sin botones
    loginOnClick: () => alert("Iniciar sesión clickeado!"),
  },
};

export const WithButtons: Story = {
  args: {
    buttonConfigs: [
      {
        label: "Inicio",
        onClick: () => alert("Botón 1 clickeado!"),
      },
      {
        label: "Redes Humanas",
        onClick: () => alert("Botón 2 clickeado!"),
      },
      {
        label: "Synergo",
        onClick: () => alert("Botón 3 clickeado!"),
      },
    ],
    loginOnClick: () => alert("Iniciar sesión clickeado!"),
  },
};
