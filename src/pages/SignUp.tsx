import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utilities/validators";
import { signup } from "../api/SignupUser";
import { Metadata } from "../components/Metadata";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  remember: boolean;
}

const SignUp: React.FC = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = async (
    values: SignUpFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setIsSigningUp(true);

    const userData = {
      username: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await signup(userData);
      console.log("Signup successful:", response);
    } catch (error) {
      console.log("Signup error:", error);
    } finally {
      setSubmitting(false);
      setIsSigningUp(false);
    }
  };

  return (
    <>
      <Metadata
        title="Signup | Retro Manager"
        description="Sign into Retro Manager and start giving your standup report now!"
        keywords="Signup, Sign into Retro Manager, Give standup report, Give daily standup report"
      />
      <div className="flex min-h-screen items-center justify-center py-40">
        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              remember: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="space-y-6">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign up to our platform
                </h5>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="John Jones"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <Field
                    id="email" // Add id here
                    type="email"
                    name="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="••••••••"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="remember"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Remember me
                  </label>
                  <Field
                    id="remember" // Add id here
                    type="checkbox"
                    name="remember"
                    className="size-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <ErrorMessage
                    name="remember"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
                {isSubmitting && isValid ? (
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    disabled={isSubmitting}
                  >
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline size-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium  text-white hover:bg-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create an Account
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;
