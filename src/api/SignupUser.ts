// interface UserData{
//     username: string;
//     email: string;
//     password: string;
// }


// export const signup = async (userData: UserData): Promise<any> => {
//   try {
//    const response = await fetch(
//      "https://retro-manager-backend.vercel.app/register",
//      {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify(userData),
//      },
//    );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Signup Failed");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log("Error message:", error);
//     throw error;
//   }
// };







export const signup = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("http://localhost:2500/register", {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
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
