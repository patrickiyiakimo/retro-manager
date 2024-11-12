import * as Yup from "yup";

export const nameValidator = Yup.string()
  .required("Name is required")
  .min(3, "Name must be at least 3 characters long");

export const emailValidator = Yup.string()
  .required("Email is required")
  .email("Email is not valid");

  export const passwordValidator = Yup.mixed()
    .required("Password is required")
    .test(
      "is-string-or-number",
      "Password must be a string or a number",
      (value) => {
        return typeof value === "string" || typeof value === "number";
      },
    )
    .test(
      "min-length",
      "Password must be at least 6 characters long",
      (value) => {
        if (typeof value === "string") {
          return value.length >= 6;
        }
        return true; // If it's a number, we don't check length
      },
    );
// export const passwordValidator = Yup.string()
//   .required("Password is required")
//   .min(6, "Password must be at least 6 characters long");

export const rememberValidator = Yup.boolean();

export const validationSchema = Yup.object().shape({
  name: nameValidator,
  email: emailValidator,
  password: passwordValidator,
  remember: rememberValidator,
});
