import React from "react";

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
    <div className="pb-20 md:pb-40">
      <div className="container lg:flex md:gap-10">
        <div className=" ">
          <h1 className="ml-10 md:ml-10 pb-10 text-2xl md:text-5xl font-bold lg:mt-20">
            What is Sprint Evaluation?
          </h1>
          <p className="ml-10 md:ml-10 md:text-2xl">
            The sprint review meeting allows the scrum team to assess its
            performance and devise strategies for <br/> enhancements to be implemented
            in the upcoming sprint.
          </p>
        </div>
        <div>
          <img
            src="/images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png"
            // src="/images/undraw_real_time_collaboration_c62i.png"
            alt="engineering-sprint-section"
            className="mt-10 ml-10 sm:px-10  sm:w-full rounded-lg  md:rounded-l-full w-3/4 "
            // className="mt-10 sm:px-10  sm:w-full rounded-lg md:ml-10 md:rounded-l-full lg:rounded-l-full "
          />
        </div>
      </div>

      {/* Map over sprintDetails and render each item */}
      <div className="mt-20 mx-10 md:mt-40 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-10 md:px-10 ">
        {sprintDetails.map(({ id, Icon, title, body }) => (
          <div key={id} className=" mb-10  items-start">
            <figure>
              <Icon className="size-14" />
            </figure>

            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-xl">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
