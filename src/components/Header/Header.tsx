import { FC, forwardRef } from "react";
import RedesHumanasImage from "../../../public/Images/LogoRedesHumanas.png";

type ButtonConfig = {
  label: string;
  onClick?: () => void; // onClick es opcional
};

interface HeaderProps {
  buttonConfigs?: ButtonConfig[]; // buttonConfigs es opcional
  loginOnClick?: () => void; // loginOnClick es opcional
}

export const Header: FC<HeaderProps> = forwardRef<HTMLDivElement, HeaderProps>(
  ({ buttonConfigs = [], loginOnClick, ...props }) => {
    return (
      <header
        className="flex justify-between items-center p-4 bg-gray-100 text-gray-800 border-b-2 border-gray-300"
        {...props}
      >
        <div className="flex items-center">
          <img
            src={RedesHumanasImage}
            alt="Logo Redes Humanas"
            className="w-max h-max"
          />
        </div>
        <div className="flex space-x-10">
          {buttonConfigs.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              aria-label={button.label}
              className="text-gray-800 font-semibold hover:underline"
            >
              {button.label}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={loginOnClick}
            className="border border-black text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200"
            aria-label="Iniciar sesión"
          >
            Iniciar Sesión
          </button>
        </div>
      </header>
    );
  }
);
