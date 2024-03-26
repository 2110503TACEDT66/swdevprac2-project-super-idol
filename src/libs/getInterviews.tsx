export default async function getInterviews(token: string): Promise<InterviewsJson> {
  const response = await fetch(
    "https://superidol-backend.onrender.com/api/v1/interviews", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch interviews");
  }

  return response.json();
}
