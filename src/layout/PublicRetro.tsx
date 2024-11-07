import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

interface RetroProps {
  publicRetro: {
    id: number;
    Icon: React.ElementType;
    title: string;
    body: string;
    image: string;
  }[];
}

export default function Sprint({ publicRetro }: RetroProps) {

  const [loadingStates, setLoadingStates] = useState<boolean[]>(Array(publicRetro.length).fill(true));

  const handleImageLoad = (index: number) => {
  
    setLoadingStates((prev) => {
      const newLoadingStates = [...prev];
      newLoadingStates[index] = false; 
      return newLoadingStates;
    });
  };

  return (
    <div className="py-20 text-gray-800 dark:text-white">
      <h1 className="text-center text-4xl font-bold">Our Mission</h1>
      <div className="my-10 grid gap-5 sm:grid-cols-2 md:ml-10 md:gap-10 md:px-10 lg:ml-32 lg:px-32">
        {publicRetro.map(({ id, Icon, title, body, image }, index) => (
          <Card key={id} className="max-w-sm">
            {loadingStates[index] && (
              <div
                role="status"
                className="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
              >
                <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                  <svg
                    className="size-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            )}
            <figure className={`overflow-hidden ${loadingStates[index] ? "hidden" : ""}`}>
              <img
                src={image}
                alt={`${title} logo`}
                className="h-80 w-96 rounded-t-lg transition-transform duration-300 ease-out hover:scale-105"
                onLoad={() => handleImageLoad(index)} 
              />
            </figure>
            <h5 className={`text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${loadingStates[index] ? "hidden" : ""}`}>
              {title}
            </h5>
            <p className={`font-normal text-gray-800 dark:text-white ${loadingStates[index] ? "hidden" : ""}`}>
              {body}
            </p>
          </Card>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/retrosection">
          <button className="mt-10 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Start Free Retro
          </button>
        </Link>
      </div>
    </div>
  );
}