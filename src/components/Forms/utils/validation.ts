import { CandidateData } from "../CandidateFormFields/CandidateFormFields";
import { CompanyData } from "../CompanyFormFields/CompanyFormFields";

// Define la función de validación para los datos de la compañía
export const validateCompanyData = (data: CompanyData) => {
  const errors: Record<string, string> = {};

  if (!data.email || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Email inválido";
  if (!data.password || data.password.length < 6)
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Las contraseñas no coinciden";
  if (!data.firstName) errors.firstName = "Nombre es requerido";
  if (!data.lastName) errors.lastName = "Apellido es requerido";
  if (!data.companyName)
    errors.companyName = "Nombre de la compañía es requerido";
  if (!data.nit) errors.nit = "NIT es requerido";

  return errors;
};

// Define la función de validación para los datos del candidato
export const validateCandidateData = (data: CandidateData) => {
  const errors: Record<string, string> = {};

  if (!data.email || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Email inválido";
  if (!data.password || data.password.length < 6)
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Las contraseñas no coinciden";
  if (!data.identificationNumber)
    errors.identificationNumber = "Número de identificación es requerido";
  if (!data.firstName) errors.firstName = "Primer nombre es requerido";
  if (!data.firstLastName)
    errors.firstLastName = "Primer apellido es requerido";

  return errors;
};
