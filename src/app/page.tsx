import TopMenu from "@/components/TopMenu";
import Image from "next/image";
import ProfileBanner from "@/components/ProfileBanner";
import InterviewSection from "@/components/InterviewSection";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <ProfileBanner/>
        <InterviewSection/>
      </div>
    </main>
  );
}
