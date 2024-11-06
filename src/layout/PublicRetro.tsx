import React from "react";
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
  return (
    <div className="py-20 text-gray-800 dark:text-white">
      <h1 className="text-center text-4xl font-bold">Our Mission</h1>

      {/* Map over publicRetro and render each item */}
      <div className="my-10 grid gap-5 sm:grid-cols-2 md:ml-10 md:gap-10 md:px-10 lg:ml-32 lg:px-32">
        {publicRetro.map(({ id, Icon, title, body, image }) => (
          <Card key={id} className="max-w-sm">
            <figure className="overflow-hidden">
              {" "}
              {/* Add overflow-hidden to the figure */}
              <img
                src={image}
                alt={`${title} logo`}
                className="h-80 w-96 transform rounded-t-lg transition-transform duration-300 ease-out hover:scale-105" // Add transition classes
              />
            </figure>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-800 dark:text-white">{body}</p>
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
