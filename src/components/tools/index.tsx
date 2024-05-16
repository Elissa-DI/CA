import React from "react";
import Image from "next/image";
import { webContent } from "@utils/webContent";
import { box, reply } from "@utils/images";
import Button from "@components/shared/button";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";

const Tools = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  return (
    <section>
      <div className="flex flex-col items-center justify-center max-w-6xl m-auto md:py-10 mobile:my-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={box}
            alt="Picture of the author"
            width={50}
            className="cursor-pointer"
            priority
          />
          <h4 className="text-center text-[#525252]">{t.tools.h1}</h4>
        </div>
        <h1 className="my-4 text-4xl text-center text-white mobile:text-2xl lg:text-4xl">
          {t.tools.h2}
        </h1>
        <div className=" flex flex-col justify-center bg-[#0F0F0F] items-center border w-full rounded-2xl border-[#282828] mx-auto lg:max-w-screen-lg max-w-2xl my-4 mobile:w-[90%]">
          <div className="bg-[#292929] mx-auto lg:max-w-screen-lg max-w-2xl text-center rounded-tr-2xl rounded-tl-2xl w-full">
            <span className="text-[#525252] text-sm text-center lg:text-xl">
              {t.tools.h3}
            </span>
          </div>
          <div className="flex justify-between gap-5 p-4 mobile:grid mobile:grid-cols-2 mobile:gap-10 mini_tab:flex lg:p-3">
            {webContent.stacks.map((choice, index) => (
              <div key={index}>
                <Image
                  src={choice.icon}
                  alt={choice.icon}
                  className="lg:w-56 lg:h-56"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mobile:text-[9px] text-[#525252] text-[12px] lg:text-xl">
          <p>{t.tools.h4}</p>
          <span>{t.tools.h5}</span>
        </div>
      </div>
    </section>
  );
};

export default Tools;
