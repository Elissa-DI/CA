import React from "react";
import Image from "next/image";
import { webContent } from "@utils/webContent";
import { reply, skills } from "@utils/images";
import Button from "@components/shared/button";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";
const Expertise = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center max-w-6xl m-auto md:py-10 mobile:w-[90%]">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={skills}
            alt="Picture of the author"
            width={50}
            className="cursor-pointer"
            priority
          />
          <h4 className="text-center text-[#525252]">{t.expertise.h4}</h4>
        </div>
        <h1 className="my-4 text-4xl text-center text-white mobile:text-2xl">
          {t.expertise.h1}
        </h1>
        <div className="grid max-w-2xl grid-cols-2 gap-4 mx-auto lg:max-w-screen-lg mobile:grid-cols-1 mobile:my-5 mini_tab:grid-cols-2">
          {t.expect.map((choice, index) => (
            <div
              key={index}
              className="border border-[#292929] rounded-2xl p-4 laptop:p-10 shadow-md w-full"
            >
              <div className="flex gap-2 mobile:gap-5">
                <div className="mt-1 text-center">
                  <Image
                    src={choice.icon}
                    alt={choice.icon}
                    className="mx-auto mobile:w-16"
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <span className="block text-xl font-normal text-secondary mobile:text-xl lg:mb-2">
                    {choice.name}
                  </span>
                  <p className="mb-2 text-sm text-gray-500 lg:mb-4 mobile:text-md">
                    {choice.description}
                  </p>
                  <span className="font-normal text-md text-[#858585] block mobile:text-lg">
                    {choice.sub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
