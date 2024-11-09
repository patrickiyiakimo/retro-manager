import { useEffect, useState } from "react";
import InvitesTable from "./InvitesTable";
import InviteTeamModal from "./InviteTeamModal";
import { fetchInvites } from "../../api/FetchInvites";

interface Invite {
  email: string;
  position?: string;
}

export default function InviteManager() {
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
    <div>
      <InviteTeamModal addInvite={addInvite} />
      <InvitesTable invites={invites} />
    </div>
  );
}
