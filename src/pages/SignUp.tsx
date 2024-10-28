import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utilities/validators"; 
import { signup } from "../api/SignupUser"; 


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
      // Handle successful signup (e.g., redirect, show a success message, etc.)
    } catch (error) {
      console.log("Signup error:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setSubmitting(false);
      setIsSigningUp(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-40">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <Formik
          initialValues={{ name: "", email: "", password: "", remember: false }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up to our platform
              </h5>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="John Jones"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="••••••••"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Remember me
                </label>
                <Field
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
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
                  <div role="status">{/* Loading spinner */}</div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create an Account
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
