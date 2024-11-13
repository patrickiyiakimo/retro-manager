import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    // IntersectionObserver for lazy loading the background image
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionElement.style.backgroundImage =
              "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')";
            observer.unobserve(sectionElement);
          }
        });
      },
      { threshold: 0.1 }, 
    );

    observer.observe(sectionElement);

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        data-testid="hero-background"
        className="mb-20 bg-gray-700 bg-center bg-no-repeat bg-blend-multiply"
        style={{ minHeight: "500px" }} 
      >
        <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Enhance Team Collaboration with Effective Agile Retrospectives
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
            Drive continuous improvement and elevate your workflow. Absolutely
            free!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/retrosection"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Start Retro
              <svg
                className="ms-2 size-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              to="/createteam"
              className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 sm:ms-4"
            >
              Create Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
