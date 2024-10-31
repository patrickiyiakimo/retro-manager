// export const generate_id = async (team_id: {
//     uuid: string;
// }) => {
//     try {
//         const response = await fetch("http://localhost:2500/generateId", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(team_id),
//         });

//         if (!response.ok) {
//             throw new Error("Failed to generate Team ID")
//         }
//     } catch (error) {
//         console.error("Error generating teamId:", error)
//         throw error
//     }
// }








export const generate_id = async (team_id: {
  uuid: string;
}): Promise<string> => {
  try {
    const response = await fetch("http://localhost:2500/generateId", {
      method: "POST", // Changed to POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team_id),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || "Failed to generate Team ID");
    }

    const data = await response.json(); 
    return data.uuid; 
  } catch (error) {
    console.error("Error generating teamId:", error);
    throw error; 
  }
};