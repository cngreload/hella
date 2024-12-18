"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
export function BackgroundBeamsDemo ()
{
    return (
        <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-green-900  text-center font-sans font-bold">
                    با ما آشنا شوید
                </h1>
                <p></p>
                <q className="text-green-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mr-10">
                    لطفا اطلاعات خود را وارد نماید تا تیم با شما تماس بگیرند
                </q>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />
            </div>
            <BackgroundBeams />
        </div>
    );
}
