export default async function createInterview(userId: string, joboffer: string, date: string, token: string) {
    const response = await fetch("https://superidol-backend.onrender.com/api/v1/interviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            user: userId,
            joboffer: joboffer,
            date: date,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create interview");
    }

    return response.json();
};
