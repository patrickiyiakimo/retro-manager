export const signup = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("http://localhost:2500/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    return await response.json();
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
