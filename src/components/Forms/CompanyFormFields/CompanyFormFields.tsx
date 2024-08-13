import React from "react";
import InputField from "../InputsFields/InputField";
import InputFieldPassword from "../InputsFields/InputFieldPassword";

// Define la interfaz para los datos de formulario de la compañía
export interface CompanyData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  nit: string;
  password: string;
  confirmPassword: string;
}

// Define la interfaz para las props del componente CompanyFormFields
interface CompanyFormFieldsProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: CompanyData;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    companyName?: string;
    nit?: string;
    password?: string;
    confirmPassword?: string;
  };
}

// Componente para los campos de la compañía
const CompanyFormFields: React.FC<CompanyFormFieldsProps> = ({
  onChange,
  formData,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <InputField
        label="Nombre"
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="John"
        onChange={onChange}
        required
        error={errors.firstName}
      />
      <InputField
        label="Apellido"
        type="text"
        name="lastName"
        placeholder="Doe"
        value={formData.lastName}
        onChange={onChange}
        required
        error={errors.lastName}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        placeholder="john.doe@company.com"
        onChange={onChange}
        required
        error={errors.email}
      />
      <InputField
        label="Nombre de la Compañía"
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={onChange}
        required
        error={errors.companyName}
      />
      <InputField
        label="NIT"
        type="text"
        name="nit"
        value={formData.nit}
        placeholder="123-45-678"
        onChange={onChange}
        required
        error={errors.nit}
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

export default CompanyFormFields;
