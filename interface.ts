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

interface JobOffersJson {
    success: boolean;
    data: JobOfferItem[];
}

interface JobOfferItem {
    _id: string;
    name: string;
    description: string;
    salary: string;
    workstyle: string;
    address: string;
    company: string;
    id: string;
}

interface InterviewsJson {
    success: boolean;
    data: InterviewItem[];
}

interface InterviewItem {
    _id: string;
    joboffer: {
        _id: string;
        name: string;
        description: string;
        company: {
            _id: string;
            name: string;
            id: string;
        }
        id: string;
    }
    user: string;
    date: string;
    createAt: string;
    __v: number;
}