import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";


export default function InviteTeamModal() {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Modal toggle button */}
      <button
        onClick={toggleModal}
        className="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <HiDotsHorizontal />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex size-full items-center justify-center bg-black/50"
        >
          <div className="relative w-full max-w-md p-24">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
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

              {/* Modal body */}
              <div className="p-5 md:p-5 ">
                <button className="mb-4 block w-full  rounded-lg bg-blue-600 py-2 text-xl text-white hover:bg-blue-800">
                  Resend Invitation
                </button>

                <button className="w-full  rounded-lg bg-red-500  py-2 text-xl text-white hover:bg-red-600">
                  Cancel Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




// import React from "react";
// import { HiX } from "react-icons/hi";

// // Define the Invitee interface
// interface Invitee {
//   invited_email: string; // Adjust based on your actual field names
//   status?: string; // Optional field
// }

// interface InviteEditModalProps {
//   invitee: Invitee; // Accept the invitee prop
//   onClose: () => void; // Function to close the modal
// }

// const InviteEditModal: React.FC<InviteEditModalProps> = ({
//   invitee,
//   onClose,
// }) => {
//   const handleResend = () => {
//     console.log(`Resending invitation to ${invitee.invited_email}`);
//     // Add your resend logic here
//     onClose(); // Close the modal after action
//   };

//   const handleCancel = () => {
//     console.log(`Cancelling invitation for ${invitee.invited_email}`);
//     // Add your cancel logic here
//     onClose(); // Close the modal after action
//   };

//   return (
//     <div>
//       {/* Modal Implementation */}
//       <div
//         id="authentication-modal"
//         aria-hidden="true"
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//       >
//         <div className="relative w-full max-w-md p-4">
//           <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
//             {/* Modal header */}
//             <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
//               <h3 className="text-lg font-medium text-gray-900 dark:text-white">
//                 Edit Invitation
//               </h3>
//               <button
//                 onClick={onClose}
//                 type="button"
//                 className="inline-flex items-center justify-center rounded-lg bg-transparent text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 <HiX className="h-5 w-5" />
//                 <span className="sr-only">Close modal</span>
//               </button>
//             </div>

//             {/* Modal body */}
//             <div className="p-5">
//               <p className="mb-4 text-gray-700 dark:text-gray-300">
//                 Email: <strong>{invitee.invited_email}</strong>
//               </p>
//               <p className="mb-4 text-gray-700 dark:text-gray-300">
//                 Status: <strong>{invitee.status || "Pending"}</strong>
//               </p>
//               <button
//                 onClick={handleResend}
//                 className="mb-4 block w-full rounded-lg bg-blue-600 py-2 text-xl text-white hover:bg-blue-800"
//               >
//                 Resend Invitation
//               </button>

//               <button
//                 onClick={handleCancel}
//                 className="w-full rounded-lg bg-red-500 py-2 text-xl text-white hover:bg-red-600"
//               >
//                 Cancel Invitation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InviteEditModal;