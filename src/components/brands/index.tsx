import React from "react";
import { webContent } from "@utils/webContent";
import Image from "next/image";
import { edu } from "@utils/images";
import en from "@components/locales/en";
import de from "@components/locales/de";
import { useRouter } from "next/router";
const Brands = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : de;
  return (
    <section>
      <div className="flex flex-col items-center justify-center max-w-6xl m-auto md:py-10 mobile:my-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={edu}
            alt="Picture of the author"
            width={50}
            className="cursor-pointer"
            priority
          />
          <h4 className="text-center text-[#525252]">{t.brands.h1}</h4>
        </div>
        <h1 className="my-4 text-4xl text-center text-white mobile:text-xl">
          {t.brands.h2}
        </h1>
        <div className=" flex flex-col justify-center bg-[#0F0F0F] lg:max-w-screen-lg items-center border w-full rounded-2xl border-[#282828] mx-auto max-w-2xl my-4 mobile:w-[90%]">
          <div className="bg-[#292929] mx-auto lg:max-w-screen-lg max-w-2xl text-center rounded-tr-2xl rounded-tl-2xl w-full">
            <span className="text-[#525252] text-sm text-center laptop:text-xl">
              {t.brands.h3}
            </span>
          </div>
          <div className="flex justify-between gap-5 p-4 mobile:grid mobile:grid-cols-2 mobile:gap-10 mini_tab:flex">
            {webContent.brands.map((choice, index) => (
              <div key={index}>
                <Image
                  src={choice.logo}
                  alt={choice.logo}
                  className="lg:w-64 lg:h-48"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
