import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-12 bg-[#F15025] top-0 left-0 right-0 z-30 flex flex-row justify-between">
      <Image
        src={"/img/logo.png"}
        className="w-auto h-full"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />

      <div className="py-3">
        <TopMenuItem title="Job Offer" pageRef="/jobOffer" />
        <TopMenuItem title="Company" pageRef="/company" />
        <TopMenuItem title="Profile" pageRef="/profile" />
        {session ? (
          <TopMenuItem title="Sign Out" pageRef="/api/auth/signout" />
        ) : (
          <TopMenuItem title="Sign In" pageRef="/api/auth/signin" />
        )}
        {!session ? <TopMenuItem title="Sign Up" pageRef="/register" /> : null}
      </div>
    </div>
  );
}
