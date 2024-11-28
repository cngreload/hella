"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";

const loadingStates = [
  {
    text: "یک سامانه هوشمند برای تمام فصول",
  },
  {
    text: "منازل، کسب و کارها و صنایع",
  },
  {
    text: "طراحی موژلار",
  },
  {
    text: "سطح بالایی از شخصی سازی",
  },
  {
    text: "به صرفه با کارایی آسان",
  },
  {
    text: "هوش مصنوعی شخصی و امنیت سایبری",
  },
  {
    text: "پشتیبانی، توسعه و بروز رسانی",
  },
  {
    text: "تحول در پتانسیل سودآوری و بهینه سازی",
  },
];

export function MSLoader ()
{
  const [ loading, setLoading ] = useState( false );
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */ }
      <Loader loadingStates={ loadingStates } loading={ loading } duration={ 2000 } />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */ }
      <button
        onClick={ () => setLoading( true ) }
        className=" text-white bg-black bg-opacity-80 mx-auto text-lg md:text-4xl transition font-medium duration-200 h-10 md:h-16 rounded-lg px-8 flex items-center justify-center border border-amber-500 border-b-transparent  border-t-transparent"
        style={ {
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        } }
      >
        در یک نگاه
      </button>

      { loading && (
        <button
          className="fixed top-4 left-4 text-lime-500 z-[120]"
          onClick={ () => setLoading( false ) }
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      ) }
    </div>
  );
}
