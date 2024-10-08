import Modal from "./Modal";

export default function RetroSection() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" min-h-screen pt-40">
      <p className="mx-10 mb-10 text-xl ">{formattedDate}</p>
      <form className="gap-10 md:flex">
        <div className="mb-4 w-full  rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <textarea
              id="comment"
              className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="What went well?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Post comment
            </button>
            <div className="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse"></div>
          </div>
        </div>
        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              // rows="4"
              className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="What did not go well?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Post comment
            </button>
            <div className="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse"></div>
          </div>
        </div>
        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              // rows="4"
              className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="What are you working on this week?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Post comment
            </button>
            <div className="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse"></div>
          </div>
        </div>
       
        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
            <label className="sr-only">Your comment</label>
            <textarea
              id="comment"
              // rows="4"
              className="w-full border-0 bg-white px-0 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="What do we need to improve on?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-t px-3 py-2 dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              Post comment
            </button>
            <div className="flex space-x-1 ps-0 sm:ps-2 rtl:space-x-reverse"></div>
          </div>
        </div>
      </form>
      <Modal />
    </div>
  );
}
