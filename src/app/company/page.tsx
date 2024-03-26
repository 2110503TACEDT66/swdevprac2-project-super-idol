import { TextField } from "@mui/material";
import Link from "next/link";
import getCompanies from "@/libs/getCompanies";

export default async function jobOffer() {
  const listCompanies = await getCompanies();
  console.log(listCompanies.data);
  return (
    <div>
      <div className="mt-5 m-10 w-[74rem]">
        <div className="text-center mt-5 font-bold text-3xl">Company</div>
        <div className="bg-[#E6E8E6] w-full mt-5 rounded-lg">
          <TextField
            className="bg-[#FFD3C7] mt-7 mb-5 mx-10 w-[70rem]"
            label="Search"
            variant="outlined"
          ></TextField>
          <div className="interview-list-container overflow-y-auto h-[410px]">
            {listCompanies.data.map((x) => {
              return (
                <div className="bg-[#CED0CE] mx-10 my-5 p-5 rounded">
                  <div className="text-2xl font-bold">{x.name}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{x.description}</div>
                  <Link href={`company/${x.id}`}>
                    <button className="my-1 ml-[900px] py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                      View
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
