import { useEffect, useState } from "react";
import InviteTeamModal from "./InviteTeamModal";
import InvitesTable from "./InvitesTable";
import { fetchInvites } from "../../api/FetchInvites"; 

interface Invite {
  email: string;
  position?: string;
}

export default function InviteTeamMembers() {
  const [invites, setInvites] = useState<Invite[]>([]); 

  const fetchData = async () => {
    try {
      const response = await fetchInvites(); 
      setInvites(response);
    } catch (error) {
      console.error("Error fetching invites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addInvite = (newInvite: Invite) => {
    setInvites((prevInvites) => [...prevInvites, newInvite]);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-20">
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 text-center shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Work fast from anywhere
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-white sm:text-lg">
          Collaborate with teams from anywhere in the world
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">
          <InviteTeamModal addInvite={addInvite} />
        </div>
        <div>
          <InvitesTable invites={invites} />
        </div>
      </div>
    </div>
  );
}
