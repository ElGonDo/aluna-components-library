import { useState } from "react";
import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";
import type { CandidateData, CompanyData } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleButtonClick = (href: string) => {
      console.log(`Redirecting to ${href}`);
    };

    const handleRegister = (formData: CandidateData | CompanyData) => {
      console.log("Form data received:", formData);
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        onButtonClick={handleButtonClick}
        onRegister={handleRegister}
      />
    );
  },
};

export const Closed: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };

    const handleButtonClick = (href: string) => {
      console.log(`Redirecting to ${href}`);
    };

    const handleRegister = (formData: CandidateData | CompanyData) => {
      console.log("Form data received:", formData);
    };

    return (
      <>
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Abrir Modal
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onButtonClick={handleButtonClick}
          onRegister={handleRegister}
        />
      </>
    );
  },
};
