import Link from "next/link";
import getJobOffer from "@/libs/getJobOffer";

export default async function jobOfferDetail({params}:{params:{id:string}}){
    const jobOffer = await getJobOffer(params.id);

    return(
        <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
            <div className="text-center font-bold text-5xl pt-3">
                {jobOffer.name}
            </div>
            <div className="bg-[#CED0CE] mx-10 my-3 rounded">
                <div className="text-xl pt-10">
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Company:&nbsp;&nbsp;</div>
                        {jobOffer.company}
                    </div>
                </div>
                <div className="m-5 text-xl">
                    {jobOffer.description}
                </div>
                <div className="text-xl pb-16">
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">Salary:&nbsp;&nbsp;</div>
                        {jobOffer.salary}
                    </div>
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">WorkStyle:&nbsp;&nbsp;</div>
                        {jobOffer.workstyle}
                    </div>
                    <div className="m-5 flex flex-row">
                        <div className="font-bold">WorkPlace:&nbsp;&nbsp;</div>
                        {jobOffer.address}
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
                    <Link href={`/jobOffer/${params.id}/book?name=${jobOffer.name}`}>
                        <button className="my-1 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
    
