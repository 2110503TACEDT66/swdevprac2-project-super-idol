import Image from "next/image";
import Link from "next/link";

export default function companyDetail({params}:{params:{id:string}}){
    const listCompany = new Map()
        listCompany.set("001",{title:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listCompany.set("002",{title:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listCompany.set("003",{title:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});

    return(
        <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
            <div className="text-center font-bold text-5xl pt-3">
                {(listCompany.get(params.id)).title}
            </div>
            <div className="bg-[#CED0CE] mx-10 my-3 rounded">
                <div className="flex flex-row">
                    <div className="m-5 text-xl">
                        {(listCompany.get(params.id)).description}
                    </div>
                    <Image src={(listCompany.get(params.id)).logo}
                    alt="testimg" width={250} height={250}
                    className="m-5 rounded"/>
                </div>
                <div className="text-xl">
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Address:&nbsp;&nbsp;</div>
                        {(listCompany.get(params.id)).address}
                    </div>
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Telephone:&nbsp;&nbsp;</div>
                        {(listCompany.get(params.id)).tel}
                    </div>
                </div>
            </div>
            {/* <Link href={}>
                <button className="my-1 ml-[900px] py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                    Back
                </button>
            </Link> */}
        </div>
    )
}
    
