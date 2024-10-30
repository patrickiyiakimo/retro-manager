// export const login = async( userData: {
//     email: string;
//     password: string;
// }) => {
//     try {
//         const response = await fetch("http://localhost:2500/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userData)
//         });

//         if (!response.ok) {
//             throw new Error("Failed to login")
//         }
//         return await response.json();
//     } catch (error) {
//         console.error("Error during login:", error);
//         throw error;
//     }
// }







interface LoginResponse {
  // Define the expected structure of the response here
  token?: string; // Example: if your API returns a token
  user?: {
    id: string;
    email: string;
    // Add other user properties as needed
  };
  message?: string; // If your API returns a message
}

export const login = async (userData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await fetch("http://localhost:2500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Get error details from the response
      throw new Error(errorData.message || "Failed to login"); // Use the error message from the server if available
    }

    return await response.json(); // Return the parsed JSON response
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error for further handling
  }
};