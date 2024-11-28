import React from "react";
import { Cover } from "@/components/ui/cover";

export function WrapSpeed() {
  return (
    <div className="justify-center items-center text-center">
      <h1 className="text-emerald-400 font-bold mb-0 text-4xl md:text-4xl lg:text-6xl max-w-7xl mx-auto mt-20  text-center">
        چگونگی حمایت از کارزار <br /> <br /> <br />
      </h1>

      <p className="text-center text-xl md:text-lg font-sans max-w-4xl mt-0 mx-auto">
        ما باور داریم تمامی مردم،
        <br /> مخصوصا بخش های که از سوخت سی ان جی استفاده می نمایند، <br /> با
        پیگیری از
        <br />
        <i>شهردارها</i>، <i>مدیریت طرح سی ان جی</i>، <i>سیمفا</i>،
        <i> نمایندگان مجلس</i> <br />
        <br />
        <strong className="text-midnightblue text-2xl lg:text-4xl">
          احیاگر صنعت سوخت سی ان جی هستند
        </strong>
      </p>

      <h2 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-mredish dark:via-white dark:to-mneon">
        <Cover>شتاب به سوی هوای تمیز</Cover>
      </h2>
    </div>
  );
}
