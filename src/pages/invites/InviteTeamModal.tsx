// import React, { useEffect, useState } from "react";
// import { inviteteam } from "../../api/InviteTeam";

// export default function InviteTeamModal() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [uuid, setUuid] = useState("");

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await inviteteam({
//         invitedEmail: email,
//         uuid: Number(uuid),
//       });
//       console.log("Invite successful:", response);
//     } catch (error) {
//       console.error("Error sending invite:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const sendInvite = async () => {
//       if (!email || !uuid) return; // Prevents sending request if email or uuid is empty

//       try {
//         const response = await fetch("http://localhost:2500/invites", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, uuid: Number(uuid) }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to send invite");
//         }

//         const result = await response.json();
//         console.log("Invite sent successfully:", result);
//       } catch (error) {
//         console.error("Error sending invite:", error);
//       }
//     };

//     sendInvite();
//   }, [email, uuid]); // Dependencies ensure that the effect re-runs only if email or uuid changes

//   return (
//     <div>
//       {/* Modal toggle button */}
//       <button
//         onClick={toggleModal}
//         className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         + Invite Team Members
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           id="authentication-modal"
//           aria-hidden="true"
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//         >
//           <div className="relative w-full max-w-md p-4">
//             <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
//               {/* Modal header */}
//               <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   Invite Team Members
//                 </h3>
//                 <button
//                   onClick={toggleModal}
//                   type="button"
//                   className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="size-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
//                     />
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>

//               {/* Modal body */}
//               <div className="p-4 md:p-5">
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team Member Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="name@company.com"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team ID
//                     </label>
//                     <input
//                       type="text"
//                       name="text"
//                       value={uuid}
//                       onChange={(e) => setUuid(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="Enter Team ID"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     {isLoading ? (
//                       <svg
//                         aria-hidden="true"
//                         className="inline size-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
//                         viewBox="0 0 100 101"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                           fill="currentFill"
//                         />
//                       </svg>
//                     ) : (
//                       "Submit"
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import { inviteteam } from "../../api/InviteTeam";

// export default function InviteTeamModal() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [uuid, setUuid] = useState("");
//   const [error, setError] = useState(""); // State for error messages
//   const [successMessage, setSuccessMessage] = useState(""); // State for success messages

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     setError(""); // Clear error when modal is toggled
//     setSuccessMessage(""); // Clear success message when modal is toggled
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(""); // Clear any previous errors
//     setSuccessMessage(""); // Clear previous success message

//     // Validate input
//     if (!email || !uuid) {
//       setError("Both fields are required.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await inviteteam({
//         invitedEmail: email,
//         uuid: Number(uuid),
//         // uuid: Number(uuid),
//       });
//       console.log("Invite successful:", response);
//       setSuccessMessage("Invite sent successfully!"); // Success feedback
//       setEmail(""); // Clear email input
//       setUuid(""); // Clear uuid input
//     } catch (error) {
//       console.error("Error sending invite:", error);
//       setError("Error sending invite. Please try again."); // Error feedback
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={toggleModal}
//         className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         + Invite Team Members
//       </button>

//       {isModalOpen && (
//         <div
//           id="authentication-modal"
//           aria-hidden="true"
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//         >
//           <div className="relative w-full max-w-md p-4">
//             <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
//               <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   Invite Team Members
//                 </h3>
//                 <button
//                   onClick={toggleModal}
//                   type="button"
//                   className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="size-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
//                     />
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>

//               <div className="p-4 md:p-5">
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   {error && <p className="text-red-600">{error}</p>}
//                   {successMessage && (
//                     <p className="text-green-600">{successMessage}</p>
//                   )}
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team Member Email
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="name@company.com"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team ID
//                     </label>
//                     <input
//                       type="text"
//                       value={uuid}
//                       onChange={(e) => setUuid(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="Enter Team ID"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     {isLoading ? (
//                       <svg
//                         aria-hidden="true"
//                         className="inline size-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
//                         viewBox="0 0 100 101"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C62.1586 10.7673 68.6267 12.5409 74.6534 15.3602C80.6796 18.2011 86.2354 21.3707 90.4822 25.8915C91.8482 27.8935 92.7094 30.4049 92.9873 33.141C93.0124 33.2415 93.0095 33.3452 92.9683 33.4422C92.2859 36.6069 89.7497 39.4548 86.5256 39.6695C84.9484 39.8124 93.9676 39.0409 93.9676 39.0409Z"
//                           fill="currentFill"
//                         />
//                       </svg>
//                     ) : (
//                       "Send Invite"
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import { inviteteam } from "../../api/InviteTeam";

// interface InviteTeamModalProps {
//   email: string;
//   uuid: string;
// }

// export default function InviteTeamModal({ uuid }: InviteTeamModalProps) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [teamUuid, setTeamUuid] = useState(uuid); // Renamed state variable
//   const [error, setError] = useState(""); // State for error messages
//   const [successMessage, setSuccessMessage] = useState(""); // State for success messages

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     setError(""); // Clear error when modal is toggled
//     setSuccessMessage(""); // Clear success message when modal is toggled
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(""); // Clear any previous errors
//     setSuccessMessage(""); // Clear previous success message

//     // Validate input
//     if (!email || !teamUuid) {
//       setError("Both fields are required.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await inviteteam({
//         invitedEmail: email,
//         uuid: teamUuid,
//       });
//       console.log("Invite successful:", response);
//       setSuccessMessage("Invite sent successfully!"); // Success feedback
//       setEmail(""); // Clear email input
//       setTeamUuid(""); // Clear uuid input
//     } catch (error) {
//       console.error("Error sending invite:", error);
//       setError("Error sending invite. Please try again."); // Error feedback
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={toggleModal}
//         className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         + Invite Team Members
//       </button>

//       {isModalOpen && (
//         <div
//           id="authentication-modal"
//           aria-hidden="true"
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//         >
//           <div className="relative w-full max-w-md p-4">
//             <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
//               <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   Invite Team Members
//                 </h3>
//                 <button
//                   onClick={toggleModal}
//                   type="button"
//                   className="text-gray- 400 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="size-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
//                     />
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>

//               <div className="p-4 md:p-5">
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   {error && <p className="text-red-600">{error}</p>}
//                   {successMessage && (
//                     <p className="text-green-600">{successMessage}</p>
//                   )}
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team Member Email
//                     </label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="name@company.com"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
//                       Team ID
//                     </label>
//                     <input
//                       type="text"
//                       value={teamUuid}
//                       onChange={(e) => setTeamUuid(e.target.value)}
//                       className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
//                       placeholder="Enter Team ID"
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     {isLoading ? (
//                       <svg
//                         aria-hidden="true"
//                         className="inline size-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
//                         viewBox="0 0 100 101"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C62.1586 10.7673 68.6267 12.5409 74.6534 15.3602C80.6796 18.2011 86.2354 21.3707 90.4822 25.8915C91.8482 27.8935 92.7094 30.4049 92.9873 33.141C93.0124 33.2415 93.0095 33.3452 92.9683 33.4422C92.2859 36.6069 89.7497 39.4548 86.5256 39.6695C84.9484 39.8124 93.9676 39.0409 93.9676 39.0409Z"
//                           fill="currentFill"
//                         />
//                       </svg>
//                     ) : (
//                       "Send Invite"
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import { inviteteam } from "../../api/InviteTeam";

interface InviteTeamModalProps {
  email: string;
  uuid: string;
}

export default function InviteTeamModal({ email, uuid }: InviteTeamModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamEmail, setTeamEmail] = useState(email); // Use email prop
  const [teamUuid, setTeamUuid] = useState(uuid); // Use uuid prop
  const [error, setError] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success messages

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setError(""); // Clear error when modal is toggled
    setSuccessMessage(""); // Clear success message when modal is toggled
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear any previous errors
    setSuccessMessage(""); // Clear previous success message

    // Validate input
    if (!teamEmail || !teamUuid) {
      setError("Both fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await inviteteam({
        invitedEmail: teamEmail,
        uuid: teamUuid,
      });
      console.log("Invite successful:", response);
      setSuccessMessage("Invite sent successfully!"); // Success feedback
      setTeamEmail(""); // Clear email input
      setTeamUuid(""); // Clear uuid input
    } catch (error) {
      console.error("Error sending invite:", error);
      setError("Error sending invite. Please try again."); // Error feedback
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        + Invite Team Members
      </button>

      {isModalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div className="relative w-full max-w-md p-4">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Invite Team Members
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="size-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && <p className="text-red-600">{error}</p>}
                  {successMessage && (
                    <p className="text-green-600">{successMessage}</p>
                  )}
                  <div>
                    <label className="text-gray- 900 mb-2 block text-sm font-medium dark:text-white">
                      Team Member Email
                    </label>
                    <input
                      type="email"
                      value={teamEmail}
                      onChange={(e) => setTeamEmail(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Team ID
                    </label>
                    <input
                      type="text"
                      value={teamUuid}
                      onChange={(e) => setTeamUuid(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-200"
                      placeholder="Enter Team ID"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isLoading ? (
                      <svg
                        aria-hidden="true"
                        className="inline size-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C62.1586 10.7673 68.6267 12.5409 74.6534 15.3602C80.6796 18.2011 86.2354 21.3707 90.4822 25.8915C91.8482 27.8935 92.7094 30.4049 92.9873 33.141C93.0124 33.2415 93.0095 33.3452 92.9683 33.4422C92. 2859 36.6069 89.7497 39.4548 86.5256 39.6695C84.9484 39.8124 93.9676 39.0409 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    ) : (
                      "Send Invite"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}