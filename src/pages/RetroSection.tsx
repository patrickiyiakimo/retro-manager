import Modal from "./Modal";

export default function RetroSection() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });



   return (
     <div className="min-h-screen pt-40">
       <p className="mx-10 mb-10 text-xl ">{formattedDate}</p>
       <form className="gap-10 md:flex">
         {/* "What went well" input */}
         <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
           <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
             <label>What went well?</label>
             <textarea
               id="whatWentWell"
               className="w-full border-2 bg-white  px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
               placeholder="What went well?"
               // value={formData.whatWentWell}
               // onChange={handleChange}
             ></textarea>
           </div>
         </div>

         {/* "What did not go well" input */}
         <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
           <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
             <label>What did not go well?</label>
             <textarea
               id="whatDidNotGoWell"
               className="w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
               placeholder="What did not go well?"
               // value={formData.whatDidNotGoWell}
               // onChange={handleChange}
             ></textarea>
           </div>
         </div>

         {/* "What are you working on" input */}
         <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
           <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
             <label>What's your focus this week?</label>
             <textarea
               id="workingOn"
               className="w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
               placeholder="What are you working on this week?"
               // value={formData.workingOn}
               // onChange={handleChange}
             ></textarea>
           </div>
         </div>

         {/* "What needs improvement" input */}
         <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
           <div className="rounded-t-lg bg-white px-4 py-2 dark:bg-gray-800">
             <label>What do we need to improve on? </label>
             <textarea
               id="improvement"
               className="w-full border-2 bg-white px-0 pl-2 text-sm text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
               placeholder="What do we need to improve on?"
               // value={formData.improvement}
               // onChange={handleChange}
             ></textarea>
           </div>
         </div>

         <div className="mt-6 mr-1">
           <button
             type="submit"
             className="inline-flex whitespace-nowrap items-center rounded-lg bg-blue-700 px-3 py-4 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
           >
             Post Standup
           </button>
         </div>
       </form>
       <Modal />
     </div>
   );
}
