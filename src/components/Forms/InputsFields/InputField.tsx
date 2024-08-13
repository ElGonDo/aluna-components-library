import React from "react";

// Definimos la interfaz para las props del componente InputField
interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; // Propiedad opcional
  error?: string; // Agregado para mostrar errores
}

// Componente InputField
const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        value={value || ""}
        onChange={onChange}
        required={required}
        className={`border ${error ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
