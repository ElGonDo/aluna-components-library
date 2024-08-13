import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Definimos las propiedades que el componente recibirá
interface LoginFormProps {
  buttons: {
    label: string;
    href: string;
    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
  }[]; // Cambiar el tipo de svg
  onButtonClick: (href: string) => void; // Función para manejar la redirección
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const LoginForm: React.FC<LoginFormProps> = ({ buttons, onButtonClick }) => {
  const [buttonIndex, setButtonIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Secuencialmente muestra los botones
    const showButtons = async () => {
      for (let i = 0; i < buttons.length; i++) {
        setButtonIndex(i);
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 300)); // Tiempo de retraso entre botones
      }
    };

    showButtons();
  }, [controls, buttons.length]);

  const handleClick = (href: string) => {
    // Llama a la función de redirección proporcionada
    onButtonClick(href);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full h-full">
      <div className="w-full max-w-xs space-y-4">
        {buttons.map((button, index) => (
          <motion.button
            key={button.label}
            className="w-full p-4 text-white rounded-lg shadow-md transition-transform duration-300 bg-blue-500 flex items-center justify-center space-x-2"
            variants={buttonVariants}
            initial="hidden"
            animate={buttonIndex >= index ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleClick(button.href)}
            transition={{ duration: 0.5, delay: index * 0.5 }} // Retraso de aparición
          >
            {/* Mostrar el SVG si está presente */}
            {button.svg && (
              <span className="mr-2">
                {<button.svg className="w-5 h-5" aria-hidden="true" />}
              </span>
            )}
            <span>{button.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LoginForm;
