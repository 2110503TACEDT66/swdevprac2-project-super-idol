import Image from "next/image";

export default function companyDetail({params}:{params:{id:string}}){
    const listCompany = new Map()
        listCompany.set("001",{title:"Blockfint",address:"Saint Lotus",Tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listCompany.set("002",{title:"Blockfint",address:"Saint Lotus",Tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listCompany.set("003",{title:"Blockfint",address:"Saint Lotus",Tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});

    return(
        <div>
            <div className="bg-[#E6E8E6] w-full mt-5 rounded-lg">
                <Image src={(listCompany.get(params.id)).logo} alt="testimg" width={200} height={200} />
            </div>
        </div>
    )
}
    
