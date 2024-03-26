export default async function getCompany(id: string){
    const response = await fetch(`https://superidol-backend.onrender.com/api/v1/companies/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch company");
    }

    return response.json();
};
