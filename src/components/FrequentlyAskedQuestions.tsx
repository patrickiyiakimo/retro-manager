import { faq } from "./Faq"; 
import { Accordion } from "flowbite-react";

export default function FrequentlyAskedQuestions() {
  return (
    <div className="mt-40">
      <h1 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h1>
      <Accordion collapseAll className="space-y-4">
        <Accordion.Panel>
          {faq.map((item, index) => (
            <div key={index} className="rounded-md border p-4 shadow-md">
              <Accordion.Title>{item.title}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-800 dark:text-white">{item.body}</p>
              </Accordion.Content>
            </div>
          ))}
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
