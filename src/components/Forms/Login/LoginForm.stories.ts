import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import EmployeeIcon from "../../../../public/icons/EmployeeIcon.svg?react";
import CompanyIcon from "../../../../public/icons/CompanyIcon.svg?react";
import CandidateIcon from "../../../../public/icons/CandidateIcon.svg?react";

const meta: Meta<typeof LoginForm> = {
  title: "Components/LoginForm", // Título que aparecerá en el panel de Storybook
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {
    onButtonClick: { action: "onButtonClick" }, // Permite ver en Storybook cuando se hace clic en un botón
  },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    buttons: [
      { label: "Candidato", href: "/portal/candidato", svg: CandidateIcon },
      { label: "Empleado", href: "/portal/empleado", svg: EmployeeIcon },
      { label: "Compañía", href: "/portal/compania", svg: CompanyIcon },
    ],
    onButtonClick: (href: string) => {
      console.log(`Redirecting to ${href}`);
    },
  },
};
