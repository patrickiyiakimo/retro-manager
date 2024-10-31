import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

interface RetroItem {
  id: number;
  accomplished: string;
  not_well: string;
  working_on: string;
  improvement: string;
}

export default function RetroStandup() {
  // Specify the type of the retro state as an array of RetroItem
  const [retro, setRetro] = useState<RetroItem[]>([]);

  const getStandups = async () => {
    try {
      const response = await fetch("http://localhost:2500/standups");
      const jsonData = await response.json();
      setRetro(jsonData);
    } catch (error) {
      console.error("Error Message", error);
    }
  };

  useEffect(() => {
    getStandups();
  }, []);

  return (
    <div className="space-y-4">
      {retro.map((retroItem) => (
        <div
          key={retroItem.id}
          className="flex flex-col space-y-4 md:flex-row md:space-x-4"
        >
          {/* Accomplished Section */}
          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What went well
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.accomplished}
            </p>
            <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
              <button className="rounded-lg bg-red-500 px-2 py-2 font-bold text-white">
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-2 py-2 font-bold text-white">
                Edit
              </button>
            </div>
          </Card>

          {/* Not Well Section */}
          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What did not go well
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.not_well}
            </p>
            <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
              <button className="rounded-lg bg-red-500 px-2 py-2 font-bold text-white">
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-2 py-2 font-bold text-white">
                Edit
              </button>
            </div>
          </Card>

          {/* Working On Section */}
          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Focus this week
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.working_on}
            </p>
            <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
              <button className="rounded-lg bg-red-500 px-2 py-2 font-bold text-white">
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-2 py-2 font-bold text-white">
                Edit
              </button>
            </div>
          </Card>

          {/* Improvement Section */}
          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Improvement
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.improvement}
            </p>
            <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
              <button className="rounded-lg bg-red-500 px-2 py-2 font-bold text-white">
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-2 py-2 font-bold text-white">
                Edit
              </button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
