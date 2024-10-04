import React from "react";
import { sprintDetails } from "./SprintDetails";
// import { sprintDetails } from "sprintDetails";

interface SprintProps {
  sprintDetails: {
    id: number;
    Icon: React.ElementType; // Icon is a React component
    title: string;
    body: string;
  }[];
}

export default function Sprint({ sprintDetails }: SprintProps) {
  return (
    <div className=" pb-40">
      <div className="container flex gap-10">
        <div className=" ">
          <h1 className="ml-20 pb-10 text-5xl font-bold">
            What is Sprint Evaluation?
          </h1>
          <p className="ml-20 text-2xl">
            The sprint review meeting allows the scrum team to assess its
            performance and devise strategies for enhancements to be implemented
            in the upcoming sprint.
          </p>
        </div>
        <div>
          <img
            src="/images/undraw_Engineering_team_a7n2.png"
            alt="engineering-sprint-section"
            className=" rounded-l-full"
          />
        </div>
      </div>

      {/* Map over sprintDetails and render each item */}
      <div className="mt-40 grid grid-cols-2 gap-10 px-40 ">
        {sprintDetails.map(({ id, Icon, title, body }) => (
          <div key={id} className=" mb-10  items-start">
            <figure>
              <Icon className="h-14 w-14" />
            </figure>

            <div>
              <h2 className="text-4xl font-bold">{title}</h2>
              <p className="text-2xl">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

