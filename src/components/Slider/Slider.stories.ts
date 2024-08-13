import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import RedesHumanasImage from "../../../public/Images/LogoRedesHumanas.png";
import image1 from "../../../public/Images/Image@3x.png";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  tags: ["autodocs"],
  component: Slider,
  argTypes: {
    image: {
      description: "URL de la imagen que se mostrará en el slider.",
      control: {
        type: "text", // Permitir la edición en el panel de Storybook
      },
    },
    news: {
      description: "Texto de la noticia.",
      control: {
        type: "text",
      },
    },
    title: {
      description: "Título de la noticia.",
      control: {
        type: "text",
      },
    },
    paragraph: {
      description: "Descripción adicional de la noticia.",
      control: {
        type: "text",
      },
    },
    date: {
      description: "Fecha de la noticia.",
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    image: RedesHumanasImage,
    news: "Noticia Importante",
    title: "Título de la Noticia",
    paragraph: "Este es un párrafo descriptivo sobre la noticia.",
    date: "01 de enero de 2023",
  },
};

export const CustomContent: Story = {
  args: {
    image: image1,
    news: "¡Noticias!",
    title: "Conectando talentos, cultivando oportunidades.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet elementum enim, convallis vestibulum arcu. Sed neque nunc, commodo et luctus nec.",
    date: "02 de febrero de 2023",
  },
};
