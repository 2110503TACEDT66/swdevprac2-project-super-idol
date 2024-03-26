export default async function getCompanies(): Promise<CompaniesJson>{
    const response = await fetch("https://superidol-backend.onrender.com/api/v1/companies")

    if (!response.ok) {
        throw new Error("Failed to fetch companies")
    }

    return response.json();
};
