import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Modal() {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <div className="mb-10 ml-10 mt-10 w-60 rounded-lg bg-blue-700  px-5  text-white">
      {!isClose && (
        <div className="mb-10 mt-10 w-60 rounded-lg bg-blue-700 px-5 text-white">
          <span
            onClick={handleClose}
            className="ml-44 cursor-pointer  p-2 mt-5 text-xl font-bold text-white"
          >
            X
          </span>
          <h1 className="whitespace-nowrap pb-5 text-xl font-bold">
            Upgrade your team
          </h1>
          <p>Private retros, mention teammates, admin controls, and more...</p>
          <p className="cursor-pointer py-5 font-bold hover:underline">
            Create Workspace
            <button>
              <FaArrowRight className="pl-1 pt-2" />
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
