interface CompaniesJson {
    success: boolean;
    data: CompanyItem[];
}

interface CompanyItem {
    _id: string;
    name: string;
    address: string;
    website: string;
    description: string;
    telephone_number: string;
    ImageURL: string;
    id: string;
}