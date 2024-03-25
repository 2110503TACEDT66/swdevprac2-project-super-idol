import { TextField } from "@mui/material"

export default function InterviewSection(){
    
    const listInterviews = [
        {title:"Front-End",company:"Blockfint",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"},
        {title:"Back-End",company:"Blockfint",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"},
        {title:"UX/UI",company:"Blockfint",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"},
    ]

    return(
        <div className="ml-10 mt-5 mr-10 w-full">
            <div className="text-center mt-5 font-bold text-3xl">Your Interviews</div>
            <div className="bg-[#E6E8E6] w-full mt-5 rounded-lg">
                <TextField className="bg-[#FFD3C7] mt-7 mb-5 mx-10 w-[48rem]" label="Search" variant="outlined"></TextField>
                <div className="interview-list-container overflow-y-auto h-[410px]">
                    {listInterviews.map((x)=>{return(
                            <div className="bg-[#CED0CE] mx-10 my-5 p-5 rounded" >
                                <div className="text-2xl font-bold">{x.title}</div>
                                <div className="font-bold">&nbsp;&nbsp;{x.company}</div>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{x.description}</div>
                                <button className='my-1 ml-[580px] py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold'>Edit</button>
                            </div>
                        )})} 
                </div>
                
            </div>
        </div>
    )
}