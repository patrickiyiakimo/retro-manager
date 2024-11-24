import { faq } from "./Faq";
import { Accordion } from "flowbite-react";
import { Metadata } from "./Metadata";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Metadata
        title="FAQ | Retro Manager"
        description="Go through the frequently asked questions (faq) to learn how to start using Retro Manager now"
        keywords="FAQ, Frequently Asked Questions, Retro Manager FAQ, Retro Manager Frequently Asked Questions, Retro Manager Questions and Answers, Everything you need to know about Retro Manager"
      />
      <div className=" min-h-screen py-40 md:mx-40">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Frequently Asked Questions
        </h1>
        <Accordion alwaysOpen={false}>
          {faq.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="mb-2 text-gray-800 dark:text-white">
                {item.title}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-800 dark:text-white">
                  {item.body}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  );
}
