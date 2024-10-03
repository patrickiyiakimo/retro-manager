import React from 'react'

export default function Hero() {
  return (
    <div className="pt-56 ">
      <div className=" mx-20  ">
        <h1 className=" text-center text-6xl font-bold">
          Enhance Team Collaboration with
        </h1>
        <h1 className=" text-center text-6xl font-bold">
          Effective Agile Retrospectives
        </h1>
        <p className="  mx-72 pt-6 text-center text-xl font-semibold md:text-3xl">
          Drive continuous improvement and
        </p>
        <p className="  mx-72 text-center text-xl font-semibold md:text-3xl">
          elevate your workflow.
        </p>
        <p className="  mx-72 text-center text-xl font-semibold md:text-3xl">
          Absolutely free!
        </p>
        <div className="my-6 flex items-center justify-center ">
          <button className="rounded-md bg-blue-700 px-7 py-3 text-white hover:bg-blue-600">
            Start Retro
          </button>
          <button className="mx-4 rounded-md bg-gray-400 px-7 py-3 text-white hover:bg-blue-300">
            Create Team
          </button>
        </div>
      </div>
    </div>
  );
}
