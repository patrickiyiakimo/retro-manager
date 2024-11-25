export async function generate_id(teamId: { uuid: string }): Promise<string> {
  const response = await fetch(
    "https://retro-manager-backend.onrender.com/generateId/generate_uuid",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamId),
    },
  );

  if (!response.ok) {
    throw new Error('Failed to generate UUID');
  }

  const data = await response.json();
  return data.uuid; 
}