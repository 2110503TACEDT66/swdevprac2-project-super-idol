export default async function getJobOffers(): Promise<JobOffersJson> {
    const response = await fetch("https://superidol-backend.onrender.com/api/v1/joboffers");

    if (!response.ok) {
        throw new Error("Failed to fetch job offers");
    }

    return response.json();
};
