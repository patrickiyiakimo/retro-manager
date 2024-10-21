import * as Yup from "yup";

export const nameValidator = Yup.string()
  .required("Name is required")
  .min(3, "Name must be at least 3 characters long");

export const emailValidator = Yup.string()
  .required("Email is required")
  .email("Email is not valid");

export const passwordValidator = Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters long");

export const rememberValidator = Yup.boolean();

export const validationSchema = Yup.object().shape({
  name: nameValidator,
  email: emailValidator,
  password: passwordValidator,
  remember: rememberValidator,
});
