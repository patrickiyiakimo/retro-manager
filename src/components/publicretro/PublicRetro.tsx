import React from "react";
import { Link } from "react-router-dom";

interface RetroProps {
  publicRetro: {
    id: number;
    Icon: React.ElementType;
    title: string;
  }[];
}

export default function Sprint({ publicRetro }: RetroProps) {
  return (
    <div className=" bg-gray-200 py-20 dark:bg-gray-700 dark:text-gray-300">
      <h1 className="text-center text-4xl font-bold">Public Retro</h1>

      {/* Map over sprintDetails and render each item */}
      <div className="ml-10 md:ml-10 lg:ml-32  mt-10 sm:grid sm:grid-cols-2  items-center justify-center sm:gap-5 md:gap-10 md:px-10 lg:px-40">
        {publicRetro.map(({ id, Icon, title }) => (
          <div key={id} className=" mb-10  items-start">
            <figure>
              <Icon className="size-10 text-blue-500" />
            </figure>

            <div>
              <h2 className="inline text-2xl font-semibold">{title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/retrosection">
         <button className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Start Free Retro 
        </button>
        </Link>
      </div>
    </div>
  );
}
