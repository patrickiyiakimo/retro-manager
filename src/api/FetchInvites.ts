export const fetchInvites = async () => {
  const response = await fetch("http://localhost:2500/invites");
  if (!response.ok) {
    throw new Error("Failed to fetch invites");
  }
  return await response.json();
};
