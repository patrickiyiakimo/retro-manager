import React from "react";

interface RetroProps {
  publicRetro: {
    id: number;
    Icon: React.ElementType; // Icon is a React component
    title: string;
  }[];
}

export default function Sprint({ publicRetro }: RetroProps) {
  return (
    <div className=" bg-gray-200 py-20 dark:bg-gray-800 dark:text-gray-300">
      <h1 className="text-center text-4xl font-bold">Public Retro</h1>

      {/* Map over sprintDetails and render each item */}
      <div className="ml-32  mt-10 grid grid-cols-2 items-center justify-center gap-10 px-40">
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
        <button className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Start Free Retro 
        </button>
      </div>
    </div>
  );
}
