import { useState } from "react";
import Modal from "./Modal";

export default function RetroSection() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [accomplished, setAccomplished] = useState("");
  const [not_well, setNot_well] = useState("");
  const [working_on, setWorking_on] = useState("");
  const [improvement, setImprovement] = useState("");


  const onSubmitStandup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const body = { accomplished, not_well, working_on, improvement };
      const response = await fetch("http://localhost:2500/standups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit standup");
      }

      const data = await response.json(); 
      console.log("Standup submitted successfully:", data);
      setAccomplished("");
      setNot_well("");
      setWorking_on("");
      setImprovement("");
    } catch (error) {
      console.error("Error Message", error);
    }
  };

  return (
    <div className="min-h-screen pt-40">
      <p className="mx-10 mb-10 text-xl ">{formattedDate}</p>
      <form className="gap-10 md:flex" onSubmit={onSubmitStandup}>
        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label>What went well?</label>
            <textarea
              id="whatWentWell"
              className="mt-2 w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="comment something..."
              value={accomplished}
              onChange={(e) => setAccomplished(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label>What did not go well?</label>
            <textarea
              id="whatDidNotGoWell"
              className="mt-2 w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="comment something..."
              value={not_well}
              onChange={(e) => setNot_well(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label>What's your focus this week?</label>
            <textarea
              id="workingOn"
              className="mt-2 w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="comment something..."
              value={working_on}
              onChange={(e) => setWorking_on(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label>What do we need to improve on? </label>
            <textarea
              id="improvement"
              className="mt-2 w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="comment something..."
              value={improvement}
              onChange={(e) => setImprovement(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mr-1 mt-6">
          <button
            type="submit"
            className="inline-flex items-center whitespace-nowrap rounded-lg bg-blue-700 px-3 py-4 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            Post Standup
          </button>
        </div>
      </form>
      <Modal />
    </div>
  );
}
