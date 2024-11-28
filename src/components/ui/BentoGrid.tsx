'use client';

import React, { useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import MagicButton from "../MagicButton";

import { WrapSpeed } from "./WrapSpeed";
import { BackgroundBeamsDemo } from "../BgBeams";

export const BentoGrid = ( {
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
} ) =>
{
    return (
        <div
            className={ cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            ) }
        >
            { children }
        </div>
    );
};

export const BentoGridItem = ( {
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    descriptionClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    descriptionClassName?: string;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
} ) =>
{
    const leftLists = [ "تسریع سوختگیر", "ایمنی شهروندان", "ارتقاء رضایتمندی" ];
    const rightLists = [ "بهینه سازی", "مدیریت داده محور", " امنیت سامانه" ];

    const [ copied, setCopied ] = useState( false );



    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: copied,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () =>
    {
        const text = "bmsco2020@gmail.com";
        navigator.clipboard.writeText( text );
        setCopied( true );
    };

    const words = [
        {
            text: "برگرفته از دل طبیعت",
        },
        {
            text: "برای امیدی تازه",
        },
    ];

    return (
        <div
            className={ cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            ) }
            style={ {
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            } }
        >
            {/* add img divs */ }
            <div className={ `${ id === 6 && "flex justify-center" } h-full` }>
                <div>{ id === 1 }</div>
                <div className="w-full h-full absolute">
                    { img && (
                        <img
                            src={ img }
                            alt={ img }
                            className={ cn( imgClassName, "object-cover object-center " ) }
                        />
                    ) }
                </div>
                { id === 5 && (
                    <div className="">
                        <WrapSpeed />
                    </div>
                ) }
                { id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundBeamsDemo />

                ) }

                <div
                    className={ cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-25"
                    ) }
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */ }
                    <div className="font-sans justify-center font-bold md:max-w-32 md:text-sm lg:text-center lg:justify-center text-sm text-[#42b04d] z-10">
                        { description }
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/ }
                    {/* remove mb-2 mt-2 */ }
                    <div
                        className={ `font-sans direction-rtl text-sm sm:text-xs sm:scroll-m-5  lg:justify-end lg:text-sm max-w-96 font-bold text-[#e9e6ec] z-10` }
                    >
                        { title }
                    </div>
                    {/* for the github 3d globe */ }
                    {/* id === 2 && <GlowingStarsBackgroundCard className="w-full" /> */ }
                    {/* Tech stack list div */ }
                    {/* id === 1 && (
            <div className=" overflow-hidden absolute h-fit">
              <LampDemp />
            </div>
          ) */}
                    { id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-3">
                            {/* tech stack lists */ }
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                { leftLists.map( ( item, i ) => (
                                    <span
                                        key={ i }
                                        className="lg:py-3 lg:px-2 py-2 px-1 text-xs lg:text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#449f5d]"
                                    >
                                        { item }
                                    </span>
                                ) ) }
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                { rightLists.map( ( item, i ) => (
                                    <span
                                        key={ i }
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-center opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#46719e]"
                                    >
                                        { item }
                                    </span>
                                ) ) }
                            </div>
                        </div>
                    ) }


                </div>
            </div>
        </div>
    );
};