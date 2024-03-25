import Link from "next/link";

export default function jobOfferDetail({params}:{params:{id:string}}){
    
    const listjobOffer = new Map()
        listjobOffer.set("001",{title:"FrontEnd",company:"Blockfint",salary:"30000",workstyle:"online",workplace:"SamyamMITR",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listjobOffer.set("002",{title:"BackEnd",company:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listjobOffer.set("003",{title:"Ux/Ui",company:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});

    return(
        <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
            <div className="text-center font-bold text-5xl pt-3">
                {(listjobOffer.get(params.id)).title}
            </div>
            <div className="bg-[#CED0CE] mx-10 my-3 rounded">
                <div className="text-xl pt-10">
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Company:&nbsp;&nbsp;</div>
                        {(listjobOffer.get(params.id)).company}
                    </div>
                </div>
                <div className="m-5 text-xl">
                    {(listjobOffer.get(params.id)).description}
                </div>
                <div className="text-xl pb-16">
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Salary:&nbsp;&nbsp;</div>
                        {(listjobOffer.get(params.id)).salary}
                    </div>
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">WorkStyle:&nbsp;&nbsp;</div>
                        {(listjobOffer.get(params.id)).workstyle}
                    </div>
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">WorkPlace:&nbsp;&nbsp;</div>
                        {(listjobOffer.get(params.id)).workplace}
                    </div>
                </div>
            </div>
            <div className="justify-between flex flex-row mx-32 py-10">
                <div>
                    <Link href={"/jobOffer"}>
                        <button className="my-1 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                            Back
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <button className="my-1 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
    
