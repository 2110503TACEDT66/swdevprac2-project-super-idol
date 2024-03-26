"use client";
import Link from "next/link";
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import createInterview from "@/libs/createInterview";
import { useRouter } from "next/navigation";

export default function jobOfferBook({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const jobOffer = searchParams.get("name");

  const [time, setTime] = useState<Dayjs | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setIsFormValid(time !== null && date !== null);
  }, [time, date]);

  const handleCreateInterview = async (e: React.FormEvent) => {
    if (isFormValid) {
      e.preventDefault();
      try {
        if (session) {
          await createInterview(
            session.user._id,
            params.id,
            `${date?.format("YYYY-MM-DD")}T${time?.format("HH:mm")}:00.000Z`,
            session.user.token
          );
        }
        router.push("/profile");
      } catch (error) {
        console.error("Registration failed:", error);
      }
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
            <Link href={`/jobOffer/${params.id}`}>
              <button className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold">
                Back
              </button>
            </Link>
          </div>
          <div>
            <button
              className="my-1 py-2 px-3 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold"
              onClick={handleCreateInterview}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
