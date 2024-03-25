import ProfileBanner from "@/components/ProfileBanner";
import InterviewSection from "@/components/InterviewSection";

export default function profile(){
    return(
        <div className="flex flex-row">
            <ProfileBanner/>
            <InterviewSection/>
        </div>
    )
    
}