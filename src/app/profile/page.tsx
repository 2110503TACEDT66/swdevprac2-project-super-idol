"use client";
import ProfileBanner from "@/components/ProfileBanner";
import InterviewSection from "@/components/InterviewSection";
import { useSession } from "next-auth/react";

export default function profile(){
    const { data: session } = useSession();
    return(
        <div className="flex flex-row">
            <ProfileBanner/>
            <InterviewSection token={session?.user.token || ""}/>
        </div>
    )
    
}