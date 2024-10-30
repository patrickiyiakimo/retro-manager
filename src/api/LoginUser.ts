export const login = async( userData: {
    email: string;
    password: string;
}) => {
    try {
        const response = await fetch("http://localhost:2500/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error("Failed to login")
        }
        return await response.json();
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}