import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../utilities/validators"; 
import { login } from "../api/LoginUser";


interface LogInFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LogIn: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogIn = async (
    values: LogInFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    setSubmitting(true);

    const userData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await login(userData);
      console.log("LogIn successful:", response);
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setSubmitting(false);
      setIsLogin(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-40">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={validationSchema} // Pass the validationSchema here
          onSubmit={handleLogIn}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h5>
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
                  Your password
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
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Field
                      id="remember"
                      type="checkbox"
                      name="remember"
                      className="focus:ring-3 -gray-300 h-4 w-4 rounded border bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isSubmitting}
              >
                {isLogin ? (
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
                ) : (
                  <span>Login to your account</span>
                )}
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;