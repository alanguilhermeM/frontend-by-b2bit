import { LoginRequestBody } from "../types";

export const validate = (values: LoginRequestBody) => {
  const errors: Partial<LoginRequestBody> = {};
  if (!values.email) {
    errors.email = "Este campo é obrigatório.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Este campo é obrigatório.";
  }

  return errors;
};
