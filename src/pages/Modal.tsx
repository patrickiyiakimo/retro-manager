import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Modal() {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(true);
  };

  return (
    <div className="mb-10 ml-5 mt-10 w-60 rounded-lg bg-blue-700  px-5  text-white">
      {!isClose && (
        <div className="mb-10 mt-10 w-60 rounded-lg bg-blue-700 px-5 text-white">
          <span
            onClick={handleClose}
            className="ml-44 mt-5  cursor-pointer p-2 text-xl font-bold text-white"
          >
            X
          </span>
          <h1 className="whitespace-nowrap pb-5 text-xl font-bold">
            Upgrade your team
          </h1>
          <p>Private retros, mention teammates, admin controls, and more...</p>
          <Link to="/createteam">
            <p>
              Create Workspace
              <button className="cursor-pointer py-10 font-bold hover:underline">
                <FaArrowRight className="pl-1 pt-2" />
              </button>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
