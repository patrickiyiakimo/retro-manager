interface InviteTeam {
  invitedEmail: string;
  uuid: number;
}

export const inviteteam = async (inviteTeam: InviteTeam): Promise<any> => {
  try {
    const response = await fetch(
      "https://retro-manager-server.vercel.app/invites",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inviteTeam),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invite Failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Message:", error);
    throw error;
  }
};
