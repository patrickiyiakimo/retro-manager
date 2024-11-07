import React, { useEffect, useState } from "react";
import InvitesTable from "./InvitesTable"; // Adjust the import path as necessary
import InviteTeamModal from "./InviteTeamModal"; // Adjust the import path as necessary
import { fetchInvites } from "../../api/FetchInvites"; // Adjust the import path as necessary

interface Invite {
  email: string;
  position?: string;
}

export default function InviteManager() {
  const [invites, setInvites] = useState<Invite[]>([]); // Specify the type for invites

  const fetchData = async () => {
    try {
      const response = await fetchInvites(); // Fetch invites from your API
      setInvites(response);
    } catch (error) {
      console.error("Error fetching invites:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addInvite = (newInvite: Invite) => {
    // Specify the type for newInvite
    setInvites((prevInvites) => [...prevInvites, newInvite]);
  };

  return (
    <div>
      <InviteTeamModal addInvite={addInvite} />
      <InvitesTable invites={invites} />
    </div>
  );
}
