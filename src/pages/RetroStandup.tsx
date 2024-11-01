import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

interface RetroItem {
  standup_id: number;
  accomplished: string;
  not_well: string;
  working_on: string;
  improvement: string;
  created_at: string;
}

export default function RetroStandup() {
  const [retro, setRetro] = useState<RetroItem[]>([]);

  const deleteRetro = async (standup_id: number) => {
    try {
      const response = await fetch(
        `http://localhost:2500/standups/${standup_id}`,
        { method: "DELETE" },
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  useEffect(() => {
    getStandups();
  }, []);

  return (
    <div className="space-y-8">
      {retro.map((retroItem) => (
        <div key={retroItem.standup_id} className="space-y-4">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
              Standup for {formatDate(retroItem.created_at)}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                { title: "What went well", content: retroItem.accomplished },
                { title: "What did not go well", content: retroItem.not_well },
                { title: "Focus this week", content: retroItem.working_on },
                { title: "Improvement", content: retroItem.improvement },
              ].map(({ title, content }, index) => (
                <Card key={index} className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                className="rounded-lg bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
                onClick={() => deleteRetro(retroItem.standup_id)}
              >
                Delete
              </button>
              <button className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                Edit
              </button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
