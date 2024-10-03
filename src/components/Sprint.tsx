import React from "react";


export default function Sprint() {
  return (
    <div className="container flex gap-10 pb-40">
      <div>
        <h1 className="ml-20 text-5xl font-bold pb-10">What is Sprint Evaluation?</h1>
        <p className="ml-20 text-2xl ">
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
  );
}
