interface LoginResponse {
 
  token?: string; 
  user?: {
    id: string;
    email: string;
  };
  message?: string; 
}

export const login = async (userData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await fetch("https://retro-manager-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || "Failed to login"); 
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};