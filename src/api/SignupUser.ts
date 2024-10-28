interface UserData{
    username: string;
    email: string;
    password: string;
}


export const signup = async (userData: UserData): Promise<any> => {
  try {
   const response = await fetch(
     "https://retro-manager-server.vercel.app/register",
     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userData),
     },
   );

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || "Signup Failed"); 
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.log("Error message:", error);
    throw error; 
  }
};
