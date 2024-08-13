import React from "react";
import InputField from "../InputsFields/InputField";
import InputFieldPassword from "../InputsFields/InputFieldPassword";

// Define la interfaz para los datos de formulario del candidato
export interface CandidateData {
  identificationNumber: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define la interfaz para las props del componente CandidateFormFields
interface CandidateFormFieldsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: CandidateData;
  errors: {
    identificationNumber?: string;
    firstName?: string;
    firstLastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
}

// Componente para los campos del candidato
const CandidateFormFields: React.FC<CandidateFormFieldsProps> = ({
  onChange,
  formData,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <InputField
        label="Número de Identificación"
        type="text"
        name="identificationNumber"
        value={formData.identificationNumber}
        placeholder="123456789"
        onChange={onChange}
        required
        error={errors.identificationNumber}
      />
      <InputField
        label="Primer Nombre"
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="John"
        onChange={onChange}
        required
        error={errors.firstName}
      />
      <InputField
        label="Primer Apellido"
        type="text"
        name="firstLastName"
        value={formData.firstLastName}
        placeholder="Doe"
        onChange={onChange}
        required
        error={errors.firstLastName}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        placeholder="john.doe@example.com"
        onChange={onChange}
        required
        error={errors.email}
      />
      <InputFieldPassword
        label="Contraseña"
        name="password"
        value={formData.password}
        onChange={onChange}
        required
        error={errors.password}
      />
      <InputFieldPassword
        label="Confirmar Contraseña"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        required
        error={errors.confirmPassword}
      />
    </div>
  );
};

export default CandidateFormFields;
