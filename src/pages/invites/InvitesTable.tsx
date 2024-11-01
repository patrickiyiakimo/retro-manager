// import InviteEditModal from './InviteEditModal';

// export default function InvitesTable() {
//   return (
//     <div>
//       <div className="relative mt-20 overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
//           <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
//             <tr>
//               <th scope="col" className="p-4">
//                 Image
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Email
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Position
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="text-white">
//             <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 ">
//               <th
//                 scope="row"
//                 className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
//               >
//                 <img
//                   className="size-10 rounded-full"
//                   src="/images/profile-picture-1-retro-manager.jpg"
//                   alt="profile-logo"
//                 />
//                 <div className="ps-3"></div>
//               </th>
//               <td className="px-6 py-4">
//                 <div className="font-normal text-gray-800 dark:text-white">testing@gmail.com</div>
//               </td>
//               <td className="px-6 py-4 text-gray-800 dark:text-white">Invited</td>
//               <td className="px-6 py-4">
//                <InviteEditModal />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




import InviteEditModal from "./InviteEditModal";

export default function InvitesTable() {
  const email = "testing@gmail.com";
  const firstLetter = email.charAt(0).toUpperCase();

  return (
    <div>
      <div className="relative mt-20 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="p-4">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 ">
              <th
                scope="row"
                className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                  {firstLetter} 
                </div>
                <div className="ps-3"></div>
              </th>
              <td className="px-6 py-4">
                <div className="font-normal text-gray-800 dark:text-white">
                  {email}
                </div>
              </td>
              <td className="px-6 py-4 text-gray-800 dark:text-white">
                Invited
              </td>
              <td className="px-6 py-4">
                <InviteEditModal />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

