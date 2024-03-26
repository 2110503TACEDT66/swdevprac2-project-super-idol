"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

export default function ProfileBanner() {
  const { data: session } = useSession();
  return (
    <div className=" h-[85vh] w-[30vw] my-8 bg-[#E6E8E6] rounded-r-md py-0">
      <Image
        src={session?.user.ImageURL || "/profilePic.png"}
        className=" pt-10 mx-28 rounded"
        alt="profilPic"
        width={150}
        height={150}
      />
      <div className="h-[25vh] w-60 my-6 bg-[#CED0CE] rounded-md pt-2 px-4 mx-16">
        <h1 className="font-semibold">Name</h1>
        <h3>&nbsp;&nbsp;{session?.user.name}</h3>
        <h1 className="font-semibold">Tel.</h1>
        <h3>&nbsp;&nbsp;{session?.user.telephone_number}</h3>
        <h1 className="font-semibold">Email</h1>
        <h3>&nbsp;&nbsp;{session?.user.email}</h3>
      </div>
    </div>
  );
}
