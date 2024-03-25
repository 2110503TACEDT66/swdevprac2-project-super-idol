"use client"
import Link from "next/link";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function jobOfferBook({params}:{params:{id:string}}){

    const listjobOffer = new Map()
        listjobOffer.set("001",{title:"FrontEnd",company:"Blockfint",salary:"30000",workstyle:"online",workplace:"SamyamMITR",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listjobOffer.set("002",{title:"BackEnd",company:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});
        listjobOffer.set("003",{title:"Ux/Ui",company:"Blockfint",address:"Saint Lotus",tel:"0987654321",logo:"https://drive.google.com/uc?id=19l9NAB9P8Lmd0GhIPavxgayEfkQtO00O",description:"need skilled frontend dev. tons of experience need 20 years as a high school work full time 24/7 salary: 1 dollars Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem"});

    return(
        <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
            <div className="text-center font-bold text-5xl pt-3">
                {(listjobOffer.get(params.id)).title}
            </div>
            <div className="bg-[#CED0CE] mx-10 my-3 rounded">
                <div className="flex flex-row p-10 justify-between">
                    <div className="mx-20 my-28">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker className="bg-white rounded" label="Choose Your Time" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="mx-10">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar className="bg-white rounded-lg" />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
            <div>
                <div className="justify-between flex flex-row mx-32 py-5">
                    <div>
                        <Link href={`/jobOffer/${params.id}`}>
                            <button className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                                Back
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/profile"}>
                            <button className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}