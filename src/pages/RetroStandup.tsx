import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

interface RetroItem {
  standup_id: number;
  accomplished: string;
  not_well: string;
  working_on: string;
  improvement: string;
}

export default function RetroStandup() {
  const [retro, setRetro] = useState<RetroItem[]>([]);

  const deleteRetro = async (standup_id: number) => {
    try {
      const response = await fetch(
        `http://localhost:2500/standups/${standup_id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        setRetro((prevRetro) =>
          prevRetro.filter((item) => item.standup_id !== standup_id),
        );
      } else {
        console.error("Failed to delete item with ID:", standup_id);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const getStandups = async () => {
    try {
      const response = await fetch("http://localhost:2500/standups");
      const jsonData = await response.json();
      setRetro(jsonData);
    } catch (error) {
      console.error("Error fetching standups:", error);
    }
  };

  useEffect(() => {
    getStandups();
  }, []);

  return (
    <div className="space-y-4">
      {retro.map((retroItem) => (
        <div
          key={retroItem.standup_id}
          className="flex flex-col space-y-4 md:flex-row md:space-x-4"
        >
          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What went well
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.accomplished}
            </p>
            <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
              <button
                className="rounded-lg bg-red-500 px-2 py-2 font-bold text-white"
                onClick={() => deleteRetro(retroItem.standup_id)}
              >
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-2 py-2 font-bold text-white">
                Edit
              </button>
            </div>
          </Card>

          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What did not go well
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.not_well}
            </p>
          </Card>

          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Focus this week
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.working_on}
            </p>
          </Card>

          <Card className="max-w-sm text-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Improvement
            </h2>
            <p className="mb-5 text-sm text-gray-800 dark:text-white sm:text-sm">
              {retroItem.improvement}
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
}
