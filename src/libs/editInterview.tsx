export default async function editInterview(id: string, date: string, token: string) {
    const response = await fetch(`https://superidol-backend.onrender.com/api/v1/interviews/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            date: date,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to edit interview");
    }

    return response.json();
};
