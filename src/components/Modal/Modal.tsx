import { useState, FC } from "react";
import ReactDOM from "react-dom";
import Luciana from "../../../public/Images/luciana.png";
import RedesHumanas from "../../../public/Images/LogoRedesHumanas.png";
import RegisterForm from "../Forms/Register/RegisterForm";
import LoginForm from "../Forms/Login/LoginForm";
import { CandidateData } from "../Forms/CandidateFormFields/CandidateFormFields";
import { CompanyData } from "../Forms/CompanyFormFields/CompanyFormFields";
import EmployeeIcon from "../../../public/icons/EmployeeIcon.svg?react";
import CompanyIcon from "../../../public/icons/CompanyIcon.svg?react";
import CandidateIcon from "../../../public/icons/CandidateIcon.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onButtonClick: (href: string) => void;
  onRegister: (formData: CandidateData | CompanyData) => void;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onButtonClick,
  onRegister,
}) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (!isOpen) return null;

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsRegistering((prev) => !prev);
      setIsTransitioning(false);
    }, 500); // Debe coincidir con la duración de la transición
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[80vh] relative flex transition-all duration-500 ease-in-out transform ${
          isTransitioning ? "opacity-0" : "opacity-100"
        } ${isRegistering ? "flex-row-reverse" : ""}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={Luciana}
            alt="Auth Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {!isRegistering && (
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-center h-full w-full justify-center overflow-auto">
              <img
                src={RedesHumanas}
                alt="Auth Image"
                className="object-cover rounded-lg"
              />
              <p className="font-light text-gray-500 dark:text-gray-400 mt-4">
                ¿Nueva Cuenta?{" "}
                <a
                  className="font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500"
                  onClick={handleToggle}
                >
                  Créala Aquí
                </a>
              </p>
              <LoginForm
                buttons={[
                  {
                    label: "Candidato",
                    href: "/portal/candidato",
                    svg: CandidateIcon,
                  },
                  {
                    label: "Empleado",
                    href: "/portal/empleado",
                    svg: EmployeeIcon,
                  },
                  {
                    label: "Compañía",
                    href: "/portal/compania",
                    svg: CompanyIcon,
                  },
                ]}
                onButtonClick={onButtonClick}
              />
            </div>
          </div>
        )}

        {isRegistering && (
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col items-center h-full w-full justify-center">
              <img
                src={RedesHumanas}
                alt="Auth Image"
                className="object-cover rounded-lg"
              />
              <h1 className="font-bold tracking-tight leading-tight text-2xl dark:text-white my-2">
                Bienvenido A Luciana
              </h1>
              <p className="font-light text-gray-500 dark:text-gray-400 mt-4">
                ¿Ya Tienes Una Cuenta?{" "}
                <a
                  className="font-medium text-primary-600 hover:underline cursor-pointer dark:text-primary-500"
                  onClick={handleToggle}
                >
                  Inicia Sesión
                </a>
              </p>
              <RegisterForm onRegister={onRegister} />
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// Exportamos también los tipos
export type { CandidateData, CompanyData };
