import InviteEditModal from "./InviteEditModal";

interface Invite {
  email: string;
  position?: string;
}

interface InvitesTableProps {
  invites: Invite[]; 
}

export default function InvitesTable({ invites }: InvitesTableProps) {
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
            {invites.length > 0 ? (
              invites.map((invite, index) => (
                <tr
                  key={index}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                      {invite.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="ps-3"></div>
                  </th>
                  <td className="px-6 py-4">
                    <div className="font-normal text-gray-800 dark:text-white">
                      {invite.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-800 dark:text-white">
                    {invite.position || "Invited"}
                  </td>
                  <td className="px-6 py-4">
                    <InviteEditModal />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No invites found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}