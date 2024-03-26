export default async function getJobOffer(id: string) {
    const response = await fetch(`https://superidol-backend.onrender.com/api/v1/joboffers/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch job offer");
    }

    const data = (await response.json()).data;
    
    const company = await fetch(`https://superidol-backend.onrender.com/api/v1/companies/${data.company}`);

    if (!company.ok) {
        throw new Error("Failed to fetch company");
    }

    data.company = (await company.json()).data.name;

    return data;
};
