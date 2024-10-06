import React from 'react'

export default function RetroSection() {
  return (
    <div className="pt-40 ml-20 ">
      <form className="flex">
        <div>
          <label>What Went Well?</label>
          <input
            type="text"
            placeholder="write something..."
            className="w-60 rounded-md border-none bg-gray-500 text-white placeholder:text-white"
          />
        </div>
        <div>
          <label>What did not go well?</label>
          <input
            type="text"
            placeholder="write something..."
            className="w-60 rounded-md border-none bg-gray-500 text-white placeholder:text-white"
          />
        </div>
        <div>
          <label>What are you working on this week?</label>
          <input
            type="text"
            placeholder="write something..."
            className="w-60 rounded-md border-none bg-gray-500 text-white placeholder:text-white"
          />
        </div>
        <div>
          <label>What do we need to improve on?</label>
          <input
            type="text"
            placeholder="write something..."
            className="w-60 rounded-md border-none bg-gray-500 text-white placeholder:text-white"
          />
        </div>
      </form>
    </div>
  );
}
