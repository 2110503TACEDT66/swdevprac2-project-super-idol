export default async function deleteInterview(id: string, token: string) {
    const response = await fetch(`https://superidol-backend.onrender.com/api/v1/interviews/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to delete interview");
    }

    return response.json();
};
