import React, { useState } from "react";
import { generate_id } from "../api/GenerateTeamId";
import { FaRegCopy } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

export default function CreateTeam() {
  const [uuid, setUuid] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCopied(false); 

    const teamId = { uuid: "some-unique-value" }; 

    try {
      const generatedUuid = await generate_id(teamId);
      setUuid(generatedUuid);
    } catch (err) {
      setError("Failed to generate Team ID");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (uuid) {
      navigator.clipboard.writeText(uuid);
      setCopied(true); 
    }
  };

  return (
    <div className="min-h-screen pt-72 md:pt-52">
      <div className="flex items-center justify-center">
        <div className="w-96 rounded-lg border-2 p-10 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <label className="block pb-2 text-xl font-bold dark:text-white">
              Generate Team ID
            </label>
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-blue-700 px-10 py-3 font-bold text-white hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Generating..." : "Create"}
            </button>
          </form>
          {uuid && (
            <div className="mt-4">
              <p className="text-sm  font-semibold">Team ID: {uuid}</p>
              <button
                onClick={handleCopy}
                className="mt-2 w-full flex justify-center items-center rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-400"
              >
                {copied ? <GrStatusGood /> : <FaRegCopy />}
              </button>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}
