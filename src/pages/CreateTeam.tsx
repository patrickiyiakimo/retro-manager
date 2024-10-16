import React from "react";

export default function CreateTeam() {
  return (
    <div className="min-h-screen pt-72 md:pt-52">
      <div className="flex items-center justify-center">
        <div className=" w-96 rounded-lg border-2 p-10 dark:border-gray-700">
          <form>
            <label className="block pb-2 text-xl font-bold dark:text-white">
              Generate Team ID
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-600 dark:bg-gray-600 "
            />
            <button className=" mt-4 w-full rounded-md bg-blue-700 px-10 py-3 font-bold text-white hover:bg-blue-600">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
