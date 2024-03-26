import Image from "next/image";
import Link from "next/link";
import getCompany from "@/libs/getCompany";

export default async function companyDetail({
  params,
}: {
  params: { id: string };
}) {
  const responseCompany = await getCompany(params.id);
  const company = responseCompany.data;
  console.log(company);
  return (
    <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
      <div className="text-center font-bold text-5xl pt-3">{company.name}</div>
      <div className="bg-[#CED0CE] mx-10 my-3 rounded">
        <div className="flex flex-row">
          <div className="m-5 text-xl">{company.description}</div>
          <Image
            src={company.ImageURL}
            alt="testimg"
            width={250}
            height={250}
            className="m-5 rounded"
          />
        </div>
        <div className="text-xl pb-16">
          <div className="m-5 flex flex-row">
            <div className="font-bold">Address:&nbsp;&nbsp;</div>
            {company.address}
          </div>
          <div className="m-5 flex flex-row">
            <div className="font-bold">Telephone:&nbsp;&nbsp;</div>
            {company.telephone_number}
          </div>
        </div>
      </div>
      <div className="justify-between flex flex-row mx-32 py-10">
        <div>
          <Link href={"/company"}>
            <button className="my-1 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
              Back
            </button>
          </Link>
        </div>
        <div>
          <Link href={company.website} target="blank">
            <button className="my-1 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
              Website
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
