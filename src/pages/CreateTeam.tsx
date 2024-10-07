import React from "react";

export default function CreateTeam() {
  return (
    <div className="min-h-screen pt-72 md:pt-52">
      <div className="flex items-center justify-center">
        <div className=" p-10 rounded-lg w-96 border-2">
          <form>
            <label className="block text-xl font-bold pb-2 dark:text-white">Create Team</label>
            <input type="text" className="w-full rounded-lg dark:bg-gray-600" />
            <button className="bg-blue-700 text-white w-full hover:bg-blue-600 px-10 py-3 rounded-md mt-4 font-bold">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
