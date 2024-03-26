"use client";
import Link from "next/link";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import editInterview from "@/libs/editInterview";
import deleteInterview from "@/libs/deleteInterview";

export default function jobOfferEdit({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const jobOffer = searchParams.get("name");
  const jobDate = searchParams.get("date");

  const [time, setTime] = useState<Dayjs | null>(dayjs(jobDate));
  const [date, setDate] = useState<Dayjs | null>(dayjs(jobDate));
  const [isFormValid, setIsFormValid] = React.useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setIsFormValid(time !== null && date !== null);
  }, [time, date]);

  const handleEditInterview = async (e: React.FormEvent) => {
    if (isFormValid) {
      e.preventDefault();
      try {
        if (session) {
          await editInterview(
            params.id,
            `${date?.format("YYYY-MM-DD")}T${time?.format("HH:mm")}:00.000Z`,
            session.user.token
          );
        }
        router.push("/profile");
      } catch (error) {
        alert("Wrong Date")
        console.error("Registration failed:", error);
      }
    }
  };

  const handleDeleteInterview = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert("Deleted")
      if (session) {
        await deleteInterview(params.id, session.user.token);
      }
      router.push("/profile");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="bg-[#E6E8E6] w-[74rem] my-7 mx-10 rounded">
      <div className="text-center font-bold text-5xl pt-3">{jobOffer}</div>
      <div className="bg-[#CED0CE] mx-10 my-3 rounded">
        <div className="flex flex-row p-10 justify-between">
          <div className="mx-20 my-28">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  className="bg-white rounded"
                  label="Choose Your Time"
                  value={time}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="mx-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                className="bg-white rounded-lg"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div>
        <div className="justify-between flex flex-row mx-32 py-5">
          <div>
            <Link href={`/profile`}>
              <button className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                Back
              </button>
            </Link>
          </div>
          <div className="flex flex-row">
            <div className="px-10">
              <button
                className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold"
                onClick={handleDeleteInterview}
              >
                Delete
              </button>
            </div>
            <div>
              <button
                className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold"
                onClick={handleEditInterview}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
