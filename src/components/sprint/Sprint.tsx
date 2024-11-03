import React from "react";

interface SprintProps {
  sprintDetails: {
    id: number;
    Icon: React.ElementType;
    title: string;
    body: string;
  }[];
}

export default function Sprint({ sprintDetails }: SprintProps) {
  return (
    <div className="pb-20 md:pb-40">
      <div className="container md:gap-10 lg:flex ">
        <div className=" ">
          <h1 className="ml-10 pb-10 text-2xl font-bold md:ml-10 md:text-5xl lg:mt-40">
            What is Sprint Evaluation?
          </h1>
          <p className="ml-10 md:ml-10 md:text-2xl">
            The sprint review meeting allows the scrum team to assess its
            performance and devise strategies for <br /> enhancements to be
            implemented in the upcoming sprint.
          </p>
        </div>
        <div>
          <img
            src="/images/main-pic-68043f7e0b9a77d65db913dd43a9da06.png"
            alt="engineering-sprint-section"
            className="ml-10 mt-10 w-3/4  rounded-lg sm:w-full  sm:px-10 md:rounded-l-full "
          />
        </div>
      </div>

      {/* Map over sprintDetails and render each item */}
      <div className="mx-10 mt-20 gap-10 md:mt-40 md:grid md:grid-cols-2 md:px-10 lg:grid lg:grid-cols-2 ">
        {sprintDetails.map(({ id, Icon, title, body }) => (
          <div key={id} className=" mb-10  items-start">
            <figure>
              <Icon className="size-14" data-testid="displayName" />
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
