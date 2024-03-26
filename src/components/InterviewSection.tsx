import { TextField } from "@mui/material";
import Link from "next/link";
import getInterviews from "@/libs/getInterviews";

export default async function InterviewSection({ token }: { token: string }) {
  const listInterviews = await getInterviews(token);
  return (
    <div className="ml-10 mt-5 mr-10 w-full">
      <div className="text-center mt-5 font-bold text-3xl">Your Interviews</div>
      <div className="bg-[#E6E8E6] w-full mt-5 rounded-lg">
        <div className="interview-list-container overflow-y-auto h-[500px]">
          {listInterviews.data.map((x) => {
            return (
              <div className="bg-[#CED0CE] mx-10 my-5 p-5 rounded">
                <div className="text-2xl font-bold">{x.joboffer.name}</div>
                <div className="font-bold">
                  &nbsp;&nbsp;{x.joboffer.company.name}
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{x.joboffer.description}
                </div>
                <div>{x.date}</div>
                <Link href={`/profile/${x._id}?name=${x.joboffer.name}&date=${x.date}`}>
                  <button className="my-1 ml-[580px] py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                    Edit
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
