import { faq } from "./Faq";
import { Accordion } from "flowbite-react";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="py-40 min-h-screen md:mx-40">
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
              <p className="mb-2 text-gray-800 dark:text-white">{item.body}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}
