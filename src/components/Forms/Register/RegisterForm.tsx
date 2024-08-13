import React, { useState } from "react";
import CandidateFormFields, {
  CandidateData,
} from "../CandidateFormFields/CandidateFormFields";
import CompanyFormFields, {
  CompanyData,
} from "../CompanyFormFields/CompanyFormFields";
import {
  validateCandidateData,
  validateCompanyData,
} from "../utils/validation";

const RegisterForm: React.FC<{
  onRegister: (formData: CandidateData | CompanyData) => void;
}> = ({ onRegister }) => {
  const [formData, setFormData] = useState<CandidateData | CompanyData>(
    {} as CandidateData | CompanyData
  );
  const [userType, setUserType] = useState<"candidate" | "company">(
    "candidate"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Marca el campo como tocado
    setTouchedFields((prevTouched) => new Set(prevTouched).add(name));

    // Realiza la validación del campo actual solo si ha sido tocado
    let validationErrors: Record<string, string> = {};
    if (userType === "candidate") {
      validationErrors = validateCandidateData({
        ...formData,
        [name]: value,
      } as CandidateData);
    } else {
      validationErrors = validateCompanyData({
        ...formData,
        [name]: value,
      } as CompanyData);
    }

    // Si el formulario está vacío, limpia los errores
    if (Object.values(formData).every((value) => value.trim() === "")) {
      validationErrors = {};
    } else {
      // Solo se muestran errores para campos tocados
      const filteredErrors = Object.fromEntries(
        Object.entries(validationErrors).filter(([key]) =>
          touchedFields.has(key)
        )
      );
      validationErrors = filteredErrors;
    }

    setErrors(validationErrors);
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();

    // Realiza la validación final
    let validationErrors = {};
    if (userType === "candidate") {
      validationErrors = validateCandidateData(formData as CandidateData);
    } else {
      validationErrors = validateCompanyData(formData as CompanyData);
    }

    if (Object.keys(validationErrors).length === 0) {
      setErrors({}); // Limpiar errores si la validación es exitosa
      onRegister(formData);
      setFormData({} as CandidateData | CompanyData); // Vaciamos los campos
      setTouchedFields(new Set()); // Reinicia los campos tocados
    } else {
      setErrors(validationErrors as Record<string, string>);
    }
  };

  const handleUserTypeChange = (type: "candidate" | "company") => {
    setUserType(type);
    setErrors({}); // Limpiar errores cuando se cambia el tipo de usuario
    setTouchedFields(new Set()); // Reinicia los campos tocados
    setFormData({} as CandidateData | CompanyData); // Vaciamos los campos
  };

  return (
    <div className="max-w-md mx-auto h-full w-full overflow-auto no-scrollbar p-4">
      <div className="flex relative inset-x-0 bottom-0 mb-4">
        <button
          className="px-4 py-2 w-1/2 text-center rounded-md bg-transparent text-black"
          onClick={() => handleUserTypeChange("candidate")}
        >
          Candidato
        </button>
        <button
          className="px-4 py-2 w-1/2 text-center rounded-md bg-transparent text-black"
          onClick={() => handleUserTypeChange("company")}
        >
          Compañía
        </button>
        <div
          className={`absolute bottom-0 left-0 h-1 w-1/2 bg-blue-500 transition-transform duration-300 ease-in-out ${
            userType === "candidate"
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{
            transform:
              userType === "candidate" ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="w-full flex-shrink-0 p-2">
            {userType === "candidate" && (
              <CandidateFormFields
                onChange={handleInputChange}
                formData={formData as CandidateData}
                errors={errors}
              />
            )}
          </div>
          <div className="w-full flex-shrink-0 p-2">
            {userType === "company" && (
              <CompanyFormFields
                onChange={handleInputChange}
                formData={formData as CompanyData}
                errors={errors}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
